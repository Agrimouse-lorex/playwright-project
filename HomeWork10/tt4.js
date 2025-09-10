// Завдання D — перший успішний результат

// Зроби функцію getFirstSuccessful(), яка запускає одночасно fetchPost() і fetchComments()
//  та повертає перший успішний результат. Використай Promise.any. Додай мітку джерела:

// { source: 'post' | 'comments', data: ... }

function fetchPost() {
    return fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then((response) => {
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            return response.json();
        })
        .then((post) => post);
}

function fetchComments() {
    return fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
        .then((response) => {
            if(!response.ok) throw new Error(`HTTP ${response.status}`);
            return response.json();
        })
        .then((comments) => comments);
}

async function getFirstSuccessful() {
    return Promise.any([
        fetchPost().then(data => ({source: 'post', data})),
        fetchComments().then(data => ({source: 'comments', data})),
    ]);
}

getFirstSuccessful().then(res => console.log(res)).catch(err => console.error(err));

