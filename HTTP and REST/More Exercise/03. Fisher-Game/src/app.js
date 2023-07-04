const url = 'http://localhost:3030/data/catches/';

let userData = JSON.parse(sessionStorage.getItem('userData'));

const catches = document.getElementById('catches');

if (userData !== null && userData.accessToken) {
    document.getElementById('guest').style.display = 'none';
    document.querySelector('.email > span').textContent = userData.email;
    document.querySelector('button.add').disabled = false;
} else {
    document.getElementById('user').style.display = 'none';
    catches.innerHTML = '';
}

document.getElementById('logout').addEventListener('click', logoutUser);
document.querySelector('button.load').addEventListener('click', loadData);
document.querySelector('button.add').addEventListener('click', addCatch);

async function logoutUser() {
    await fetch('http://localhost:3030/users/logout', {
        method: 'GET',
        headers: { 'X-Authorization': userData.accessToken }
    });
    sessionStorage.clear();
    window.location = 'index.html';
}

async function loadData() {
    const res = await fetch(url);
    const data = await res.json();
    catches.replaceChildren(...data.map(createCatch));
}

function createCatch(item) {
    const isOwner = (userData && item._ownerId == userData.id)

    const element = document.createElement('div');
    element.className = 'catch';
    element.innerHTML = `
    <label>Angler</label>
    <input type="text" class="angler" value="${item.angler}" ${isOwner ? '' : 'disabled'}>
    <label>Weight</label>
    <input type="text" class="weight" value="${item.weight}" ${isOwner ? '' : 'disabled'}>
    <label>Species</label>
    <input type="text" class="species" value="${item.species}" ${isOwner ? '' : 'disabled'}>
    <label>Location</label>
    <input type="text" class="location" value="${item.location}" ${isOwner ? '' : 'disabled'}>
    <label>Bait</label>
    <input type="text" class="bait" value="${item.bait}" ${isOwner ? '' : 'disabled'}>
    <label>Capture Time</label>
    <input type="number" class="captureTime" value="${item.captureTime}" ${isOwner ? '' : 'disabled'}>
    <button class="update" data-id="${item._id}" ${isOwner ? '' : 'disabled'}>Update</button>
    <button class="delete" data-id="${item._id}" ${isOwner ? '' : 'disabled'}>Delete</button>`;

    element.querySelector('button.update').addEventListener('click', updateCatch);
    element.querySelector('button.delete').addEventListener('click', deleteCatch);

    return element;
}

async function updateCatch(e) {
    let currentCatch = e.target.parentElement;
    let id = e.target.getAttribute('data-id');

    let [angler, weight, species, location, bait, captureTime] = currentCatch.querySelectorAll('input');

    let updatedCatch = {
        angler: angler.value,
        weight: weight.value,
        species: species.value,
        location: location.value,
        bait: bait.value,
        captureTime: captureTime.value
    }

    await fetch(url + id, {
        method: 'PUT',
        headers: {
            'X-Authorization': userData.accessToken,
        },
        body: JSON.stringify(updatedCatch)
    });
}

async function deleteCatch(e) {
    let id = e.target.getAttribute('data-id');
    await fetch(url + id, {
        method: 'DELETE',
        headers: {
            'X-Authorization': userData.accessToken,
        }
    });
}

async function addCatch(e) {
    e.preventDefault();
    let inputForm = e.target.parentElement;

    let [angler, weight, species, location, bait, captureTime] = inputForm.querySelectorAll('input');

    let newCatch = {
        angler: angler.value,
        weight: weight.value,
        species: species.value,
        location: location.value,
        bait: bait.value,
        captureTime: captureTime.value
    }

    await fetch(url, {
        method: 'POST',
        headers: {
            'X-Authorization': userData.accessToken,
        },
        body: JSON.stringify(newCatch)
    });
}