function createListOfEmployees(input) {
    Object.entries(
        input.reduce((data, employee) => {
            data[employee] = employee.length;
            return data;
        }, {})
    ).forEach(([key, value]) =>
        console.log(`Name: ${key} -- Personal Number: ${value}`));

    // let employeeList = [];
    // for (const line of input) {
    //     let employee = {
    //         "Name": line,
    //         "Personal Number": line.length
    //     }

    //     employeeList.push(employee);
    // }

    // for (const employee of employeeList) {
    //     let output = ''
    //     let index = 0;
    //     for (const key in employee) {
    //         output += `${key}: ${employee[key]}`;
    //         if (index === 0) {
    //             output += ' -- '
    //             index++;
    //         } else {
    //             index = 0;
    //         }
    //     }
    //     console.log(output);
    // }
}