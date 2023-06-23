function sumTable() {
    let result = document.getElementById('sum');
    let rows = document.querySelectorAll('td');
    let sum = 0;

    for (let index = 1; index < rows.length; index += 2) {
        sum += Number(rows[index].textContent);
    }

    result.textContent = sum.toFixed(2);
}