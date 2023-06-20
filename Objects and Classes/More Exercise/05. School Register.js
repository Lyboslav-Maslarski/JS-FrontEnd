function schoolRegister(input) {
    let students = {};
    for (const line of input) {
        let studentInfo = line.split(': ');
        let name = studentInfo[1].split(', ')[0];
        let grade = Number(studentInfo[2].split(', ')[0]) + 1;
        let score = Number(studentInfo[3]);
        if (score >= 3) {
            if (students.hasOwnProperty(grade)) {
                students[grade].students.push(name);
                students[grade].totalScore += score;
            } else {
                students[grade] = { students: [name], totalScore: score };
            }
        }
    }

    for (const key in students) {
        console.log(key + ' Grade');
        console.log('List of students: ' + students[key].students.join(', '));
        console.log('Average annual score from last year: ' +
            (students[key].totalScore / students[key].students.length).toFixed(2));
        console.log();
    }
}