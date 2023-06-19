function oddOccurrences(input) {
    let output = [];
    input = input.toLowerCase().split(' ');

    input.forEach(word => {
        let wordOccurrence = input.filter(w => w === word).length;
        if (wordOccurrence % 2 !== 0 && !output.includes(word)) {
            output.push(word);
        }
    });

    console.log(output.join(' '));
}