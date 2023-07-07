const furnitureUrl = 'http://localhost:3030/data/furniture';
const loginUrl = 'http://localhost:3030/users/login';
const registerUrl = 'http://localhost:3030/users/register';
const buyFurnitureUrl = 'http://localhost:3030/data/orders';
const boughtFurnitureUrl = 'http://localhost:3030/data/orders?where=_ownerId%3D';

let userData = null;

function solve() {
    window.location = 'home.html';
}

if (window.location.pathname === '/home.html') {
}

if (window.location.pathname === '/login.html') {
    let [registerBtn, loginBtn] = document.querySelectorAll('button');

    registerBtn.addEventListener('click', registerUser);
    loginBtn.addEventListener('click', loginUser);


    async function registerUser(e) {
        e.preventDefault();

        let [emailReg, passReg, repassReg, emailLog, passLog] =
            Array.from(document.querySelectorAll('input'))
                .map(i => i.value)
                .map(v => v.trim());

        if (emailReg === '' || passReg === '' || repassReg === ''
            || passReg !== repassReg) {
            return;
        }

        let res = await fetch(registerUrl, { method: 'POST', body: JSON.stringify({ email: emailReg, password: passReg }) });
        console.log(res);
        res = await res.json();
        console.log(res);

        userData = { email: emailReg, password: passReg, accessToken: res.accessToken, id: res._id };
        console.log(userData);
        sessionStorage.setItem('userData', JSON.stringify(userData));

        window.location = 'homeLogged.html';
    }

    async function loginUser(e) {
        e.preventDefault();

        let [emailReg, passReg, repassReg, emailLog, passLog] =
            Array.from(document.querySelectorAll('input'))
                .map(i => i.value)
                .map(v => v.trim());

        if (emailLog === '' || passLog === '') {
            return;
        }

        try {
            let res = await fetch(loginUrl, { method: 'POST', body: JSON.stringify({ email: emailReg, password: passReg }) });
            if (!res.ok) {
                throw new Error();
            }
            res = await res.json();
            console.log(res);
            userData = { email: emailLog, password: passLog, accessToken: res.accessToken, id: res._id };
            console.log(userData);
            sessionStorage.setItem('userData', JSON.stringify(userData));

            window.location = 'homeLogged.html';
        } catch (err) {
            console.log(err);
        }
    }
}

if (window.location.pathname === '/homeLogged.html') {
    const logOutBtn = document.querySelector('#logoutBtn');
    logOutBtn.addEventListener('click', logoutUser);
    async function logoutUser() {
        await fetch('http://localhost:3030/users/logout', {
            method: 'GET',
            headers: { 'X-Authorization': userData.accessToken }
        });
        sessionStorage.clear();
        window.location = 'home.html';
    }
}