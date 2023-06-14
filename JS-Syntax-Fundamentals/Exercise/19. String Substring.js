function solve(searchedWord, text) {
    text = text.split(' ');
    for (const word of text) {
        if (word.toLowerCase() == searchedWord.toLowerCase()) {
            return searchedWord;
        }
    }
    return `${searchedWord} not found!`;
}