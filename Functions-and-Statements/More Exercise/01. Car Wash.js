function carWash(commands) {
    let commandsList = {
        'soap': num => num + 10,
        'water': num => num *= 1.2,
        'vacuum cleaner': num => num *= 1.25,
        'mud': num => num *= 0.9
    }

    let car = 0;
    commands.forEach(c => car = commandsList[c](car));

    console.log(`The car is ${car.toFixed(2)}% clean.`);
}