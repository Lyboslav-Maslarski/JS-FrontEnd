function deleteByEmail() {
    let result = document.getElementById('result');
    let input = document.querySelector('input[type="text"]');
    let tableRow = [...document.querySelectorAll('td:nth-child(even)')]
        .find(td => td.textContent === input.value);

    if (tableRow) {
        tableRow.parentElement.remove();
        result.textContent = 'Deleted.';
    } else {
        result.textContent = 'Not found.';
    }
}