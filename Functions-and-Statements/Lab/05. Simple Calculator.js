function solve(num1, num2, operation) {
    let operations = {
        'add': (a, b) => a + b,
        'subtract': (a, b) => a - b,
        'multiply': (a, b) => a * b,
        'divide': (a, b) => a / b
    }
    console.log(operations[operation](num1, num2));
}