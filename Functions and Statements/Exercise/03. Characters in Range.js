function printCharsFromTo(char1, char2) {
    let first = char1.charCodeAt(0);
    let second = char2.charCodeAt(0);
    
    let start = Math.min(first, second);
    let end = Math.max(first, second);

    let result = [];
    for (let i = start + 1; i < end; i++) {
        result.push(String.fromCharCode(i));
    }

    console.log(result.join(' '));
}