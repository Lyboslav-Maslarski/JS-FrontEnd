let userData = JSON.parse(sessionStorage.getItem('userData'));

if (userData !== null && userData.accessToken) {
    document.getElementById('guest').style.display = 'none';
    document.querySelector('.email > span').textContent = userData.email;
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