const API_URL = 'http://localhost:3030/jsonstore/tasks/';
let courses;
let id;

const selectors = {
    loadCoursesBtn: document.getElementById('load-course'),
    addCourseBtn: document.getElementById('add-course'),
    editCourseBtn: document.getElementById('edit-course'),
    list: document.getElementById('list'),
    courseName: document.getElementById('course-name'),
    courseType: document.getElementById('course-type'),
    description: document.getElementById('description'),
    teacherName: document.getElementById('teacher-name'),
};

selectors.loadCoursesBtn.addEventListener('click', loadCourses);
selectors.loadCoursesBtn.addEventListener('click', addCourse);
selectors.loadCoursesBtn.addEventListener('click', editCourse);

async function loadCourses() {
    const coursesList = await (await fetch(API_URL, { method: 'GET' })).json();

    selectors.list.innerHTML = '';
    courses = {};

    Object.values(coursesList).forEach(c => {
        courses[c._id] = c;
        const container = document.createElement('div');
        container.classList.add('container');

        const title = document.createElement('h2');
        title.textContent = c.title;
        container.appendChild(title);

        const teacher = document.createElement('h3');
        teacher.textContent = c.teacher;
        container.appendChild(teacher);

        const type = document.createElement('h3');
        type.textContent = c.type;
        container.appendChild(type);

        const description = document.createElement('h4');
        description.textContent = c.description;
        container.appendChild(description);

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit Course';
        editBtn.classList.add('edit-btn');
        editBtn.setAttribute('id', c._id);
        finishBtn.addEventListener('click', fillForm);
        container.appendChild(editBtn);

        const finishBtn = document.createElement('button');
        finishBtn.textContent = 'Finish Course';
        finishBtn.classList.add('finish-btn');
        finishBtn.setAttribute('id', c._id);
        finishBtn.addEventListener('click', removeCourse);
        container.appendChild(finishBtn);

        selectors.list.appendChild(container);
    });
}

async function addCourse() {

}

async function editCourse(e) {
    let course = courses[id];
    await fetch(API_URL+id)
    selectors.addCourseBtn.disabled = false;
    selectors.editCourseBtn.disabled = true;
}

async function fillForm(e) {
    let btn = e.currentTarget;
    id = btn.id;
    let course = courses[id];

    btn.parentElement.remove();
    selectors.courseName.value = course.title;
    selectors.courseType.value = course.type;
    selectors.description.value = course.description;
    selectors.teacherName.value = course.teacher;

    selectors.addCourseBtn.disabled = true;
    selectors.editCourseBtn.disabled = false;
}
async function removeCourse(e) {
    await fetch(API_URL + e.currentTarget.id, { method: 'DELETE' });

    loadCourses();
}