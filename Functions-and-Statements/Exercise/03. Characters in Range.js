function printCharsFromTo(char1, char2) {
    let first = char1.charCodeAt(0);
    let second = char2.charCodeAt(0);
    let result = [];

    if (first < second) {
        for (let i = first + 1; i < second; i++) {
            result.push(String.fromCharCode(i));
        }
    } else {
        for (let i = second + 1; i < first; i++) {
            result.push(String.fromCharCode(i));
        }
    }

    console.log(result.join(' '));
}