document.getElementById('home').classList.remove('active');
document.getElementById('guest').children[1].classList.add('active');

let userData = JSON.parse(sessionStorage.getItem('userData'));

const btn = document.querySelector('button');
btn.addEventListener('click', registerUser);

if (userData !== null && userData.accessToken) {
    document.getElementById('guest').style.display = 'none';
} else {
    document.getElementById('user').style.display = 'none';
}

async function registerUser(e) {
    e.preventDefault();
    let [email, password, repeat] = Array.from(document.querySelectorAll('input'))
        .map(i => i.value)
        .map(v => v.trim());
    const notification = document.querySelector('.notification');

    try {
        if (email === '' || password === '' || repeat === '') {
            throw new Error('All fields are required!');
        } else if (password !== repeat) {
            throw new Error('Passwords don\'t match!');
        }

        let res = await fetch('http://localhost:3030/users/register', {
            method: 'POST',
            body: JSON.stringify({ email, password })
        });

        if (res.status !== 200) {
            let error = await res.json();
            throw new Error(error.message);
        }

        res = await res.json();

        userData = { email, password, accessToken: res.accessToken, id: res._id };

        sessionStorage.setItem('userData', JSON.stringify(userData));

        window.location = 'index.html';
    } catch (err) {
        notification.textContent = err.message;
    }
}