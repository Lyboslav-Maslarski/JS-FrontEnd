function solve(num1, num2) {
    let nums = [];
    for (let i = num1; i <= num2; i++) {
        nums.push(i);
    }
    let sum = nums.reduce((accumulator, value) => accumulator + value, 0)
    console.log(nums.join(' '));
    console.log(`Sum: ${sum}`);
}
