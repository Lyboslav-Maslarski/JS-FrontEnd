function solve(text, searchedWord) {
    let words = text.split(' ');
    let counter = 0;

    for (const word of words) {
        if (word === searchedWord) {
            counter++;
        }
    }

    console.log(counter);
}