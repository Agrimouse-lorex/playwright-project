const axios = require('axios');


const baseURL = 'https://bookstore.toolsqa.com'
const userName = `testuserfl10414`;
const password = 'Test123!';
const userID = "40daa094-61df-4b41-b3cf-98ee2e48ead4";

test("Generate token, authorize as user, GET User data, GET Books list, DELETE previous books, POST Book1 and PUT Book2", (async() => {
    const genToken = await axios.post(`${baseURL}/Account/v1/GenerateToken`, {
            userName: userName,
            password: password
        }) 
        expect(genToken.data.token).toBeDefined();
        expect(genToken.status).toBe(200);
        token = genToken.data.token;
        console.log(token)
        console.log(genToken.data)

    const authorize = await axios.post(`${baseURL}/Account/v1/Authorize`, {   
            "userName": userName,
            "password": password
        }) 
        expect(authorize.status).toBe(200);

    const responseUser = await axios.get(`${baseURL}/Account/v1/User/${userID}`, {
          headers: { Authorization: `Bearer ${token}` }
});
        console.log(responseUser.data);
        expect(responseUser.data.username).toBe("testuserfl10414")
        expect(Array.isArray(responseUser.data.books)).toBe(true);
        expect(responseUser.status).toBe(200);

    const bookGet = await axios.get(`${baseURL}/BookStore/v1/Books`);
    const firstBook = bookGet.data.books[0];
    expect(firstBook.isbn).toBe("9781449325862")
    const bookIsbn = firstBook.isbn;
    const bookIsbnSec = bookGet.data.books[1].isbn

    const bookDel = await axios.delete(`${baseURL}/BookStore/v1/Books?UserId=40daa094-61df-4b41-b3cf-98ee2e48ead4`,{
        headers: { Authorization: `Bearer ${token}` },
    })
    expect(bookDel.status).toBe(204)
    
    const bookPost = await axios.post(`${baseURL}/BookStore/v1/Books`, {
        "userId": userID,
        "collectionOfIsbns": [{"isbn": bookIsbn}]
        }, { 
            headers: { Authorization: `Bearer ${token}` },
            validateStatus: () => true } )
        
        expect(bookPost.status).toBe(201);
        console.log(bookPost.status)
        console.log(bookPost.data)

    const bookPut = await axios.put(`${baseURL}/BookStore/v1/Books/9781449325862`, {
        "userId": userID,
        "isbn": bookIsbnSec
        }, {
            headers: { Authorization: `Bearer ${token}` }
        } )
    expect(bookPut.status).toBe(200)
    console.log(bookPut.data)

    
}))