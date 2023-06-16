function factorialDivision(num1, num2) {
    function calcFactorial(num) {
        if (num === 1) {
            return 1;
        }
        return calcFactorial(num - 1) * num;
    }
    let firstFactorial = calcFactorial(num1);
    let secondFactorial = calcFactorial(num2);

    let division = firstFactorial / secondFactorial;

    console.log(division.toFixed(2));
}