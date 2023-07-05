function attachEvents() {
    const url = 'http://localhost:3030/jsonstore/tasks/';
    const title = document.getElementById('title');
    const addBtn = document.getElementById('add-button');
    const loadBtn = document.getElementById('load-button');
    const list = document.getElementById('todo-list');

    loadBtn.addEventListener('click', loadAllTasks);
    addBtn.addEventListener('click', addNewTask);

    async function loadAllTasks(e) {
        e.preventDefault();
        list.innerHTML = '';

        let allTasks = await fetch(url, { method: 'GET' });
        allTasks = await allTasks.json();

        Object.values(allTasks).forEach(t => {
            const li = document.createElement('li');

            const span = document.createElement('span');
            span.textContent = t.name;

            const removeBtn = document.createElement('button');
            removeBtn.addEventListener('click', removeTask);
            removeBtn.setAttribute('id', t._id);
            removeBtn.textContent = 'Remove';

            const editBtn = document.createElement('button');
            editBtn.addEventListener('click', editTask);
            editBtn.setAttribute('id', t._id);
            editBtn.textContent = 'Edit';

            li.appendChild(span);
            li.appendChild(removeBtn);
            li.appendChild(editBtn);

            list.appendChild(li);
        });
    }

    async function addNewTask(e) {
        e.preventDefault();
        let newTask = { name: title.value };
        fetch(url, { method: 'POST', body: JSON.stringify(newTask) });
        loadAllTasks(e);
    }

    async function removeTask(e) {
        let id = this.id;
        fetch(url + id, { method: 'DELETE', });
        loadAllTasks(e);
    }

    function editTask(e) {
        e.preventDefault();
        let editBtn = e.target;
        let listItem = editBtn.parentElement;
        let span = listItem.firstChild;

        listItem.innerHTML = '';
        const input = document.createElement('input');
        input.type = 'text';
        input.value = span.textContent;

        const removeBtn = document.createElement('button');
        removeBtn.addEventListener('click', removeTask);
        removeBtn.setAttribute('id', editBtn.id);
        removeBtn.textContent = 'Remove';

        const submitBtn = document.createElement('button');
        submitBtn.addEventListener('click', submitEditedTask);
        submitBtn.setAttribute('id', editBtn.id);
        submitBtn.textContent = 'Submit';

        listItem.appendChild(input);
        listItem.appendChild(removeBtn);
        listItem.appendChild(submitBtn);

        async function submitEditedTask(e) {
            e.preventDefault();
            let id = this.id;
            fetch(url + id, { method: 'PATCH', body: JSON.stringify({ name: input.value }) });
            loadAllTasks(e);
        }
    }
}

attachEvents();