function sumAndSubtract(num1, num2, num3) {
    function sum(num1, num2) {
        return num1 + num2;
    }
    function subtract(num1, num2) {
        return num1 - num2;
    }
    console.log(subtract(sum(num1, num2), num3));
}