// Завдання 3(файл task3.js)
// Перепишіть завдання 2, але використовуючи async/await.
// Створіть функцію getPostAndComments(), яка:
// Використовує await для очікування fetchPost() і fetchComments().
// Виводить отримані дані в консоль.
// Обробіть можливі помилки за допомогою try...catch.
// Додайте функцію getFastestResponse(), яка використовує Promise.race() і виводить у консоль перший отриманий результат.

async function fetchPost() {
   const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')  
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return await response.json();
}

async function fetchComments() {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
            if(!response.ok) throw new Error(`HTTP ${response.status}`);
            return response.json();
}

async function getPostAndComments() {
    try {
        const [post, com] = await Promise.all([fetchPost(), fetchComments()]);
        
        console.log("Post: ", post);
        console.log("Comments: ",com);
        } catch (err) {
            console.error('Error in getPostAndComments', err);
        }
}

async function getFasterResponse() {
    try {
        const first = await Promise.race([fetchPost(),fetchComments()])
        console.log("First response: ", first);
        } catch (err) {
            console.error("Error in getFasterResponse", err)
        }
}

getPostAndComments()
getFasterResponse()