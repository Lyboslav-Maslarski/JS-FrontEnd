function generateReport() {
    let employees = [];
    const output = document.getElementById('output');
    output.value = '';
    let inputs = document.getElementsByTagName('input');
    let fieldsToTake = {};

    for (let index = 0; index < inputs.length; index++) {
        let input = inputs[index];
        if (input.checked) {
            fieldsToTake[index] = input.name;
        }
    }
    const tableRows = Array.from(document.querySelectorAll('tbody > tr'));

    for (const row of tableRows) {
        let children = row.children;
        let employee = {};
        for (let index = 0; index < children.length; index++) {
            if (fieldsToTake.hasOwnProperty(index)) {
                employee[fieldsToTake[index]] = children[index].textContent;
            }
        }
        employees.push(employee);
    }

    output.value = JSON.stringify(employees);
}