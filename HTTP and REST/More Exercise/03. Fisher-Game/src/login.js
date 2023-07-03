document.getElementById('home').classList.remove('active');
document.getElementById('guest').children[0].classList.add('active');

const btn = document.querySelector('button');
btn.addEventListener('click', loginUser);

let userData = JSON.parse(sessionStorage.getItem('userData'));

if (userData !== null && userData.accessToken) {
    document.getElementById('guest').style.display = 'none';
    document.getElementById('user').style.display = 'inline-block';
} else {
    document.getElementById('guest').style.display = 'inline-block';
    document.getElementById('user').style.display = 'none';
}

async function loginUser(e) {
    e.preventDefault();
    let [email, password] = Array.from(document.querySelectorAll('input'))
        .map(i => i.value)
        .map(v => v.trim());
    const notification = document.querySelector('.notification');

    try {
        if (email === '' || password === '') {
            throw new Error('All fields are required!');
        }

        let res = await fetch('http://localhost:3030/users/login', {
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