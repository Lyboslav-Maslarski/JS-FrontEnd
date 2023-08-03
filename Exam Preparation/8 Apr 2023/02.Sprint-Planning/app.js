window.addEventListener('load', solve);

function solve() {
    const tasks = {};

    const fields = {
        title: document.getElementById('title'),
        description: document.getElementById('description'),
        label: document.getElementById('label'),
        points: document.getElementById('points'),
        assignee: document.getElementById('assignee')
    };

    const selectors = {
        taskId: document.getElementById('task-id'),
        createTaskBtn: document.getElementById('create-task-btn'),
        deleteTaskBtn: document.getElementById('delete-task-btn'),
        tasksSection: document.getElementById('tasks-section'),
        createTaskForm: document.getElementById('create-task-form'),
        totalSprintPoints: document.getElementById('total-sprint-points'),
    };

    const taskCardLabelContent = {
        Feature: 'Feature &#8865',
        'Low Priority Bug': 'Low Priority Bug &#9737',
        'High Priority Bug': 'High Priority Bug &#9888',
    };

    const taskCardLabelClasses = {
        Feature: 'feature',
        'Low Priority Bug': 'low-priority',
        'High Priority Bug': 'high-priority',
    };

    let currentPoints = 0;
    let tasksIdCounter = 1;
    selectors.createTaskBtn.addEventListener('click', createTask);
    selectors.deleteTaskBtn.addEventListener('click', deleteTask);
    
    function createTask(e) {
        if (Object.values(fields).some(f => f.value === '')) {
            return;
        }
    
        const task = {
            id: `task-${tasksIdCounter++}`,
            title: document.getElementById('title').value,
            description: document.getElementById('description').value,
            label: document.getElementById('label').value,
            points: Number(document.getElementById('points').value),
            assignee: document.getElementById('assignee').value
        };
        tasks[task.id] = task;
    
        const article = document.createElement('article');
        article.setAttribute('id', task.id);
        article.classList.add('task-card');
    
        const label = document.createElement('div');
        label.classList.add('task-card-label');
        label.classList.add(taskCardLabelClasses[task.label]);
        label.innerHTML = taskCardLabelContent[task.label];
        article.appendChild(label);
    
        const h3 = document.createElement('h3');
        h3.classList.add('task-card-title');
        h3.textContent = task.title;
        article.appendChild(h3);
    
        const p = document.createElement('p');
        p.classList.add('task-card-description');
        p.textContent = task.description;
        article.appendChild(p);
    
        const points = document.createElement('div');
        points.classList.add('task-card-points');
        points.textContent = `Estimated at ${task.points} pts`;
        article.appendChild(points);
        currentPoints += task.points;
        selectors.totalSprintPoints.textContent = `Total Points ${currentPoints}pts`;
    
        const assignee = document.createElement('div');
        assignee.classList.add('task-card-assignee');
        assignee.textContent = `Assigned to: ${task.assignee}`;
        article.appendChild(assignee);
    
        const actions = document.createElement('div');
        actions.classList.add('task-card-actions');
        const button = document.createElement('button');
        button.textContent = 'Delete';
        button.addEventListener('click', loadTaskInfo);
        actions.appendChild(button);
        article.appendChild(actions);
    
        selectors.tasksSection.appendChild(article);
    
        selectors.createTaskForm.reset();
    }
    
    function loadTaskInfo(e) {
        const currentTask = tasks[e.currentTarget.parentElement.parentElement.id];
    
        selectors.taskId.value = currentTask.id;
        fields.title.value = currentTask.title;
        fields.description.value = currentTask.description;
        fields.label.value = currentTask.label;
        fields.points.value = currentTask.points;
        fields.assignee.value = currentTask.assignee;
    
        selectors.createTaskBtn.disabled = true;
        selectors.deleteTaskBtn.disabled = false;
        Object.values(fields).forEach(f => f.disabled = true);
    }
    
    function deleteTask(e) {
        const currentId = selectors.taskId.value;
        document.getElementById(currentId).remove();
        currentPoints -= tasks[currentId].points;
        selectors.totalSprintPoints.textContent = `Total Points ${currentPoints}pts`;
        delete tasks[currentId];
    
        selectors.createTaskBtn.disabled = false;
        selectors.deleteTaskBtn.disabled = true;
        Object.values(fields).forEach(f => f.disabled = false);
        selectors.createTaskForm.reset();
    }
}