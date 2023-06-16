function checkForPalindromes(numbers) {
    let reverseNum = number => Number([...number.toString()].reverse().join(''));

    for (const num of numbers) {
        console.log(num === reverseNum(num));
    }
}