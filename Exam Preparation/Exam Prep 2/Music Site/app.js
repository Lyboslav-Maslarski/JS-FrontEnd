window.addEventListener('load', solve);

function solve() {
    const [genre, name, author, date] = Array.from(document.querySelectorAll('input'));
    const addBtn = document.getElementById('add-btn');
    addBtn.addEventListener('click', addSong);

    function addSong(e) {
        e.preventDefault();
        if (genre.value === '' || name.value === '' ||
            author.value === '' || date.value === '') {
            return;
        }
        const container = document.getElementsByClassName('all-hits-container')[0];
        const div = document.createElement('div');
        div.classList.add('hits-info');

        const img = document.createElement('img');
        img.src = './static/img/img.png';
        div.appendChild(img);

        const genreH2 = document.createElement('h2');
        genreH2.textContent = `Genre: ${genre.value}`;
        div.appendChild(genreH2);

        const nameH2 = document.createElement('h2');
        nameH2.textContent = `Name: ${name.value}`;
        div.appendChild(nameH2);

        const authorH2 = document.createElement('h2');
        authorH2.textContent = `Author: ${author.value}`;
        div.appendChild(authorH2);

        const dateH3 = document.createElement('h3');
        dateH3.textContent = `Date: ${date.value}`;
        div.appendChild(dateH3);

        const saveBtn = document.createElement('button');
        saveBtn.addEventListener('click', saveSong);
        saveBtn.classList.add('save-btn');
        saveBtn.textContent = 'Save song';
        div.appendChild(saveBtn);

        const likeBtn = document.createElement('button');
        likeBtn.addEventListener('click', likeSong);
        likeBtn.classList.add('like-btn');
        likeBtn.textContent = 'Like song';
        div.appendChild(likeBtn);

        const deleteBtn = document.createElement('button');
        deleteBtn.addEventListener('click', deleteSong);
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = 'Delete';
        div.appendChild(deleteBtn);

        container.appendChild(div);
        genre.value = '';
        name.value = '';
        author.value = '';
        date.value = '';
    }

    function saveSong(e) {
        let parent = e.target.parentElement;
        let newDiv = parent.cloneNode(true);
        parent.remove();
        newDiv.children[5].remove();
        newDiv.children[5].remove();
        let saveContainer = document.getElementsByClassName('saved-container')[0];
        newDiv.getElementsByClassName('delete-btn')[0].addEventListener('click', deleteSong);
        saveContainer.appendChild(newDiv);
    }

    function likeSong(e) {
        const likesContainer = document.getElementsByClassName('likes')[0].children[0];
        let likes = Number(likesContainer.textContent.split(': ')[1]);
        likes++;
        likesContainer.textContent = 'Total Likes: ' + likes;
        e.target.disabled = true;
    }

    function deleteSong(e) {
        e.target.parentElement.remove();
    }
}