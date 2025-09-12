// api.bookstore.spec.js
const axios = require('axios');

const baseURL = 'https://bookstore.toolsqa.com';
const userName = 'testuserfl10414';
const password = 'Test123!';
const userID   = '40daa094-61df-4b41-b3cf-98ee2e48ead4';

let token;
let isbns = [];
let currentIsbn;

jest.setTimeout(30000);

beforeAll(async () => {
  // Generate token once
  const genToken = await axios.post(`${baseURL}/Account/v1/GenerateToken`, {
    userName, password
  });
  token = genToken.data.token;
  console.log("Bearer token generated in BeforeAll: ", token);

  // Cache a couple of ISBNs for PUT/DELETE flow
  const books = await axios.get(`${baseURL}/BookStore/v1/Books`);
  isbns = books.data.books.map(b => b.isbn);
  console.log("Book map is generated here ", isbns);

  // Clean user’s shelf so tests are predictable (ignore errors)
    const user = await axios.get(`${baseURL}/Account/v1/User/${userID}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
// Цей функціонал закоментований, але може бути використаний у випадку, якщо у юзера вже є книги і їх треба видалити перед початком теста.
// в даному випадку у юзера пустий список книг і вони видаляються під кінець тесту, тож я закоментував зайвий код.
  //   const shelf = user.data.books ?? [];
//   console.log("Shelf before deleting every element", shelf)

//   for (const b of shelf) {
//     await axios.delete(`${baseURL}/BookStore/v1/Book`, {
//       headers: { Authorization: `Bearer ${token}` },
//       data: { userId: userID, isbn: b.isbn },
//     });
//   }
//     console.log("Shelf after deleting every element", shelf)
});

test('authorize', async () => {
  const res = await axios.post(`${baseURL}/Account/v1/Authorize`, { userName, password });
  expect(res.status).toBe(200);
});

test('get user', async () => {
  const res = await axios.get(`${baseURL}/Account/v1/User/${userID}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  expect(res.status).toBe(200);
});

test('POST add book', async () => {
  currentIsbn = isbns[0];
  const res = await axios.post(`${baseURL}/BookStore/v1/Books`,
    { userId: userID, collectionOfIsbns: [{ isbn: currentIsbn }] },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  expect([200, 201]).toContain(res.status);
  console.log("POST add book results: ", res.data)
});

test('GET user contains added book', async () => {
  const res = await axios.get(`${baseURL}/Account/v1/User/${userID}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  expect(res.status).toBe(200);
  expect(res.data.books.some(b => b.isbn === currentIsbn)).toBe(true);
  console.log("User contains added book: ", res.data)
});

test('PUT replace book with another', async () => {
  const newIsbn = isbns.find(i => i !== currentIsbn);
  const res = await axios.put(`${baseURL}/BookStore/v1/Books/${currentIsbn}`,
    { userId: userID, isbn: newIsbn },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  expect(res.status).toBe(200);
  currentIsbn = newIsbn;
  console.log("Book replaced with: ", res.data)
});

test('DELETE remove books', async () => {
    const bookDel = await axios.delete(`${baseURL}/BookStore/v1/Books?UserId=${userID}`,{
        headers: { Authorization: `Bearer ${token}` },
    })
    expect(bookDel.status).toBe(204)
});
