function solve() {
    let [checkBtn, clearBtn] = document.getElementsByTagName('button');
    let table = document.getElementsByTagName('table')[0];
    let result = document.getElementById('check').children[0];

    checkBtn.addEventListener('click', checkSudomu);
    clearBtn.addEventListener('click', clearSudomu);

    function checkSudomu() {
        let rows = document.querySelectorAll('tbody > tr');
        let matrix = [];
        let correctFill = true;

        for (const row of rows) {
            let rowNumbers = []
            Array.from(row.children)
                .forEach(el => rowNumbers.push(el.children[0].value));
            matrix.push(rowNumbers);
        }

        for (let i = 0; i < matrix.length; i++) {
            let row = matrix[i];
            let col = matrix.map(row => row[i]);

            if (row.length !== new Set(row).size || col.length !== new Set(col).size) {
                correctFill = false;
                break;
            }
        }


        if (correctFill) {
            table.style.border = '2px solid green';
            result.textContent = 'You solve it! Congratulations!';
            result.style.color = 'green';
        } else {
            table.style.border = '2px solid red';
            result.textContent = 'NOP! You are not done yet...';
            result.style.color = 'red';
        }
    }

    function clearSudomu() {
        Array.from(document.getElementsByTagName('input'))
            .forEach(i => i.value = '');
        table.style = '';
        result.textContent = '';
    }
}