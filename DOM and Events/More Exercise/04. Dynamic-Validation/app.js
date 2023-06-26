function validate() {
    let input = document.getElementById('email');
    input.addEventListener('change', checkForValidity);

    function checkForValidity() {
        if (input.value.match(/[a-z]@[a-z].[a-z]/)) {
            input.classList.remove('error');
        } else {
            input.classList.add('error');
        }
    }
}