function focused() {
    let inputs = document.querySelectorAll('input[type="text"]');
    for (const i of inputs) {
        i.addEventListener('focus', addClass);
        i.addEventListener('blur', removeClass);
    }

    function addClass(e) {
        e.target.parentNode.classList.add('focused');
    }

    function removeClass(e) {
        e.target.parentNode.classList.remove('focused');
    }
}