window.addEventListener('load', solve);

let currentPoints = 0;
const taskId = document.getElementById('task-id');
const title = document.getElementById('title');
const description = document.getElementById('description');
const label = document.getElementById('label');
const points = document.getElementById('points');
const assignee = document.getElementById('assignee');
const createTaskBtn = document.getElementById('create-task-btn');
const deleteTaskBtn = document.getElementById('delete-task-btn');
const tasksSection = document.getElementById('tasks-section');
const totalSprintPoints = document.getElementById('total-sprint-points');
const totalSpringPointsText = `Total Points ${currentPoints}pts`;

function solve() {
    createTaskBtn.addEventListener('click', createTask);
    deleteTaskBtn.addEventListener('click', loadTaskInfo)
}

function createTask(e) {

}

function loadTaskInfo(e) {

}