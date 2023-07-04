const url = 'http://localhost:3030/data/catches/';
let userData = JSON.parse(sessionStorage.getItem('userData'));

if (userData !== null && userData.accessToken) {
    document.getElementById('guest').style.display = 'none';
    document.querySelector('.email > span').textContent = userData.email;
    loadCatches();
} else {
    document.getElementById('user').style.display = 'none';
}

const catches = document.getElementById('catches');
const addForm = document.getElementById('addForm');
catches.innerHTML = '';

const logoutBtn = document.getElementById('logout');
logoutBtn.addEventListener('click', logoutUser);

async function logoutUser() {
    await fetch('http://localhost:3030/users/logout', {
        method: 'GET',
        headers: { 'X-Authorization': userData.accessToken }
    });
    sessionStorage.clear();
    window.location = 'index.html';
}

async function loadCatches() {
    let allCatches = await fetch(url, { method: 'GET' });
    allCatches = await allCatches.json();

    allCatches.forEach(c => {
        let hasPermission = userData && userData.id === c._ownerId;
        const div = document.createElement('div');
        div.classList.add('catch');
        div.setAttribute('owner', c._ownerId);

        div.innerHTML = `
        <label>Angler</label>
        <input type="text" class="angler" value="${c.angler}" disabled>
        <label>Weight</label>
        <input type="text" class="weight" value="${c.weight}" disabled>
        <label>Species</label>
        <input type="text" class="species" value="${c.species}" disabled>
        <label>Location</label>
        <input type="text" class="location" value="${c.location}" disabled>
        <label>Bait</label>
        <input type="text" class="bait" value="${c.bait}" disabled>
        <label>Capture Time</label>
        <input type="number" class="captureTime" value="${c.captureTime}" disabled>
        `;

        let updateBtn = document.createElement('button');
        updateBtn.addEventListener('click', updateCatch);
        updateBtn.setAttribute('data-id', c._id);
        updateBtn.classList.add('update');
        updateBtn.textContent = 'Update';

        let deleteBtn = document.createElement('button');
        deleteBtn.addEventListener('click', deleteCatch);
        deleteBtn.setAttribute('data-id', c._id);
        deleteBtn.classList.add('delete');
        deleteBtn.textContent = 'Delete';

        if (!hasPermission) {
            updateBtn.disabled = true;
            deleteBtn.disabled = true;
        }

        div.append(updateBtn, deleteBtn);

        catches.appendChild(div);
    });

}

async function updateCatch(e) {
    let currentCatch = e.target.parentElement;

    let [angler, weight, species, location, bait, captureTime] = currentCatch.querySelectorAll('input');

    let updatedCatch = {
        angler: angler.value,
        weight: weight.value,
        species: species.value,
        location: location.value,
        bait: bait.value,
        captureTime: captureTime.value
    }

    await fetch(url + currentCatch.owner, {
        method: 'PUT',
        headers: {
            'X-Authorization': userData.accessToken,
        },
        body: JSON.stringify(updatedCatch)
    });
    loadCatches();
}

async function deleteCatch(e) {
    let currentCatch = e.target.parentElement;
    await fetch(url + currentCatch.owner, {
        method: 'DELETE',
        headers: {
            'X-Authorization': userData.accessToken,
        }
    });
    loadCatches();
}