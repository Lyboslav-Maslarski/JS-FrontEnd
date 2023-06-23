function lockedProfile() {
    const btns = document.getElementsByTagName('button');
    [...btns].forEach(btn => btn.addEventListener('click', showOrHideContent));


    function showOrHideContent(event) {
        const btn = event.target;
        const profile = btn.parentNode;
        const unlocked = profile.querySelector('input[value="unlock"]');
        const hiddenContent = profile.getElementsByTagName('div')[0];

        if (unlocked.checked) {
            if (btn.textContent === 'Show more') {
                btn.textContent = 'Hide it'
                hiddenContent.style.display = 'inline-block';
            } else {
                btn.textContent = 'Show more'
                hiddenContent.style.display = 'none';
            }
        }
    }
}