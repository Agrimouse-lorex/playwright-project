// Завдання 2(файл task2.js)
// Напишіть функцію fetchPost(), яка виконує fetch-запит за першим постом з API:https://jsonplaceholder.typicode.com/posts/1


// Функція повертає Promise, що розрішується об'єктом post.
// Для обробки fetch() використайте then():
// Перший .then() перетворює відповідь у формат JSON.
// Другий .then() повертає отриманий об'єкт.
// 2. Напишіть функцію fetchComments(), яка отримує коментарі до першого поста:
// https://jsonplaceholder.typicode.com/comments?postId=1
// Функція повертає Promise, що розрішується масивом коментарів.
// Також використовуйте then(), як у fetchPost().

function fetchPost() {
    return fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then((response) => {
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            return response.json();
        })
        .then((post) => post);
}

// function fetchComments() {
//     return fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
//         .then((response) => {
//             if(!response.ok) throw new Error(`HTTP ${response.status}`);
//             return response.json();
//         })
//         .then((comments) => comments);
// }

fetchPost()
    .then((post) => console.log('Post:', post))
    .catch((err) => console.error('Error fetchPost:', err));

// fetchComments()
//     .then((comments) => console.log('Comments:', comments))
//     .catch((err) => console.error('Error fetchComments', err));