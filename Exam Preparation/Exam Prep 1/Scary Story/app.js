window.addEventListener("load", solve);

function solve() {
  let firstName = document.getElementById('first-name');
  let lastName = document.getElementById('last-name');
  let age = document.getElementById('age');
  let title = document.getElementById('story-title');
  let story = document.getElementById('story');
  let genre = document.getElementById('genre');

  let publishBtn = document.getElementById('form-btn');

  let list = document.getElementById('preview-list');
  let main = document.getElementById('main');

  publishBtn.addEventListener('click', createPreview);

  function createPreview() {
    if (firstName.value == ''
      || lastName.value == ''
      || age.value == ''
      || title.value == ''
      || story.value == '') {
      return;
    }

    let firstNameEdit = firstName.value;
    let lastNameEdit = lastName.value;
    let ageEdit = age.value;
    let titleEdit = title.value;
    let genreEdit = genre.value;
    let storyEdit = story.value

    let li = document.createElement('li');
    li.classList.add('story-info');

    let article = document.createElement('article');

    let h4 = document.createElement('h4');
    h4.textContent = `Name: ${firstName.value} ${lastName.value}`;

    let ageP = document.createElement('p');
    ageP.textContent = `Age: ${age.value}`;

    let titleP = document.createElement('p');
    titleP.textContent = `Title: ${title.value}`;

    let genreP = document.createElement('p');
    genreP.textContent = `Genre: ${genre.value}`;

    let storyP = document.createElement('p');
    storyP.textContent = `${story.value}`;

    article.appendChild(h4);
    article.appendChild(ageP);
    article.appendChild(titleP);
    article.appendChild(genreP);
    article.appendChild(storyP);

    let saveBtn = document.createElement('button');
    saveBtn.textContent = 'Save Story';
    saveBtn.classList.add('save-btn');
    saveBtn.addEventListener('click', saveStory);

    let editBtn = document.createElement('button');
    editBtn.textContent = 'Edit Story';
    editBtn.classList.add('edit-btn');
    editBtn.addEventListener('click', editStory)

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete Story';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', deleteStory);

    li.appendChild(article);
    li.appendChild(saveBtn);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    list.appendChild(li);

    firstName.value = '';
    lastName.value = '';
    age.value = '';
    title.value = '';
    story.value = '';
    publishBtn.disabled = true;

    function saveStory() {
      main.innerHTML = '';
      let h1 = document.createElement('h1');
      h1.textContent = 'Your scary story is saved!';
      main.appendChild(h1);
    }

    function editStory() {
      list.innerHTML = '<h3>Preview</h3>';
      firstName.value = firstNameEdit;
      lastName.value = lastNameEdit;
      age.value = ageEdit;
      title.value = titleEdit;
      genre.value = genreEdit;
      story.value = storyEdit;
      publishBtn.disabled = false;
    }

    function deleteStory() {
      list.innerHTML = '<h3>Preview</h3>';
      publishBtn.disabled = false;
    }
  }
}