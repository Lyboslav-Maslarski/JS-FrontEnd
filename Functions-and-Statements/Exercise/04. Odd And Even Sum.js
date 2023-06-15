function sumEvenAndSumOddDigits(number) {
    let evenSum = 0;
    let oddSum = 0;

    while (number > 0) {
        let lastDigit = number % 10;

        if (lastDigit % 2 === 0) {
            evenSum += lastDigit;
        } else {
            oddSum += lastDigit;
        }
        number = Math.floor(number / 10);
    }

    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
}