window.addEventListener("load", solve);

function solve() {
    const inputs = {
        title: document.getElementById('task-title'),
        category: document.getElementById('task-category'),
        content: document.getElementById('task-content'),
    };

    const selectors = {
        publishBtn: document.getElementById('publish-btn'),
        reviewList: document.getElementById('review-list'),
        publishedList: document.getElementById('published-list'),
    }

    selectors.publishBtn.addEventListener('click', publishTask);

    const task = {
        title: '',
        category: '',
        content: '',
    };

    function publishTask(e) {
        if (Object.values(inputs).some(i => i.value === '')) {
            return;
        }

        task.title = inputs.title.value;
        task.category = inputs.category.value;
        task.content = inputs.content.value;

        const li = document.createElement('li');
        li.classList.add('rpost');

        const article = document.createElement('article');

        const h4 = document.createElement('h4');
        h4.textContent = task.title;
        article.appendChild(h4);

        const category = document.createElement('p');
        category.textContent = `Category: ${task.category}`;
        article.appendChild(category);

        const content = document.createElement('p');
        content.textContent = `Content: ${task.content}`;
        article.appendChild(content);

        li.appendChild(article);

        const editBtn = document.createElement('button');
        editBtn.classList.add('action-btn', 'edit');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', editTask);
        li.appendChild(editBtn);

        const postBtn = document.createElement('button');
        postBtn.classList.add('action-btn', 'post');
        postBtn.textContent = 'Post';
        postBtn.addEventListener('click', postTask);
        li.appendChild(postBtn);

        selectors.reviewList.appendChild(li);

        Object.values(inputs).forEach(i => i.value = '')
    }

    function editTask(e) {
        e.currentTarget.parentElement.remove();

        inputs.title.value = task.title;
        inputs.category.value = task.category;
        inputs.content.value = task.content;
    }

    function postTask(e) {
        const node = e.currentTarget.parentElement.cloneNode(true);
        e.currentTarget.parentElement.remove();

        Array.from(node.querySelectorAll('button')).forEach(b => b.remove());

        selectors.publishedList.appendChild(node);
    }
}