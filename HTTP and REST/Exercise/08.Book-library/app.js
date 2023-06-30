function attachEvents() {
  const url = 'http://localhost:3030/jsonstore/collections/books/';
  const loadBooksBtn = document.getElementById('loadBooks');
  const addBookForm = document.getElementById('form');
  let [h, _label1, inputTitle, _label2, inputAuthor, submitBtn] = addBookForm.children;
  const tbody = document.querySelector('tbody');

  loadBooksBtn.addEventListener('click', loadBooks);
  submitBtn.addEventListener('click', addOrUpdateBook);

  async function loadBooks() {
    tbody.innerHTML = '';
    try {
      let books = await fetch(url, { method: 'GET' });
      books = await books.json();
      Object.entries(books).forEach(([key, { title, author }]) => {
        let tr = document.createElement('tr');

        let tdTitle = document.createElement('td');
        tdTitle.textContent = title;
        tr.appendChild(tdTitle);

        let tdAuthor = document.createElement('td');
        tdAuthor.textContent = author;
        tr.appendChild(tdAuthor);

        tdBtns = document.createElement('td');
        let editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', () => editForm(key, title, author));
        tdBtns.appendChild(editBtn);

        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => deleteBook(key));
        tdBtns.appendChild(deleteBtn);

        tr.appendChild(tdBtns);

        tbody.appendChild(tr);
      });
    }
    catch (err) { console.error(err); }
  }

  function editForm(key, title, author) {
    h.textContent = 'Edit FORM';
    inputTitle.value = title;
    inputAuthor.value = author;
    submitBtn.textContent = 'Save';
    submitBtn.id = key;
  }

  function addOrUpdateBook() {
    let title = inputTitle.value;
    let author = inputAuthor.value;

    let book = { author, title };

    if (submitBtn.textContent === 'Submit') {
      fetch(url, { method: 'POST', body: JSON.stringify(book) })
        .then(res => res.json())
        .then(loadBooks);
    } else {
      fetch(url + this.id, { method: 'PUT', body: JSON.stringify(book) })
        .then(res => res.json())
        .then(loadBooks);
      h.textContent = 'FORM';
      submitBtn.textContent = 'Submit';
    }
    inputTitle.value = '';
    inputAuthor.value = '';
  }

  function deleteBook(id) {
    fetch(url + id, { method: 'DELETE' })
      .then(res => res.json())
      .then(loadBooks);
  }
}

attachEvents();