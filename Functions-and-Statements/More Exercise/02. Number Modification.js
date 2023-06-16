function numberModification(number) {
    number = number.toString();
    let avg = findAvg(number);

    while (avg <= 5) {
        number = number + '9';
        avg = findAvg(number);
    }

    console.log(number);

    function findAvg(num) {
        return ([...num].map(Number).reduce((sum, digit) => sum + digit, 0)) / num.length;
    }
}