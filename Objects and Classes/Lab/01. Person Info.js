function personInfo(firstName, lastName, age) {
    age = Number(age);

    let person = {
        firstName,
        lastName,
        age
    }

    return person;
}

console.log(personInfo('peter', 'pan', '22'));