function studentInfo(input) {
    let courses = [];
    for (let line of input) {
        if (line.includes(':')) {
            let [name, capacity] = line.split(': ');
            let course = courses.find(c => c.name === name);
            if (course) {
                course.capacity += Number(capacity);
            } else {
                capacity = Number(capacity);
                course = { name, capacity, students: [] };
                courses.push(course);
            }
        } else {
            line = line.split(' ');
            let username = line[0]
                .substring(0, line[0].indexOf('['));
            let credits = Number(line[0]
                .substring(line[0].indexOf('[') + 1, line[0].indexOf(']')));
            let email = line[3];
            let courseName = line[5];
            let course = courses.find(c => c.name === courseName);
            if (course && course.capacity > 0) {
                let student = { username, credits, email };
                course.students.push(student);
                course.capacity--;
            }
        }
    }

    courses.sort((f, s) => s.students.length - f.students.length);

    for (const course of courses) {
        console.log(`${course.name}: ${course.capacity} places left`);
        course.students.sort((f, s) => s.credits - f.credits)
            .forEach(s => console.log(`--- ${s.credits}: ${s.username}, ${s.email}`));
    }
}