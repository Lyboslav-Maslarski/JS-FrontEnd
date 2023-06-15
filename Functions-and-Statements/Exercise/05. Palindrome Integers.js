function checkForPalindromes(numbers) {
    for (const num of numbers) {
        console.log(num == [...num.toString()].reverse().join(''));
    }
}