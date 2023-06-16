function perfectNumber(number) {
    if (number === 0) {
        console.log("It's not so perfect.");
        return;
    }

    let sum = 0;
    for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }
    console.log(number === sum ? 'We have a perfect number!' : 'It\'s not so perfect.');
}