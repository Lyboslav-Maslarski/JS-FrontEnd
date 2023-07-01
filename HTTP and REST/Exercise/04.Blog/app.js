function attachEvents() {
    const postsURL = 'http://localhost:3030/jsonstore/blog/posts';
    const commentsURL = 'http://localhost:3030/jsonstore/blog/comments';
    const btnLoadPosts = document.getElementById('btnLoadPosts');
    const posts = document.getElementById('posts');
    const title = document.getElementById('post-title');
    const body = document.getElementById('post-body');
    const btnViewPost = document.getElementById('btnViewPost');
    const comments = document.getElementById('post-comments');
    let allPosts;

    btnLoadPosts.addEventListener('click', loadPosts);
    btnViewPost.addEventListener('click', loadComments);

    async function loadPosts() {
        allPosts = await fetch(postsURL, { method: 'GET' });
        allPosts = await allPosts.json();
        for (const key in allPosts) {
            let option = document.createElement('option');
            option.value = key;
            option.textContent = allPosts[key].title;
            posts.appendChild(option);
        }
    }

    async function loadComments() {
        let currentPostId = posts.value;
        body.textContent = allPosts[currentPostId].body;
        title.textContent = allPosts[currentPostId].title;

        let allComments = await fetch(commentsURL, { method: 'GET' });
        allComments = await allComments.json();

        comments.innerHTML = '';
        Object.entries(allComments).forEach(([key, { id, postId, text }]) => {
            if (currentPostId === postId) {
                let li = document.createElement('li');
                li.id = id;
                li.textContent = text;
                comments.appendChild(li);
            }
        });
    }
}

attachEvents();