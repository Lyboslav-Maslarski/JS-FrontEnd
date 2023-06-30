function attachEvents() {
    const list = document.getElementById('phonebook');
    const [loadBtn, createBtn] = document.querySelectorAll('button');
    const [personInfo, phoneInfo] = document.querySelectorAll('input');
    const url = 'http://localhost:3030/jsonstore/phonebook/';

    loadBtn.addEventListener('click', loadPhonebook);
    createBtn.addEventListener('click', createContact);

    async function loadPhonebook() {
        list.replaceChildren();
        try {
            let phonebook = await fetch(url, { method: 'GET' });
            phonebook = await phonebook.json();

            Object.values(phonebook).forEach(e => {
                let li = document.createElement('li');
                li.textContent = `${e.person}: ${e.phone}`;

                let btn = document.createElement('button');
                btn.addEventListener('click', () => deleteContact(e._id));
                btn.textContent = 'Delete'
                li.appendChild(btn);

                list.appendChild(li);
            });
        } catch (error) {
            console.error(error);
        }
    }

    function createContact() {
        let person = personInfo.value.trim();
        let phone = phoneInfo.value.trim();
        let contact = { person, phone };

        fetch(url, { method: 'POST', body: JSON.stringify(contact) })
            .then(res => res.json())
            .then(() => {
                personInfo.value = '';
                phoneInfo.value = '';
                loadPhonebook();
            });
    }

    function deleteContact(id) {
        fetch(url + id, { method: 'DELETE' })
            .then(res => res.json())
            .then(loadPhonebook)
    }
}

attachEvents();