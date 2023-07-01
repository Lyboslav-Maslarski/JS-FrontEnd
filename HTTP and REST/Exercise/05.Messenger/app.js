function attachEvents() {
    const url = 'http://localhost:3030/jsonstore/messenger';
    const textarea = document.getElementById('messages');
    const authorInput = document.querySelector('input[name="author"]');
    const contentInput = document.querySelector('input[name="content"]');
    const submitBtn = document.getElementById('submit');
    const refreshBtn = document.getElementById('refresh');

    submitBtn.addEventListener('click', submitMessage);

    async function submitMessage() {
        let message = { author: authorInput.value, content: contentInput.value };
        await fetch(url, { method: 'POST', body: JSON.stringify(message) });
        authorInput.value = '';
        contentInput.value = '';
        loadAllMessages();
    }

    refreshBtn.addEventListener('click', loadAllMessages);

    async function loadAllMessages() {
        textarea.value = '';
        let allMessages = await fetch(url, { method: 'GET' });
        allMessages = await allMessages.json();
        for (const key in allMessages) {
            textarea.value += `${allMessages[key].author}: ${allMessages[key].content}\n`;
        }
        textarea.value = textarea.value.trim();
    }
}

attachEvents();