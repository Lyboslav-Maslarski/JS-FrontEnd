window.addEventListener('load', solution);

async function solution() {
    const url = 'http://localhost:3030/jsonstore/advanced/articles/list';
    const detailsURL = 'http://localhost:3030/jsonstore/advanced/articles/details/';
    const main = document.getElementById('main');

    let articles = await fetch(url, { method: 'GET' });
    articles = await articles.json();
    articles.forEach(a => {
        const accordion = document.createElement('div');
        accordion.classList.add('accordion');

        const head = document.createElement('div');
        head.classList.add('head');

        const span = document.createElement('span');
        span.textContent = a.title;

        const btn = document.createElement('button');
        btn.textContent = 'More';
        btn.classList.add('button');
        btn.id = a._id;
        btn.addEventListener('click', showHideMoreInfo);

        head.append(span, btn);

        const extra = document.createElement('div');
        extra.classList.add('extra');

        const p = document.createElement('p');

        fetch(detailsURL + a._id, { method: 'GET' })
            .then(res => res.json())
            .then(c => p.textContent = c.content);

        extra.appendChild(p);

        accordion.append(head, extra);

        main.appendChild(accordion);
    });

    async function showHideMoreInfo(event) {
        let btn = event.target;
        let accordion = btn.parentElement.parentElement;
        let extra = accordion.querySelector('.extra');

        if (btn.textContent === 'More') {
            extra.style.display = 'block';
            btn.textContent = 'Less';
        } else {
            extra.style.display = 'none';
            btn.textContent = 'More';
        }
    }
}