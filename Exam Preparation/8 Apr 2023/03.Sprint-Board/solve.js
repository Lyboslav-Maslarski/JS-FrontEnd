const API_URL = 'http://localhost:3030/jsonstore/tasks/';
let tasks;

const selectors = {
    loadBoardBtn: document.getElementById('load-board-btn'),
    createTaskBtn: document.getElementById('create-task-btn'),
    title: document.getElementById('title'),
    description: document.getElementById('description'),
}

const lists = {
    'ToDo': document.querySelectorAll('ul')[0],
    'In Progress': document.querySelectorAll('ul')[1],
    'Code Review': document.querySelectorAll('ul')[2],
    'Done': document.querySelectorAll('ul')[3],
}

const btnTextContent = {
    'ToDo': 'Move to In Progress',
    'In Progress': 'Move to Code Review',
    'Code Review': 'Move to Done',
    'Done': 'Close',
}

const nextStatusMap = {
    'ToDo': 'In Progress',
    'In Progress': 'Code Review',
    'Code Review': 'Done',
    'Done': 'Close',
}

function attachEvents() {
    selectors.loadBoardBtn.addEventListener('click', loadBoard);
    selectors.createTaskBtn.addEventListener('click', createTask);
}

async function loadBoard() {
    tasks = {};
    const board = await (await fetch(API_URL, { method: 'GET' })).json();

    Object.values(lists).forEach(list => list.innerHTML = '');

    Object.values(board).forEach(task => {
        tasks[task._id] = task;

        let list = lists[task.status];

        const li = document.createElement('li');
        li.classList.add('task');

        const h3 = document.createElement('h3');
        h3.textContent = task.title;
        li.appendChild(h3);

        const p = document.createElement('p');
        p.textContent = task.description;
        li.appendChild(p);

        const btn = document.createElement('button');
        btn.textContent = btnTextContent[task.status];
        btn.setAttribute('id', task._id);
        btn.addEventListener('click', moveTask);
        li.appendChild(btn);

        list.appendChild(li);
    });
}

async function createTask() {
    let newTask = {
        title: selectors.title.value,
        description: selectors.description.value,
        status: 'ToDo'
    };
    await fetch(API_URL, { method: 'POST', body: JSON.stringify(newTask) });

    loadBoard();
    selectors.title.value = '';
    selectors.description.value = '';
}

async function moveTask(e) {
    let id = e.currentTarget.getAttribute('id');
    let task = tasks[id];
    let method = 'PATCH';
    let body = JSON.stringify({
        ...task,
        status: nextStatusMap[task.status]
    });

    if (task.status === 'Done') {
        method = 'DELETE';
        body = undefined;
    }

    await fetch(API_URL + id, {
        method,
        body
    });

    loadBoard();
}

attachEvents();