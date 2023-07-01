function attachEvents() {
  const tbody = document.querySelector('tbody');
  const inputs = document.querySelectorAll('input');
  const submitBtn = document.getElementById('submit');
  const url = 'http://localhost:3030/jsonstore/collections/students';

  loadStudents();
  
  submitBtn.addEventListener('click', addNewStudent);

  function loadStudents() {
    tbody.innerHTML = '';

    fetch(url, { method: 'GET' })
      .then(res => res.json())
      .then(studentInfo => {
        for (const key in studentInfo) {
          let tr = document.createElement('tr');

          let firstNameTd = document.createElement('td');
          firstNameTd.textContent = studentInfo[key].firstName;
          tr.appendChild(firstNameTd);
          let lastNameTd = document.createElement('td');
          lastNameTd.textContent = studentInfo[key].lastName;
          tr.appendChild(lastNameTd);
          let facultyNumberTd = document.createElement('td');
          facultyNumberTd.textContent = studentInfo[key].facultyNumber;
          tr.appendChild(facultyNumberTd);
          let gradeTd = document.createElement('td');
          gradeTd.textContent = studentInfo[key].grade;
          tr.appendChild(gradeTd);

          tbody.appendChild(tr);
        }
      });
  }

  async function addNewStudent() {
    let student = {
      firstName: inputs[0].value,
      lastName: inputs[1].value,
      facultyNumber: inputs[2].value,
      grade: inputs[3].value
    }

    try {
      await fetch(url, { method: 'POST', body: JSON.stringify(student) });
      loadStudents();
      inputs.forEach(i => i.value = '');
    } catch (err) {
      console.error(err);
    }
  }
}

attachEvents();