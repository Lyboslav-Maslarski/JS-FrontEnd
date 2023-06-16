function solve(grade) {
    let output;
    grade = grade.toFixed(2);

    if (grade < 3) {
        output = `Fail (2)`;
    } else if (grade < 3.5) {
        output = `Poor (${grade})`;
    } else if (grade < 4.5) {
        output = `Good (${grade})`;
    } else if (grade < 5.5) {
        output = `Very good (${grade})`;
    } else if (grade <= 6) {
        output = `Excellent (${grade})`;
    } else {
        output = 'Invalid input!';
    }

    console.log(output);
}