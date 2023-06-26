function solve() {
    const input = document.getElementById('input');
    const selectTO = document.getElementById('selectMenuTo');
    const output = document.getElementById('result');

    let newOptionOne = document.createElement('option');
    newOptionOne.value = 'binary';
    newOptionOne.textContent = 'Binary';
    let newOptionTwo = document.createElement('option');
    newOptionTwo.value = 'hexadecimal';
    newOptionTwo.textContent = 'Hexadecimal';
    selectTO.appendChild(newOptionOne);
    selectTO.appendChild(newOptionTwo);

    const btn = document.querySelector('button');
    btn.addEventListener('click', convertNumber);

    function convertNumber() {
        let numberToConvert = Number(input.value);
        if (selectTO.value === 'binary') {
            output.value = numberToConvert.toString(2);
        } else if (selectTO.value === 'hexadecimal') {
            output.value = numberToConvert.toString(16).toUpperCase();
        } else {
            output.value = '';
        }
    }
}