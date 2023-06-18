function createListOfEmployees(input) {
    let employeeList = [];
    for (const line of input) {
        let employee = {
            "Name": line,
            "Personal Number": line.length
        }

        employeeList.push(employee);
    }

    for (const employee of employeeList) {
        let output = ''
        let index = 0;
        for (const key in employee) {
            output += `${key}: ${employee[key]}`;
            if (index === 0) {
                output += ' -- '
                index++;
            } else {
                index = 0;
            }
        }
        console.log(output);
    }
}

createListOfEmployees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
)