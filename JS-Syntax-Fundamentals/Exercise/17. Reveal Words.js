function solve(words, text) {
    words = words.split(', ');
    text = text.split(' ');
    for (let i = 0; i < text.length; i++) {
        if (text[i][0] === '*') {
            for (const word of words) {
                if (word.length === text[i].length) {
                    text[i] = word;
                }
            }
        }
    }
    console.log(text.join(' '));
}