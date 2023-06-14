function solve(text) {
    text = text.split(' ');
    text.forEach(word => {
        if (word.match(/#\b[A-Za-z]+\b/)) {
            console.log(word.slice(1));
        }
    });
}