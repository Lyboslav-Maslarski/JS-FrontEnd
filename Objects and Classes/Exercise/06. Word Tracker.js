function wordTracker(input) {
    let words = input.shift().split(' ')
        .reduce((data, word) => {
            data[word] = 0;
            return data;
        }, {});

    input.forEach(w => {
        if (w in words) {
            words[w] = words[w] + 1;
        }
    });

    Object.entries(words)
        .sort(([fKey, fValue], [sKey, sValue]) => sValue - fValue)
        .forEach(([key, value]) => console.log(`${key} - ${value}`));
}