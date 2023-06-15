function solve(input) {
    let words = input.match(/\b\w+\b/g);
    words = words.map(w => w.toUpperCase());
    console.log(words.join(', '));
}

solve('Functions in JS can be() nested, i.e. hold other functions.')
solve('Hi, how are you?')
