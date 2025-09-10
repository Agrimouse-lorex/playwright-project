// Завдання C — з’єднати пост і коментарі

// Отримай пост posts/1 та його коментарі comments?postId=1, а потім поверни об’єкт виду:

// { post, comments, commentsCount: comments.length }


// Зроби версію на .then() і на async/await (окремі функції).

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

function fetchPostAndComments() {
    return Promise.all([fetchPost(), fetchComments()])
    .then(([post, comments]) => ({
        post,
        comments,
        commentsCount: comments.length,
    }));
}


async function fetchPostAndCommentsAsync() {
    const [post, comments] = await Promise.all([fetchPost(), fetchComments()]);
    return { post, comments, commentsCount: comments.length }
}


// fetchPostAndComments()
//   .then(data => console.log('Results are: ', data))
//   .catch(err => console.error(err));

  fetchPostAndCommentsAsync()
  .then(data => console.log('Results are: ', data))
  .catch(err => console.error(err));