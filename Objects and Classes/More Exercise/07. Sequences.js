function uniqueArrays(input) {
    input = input.map(arr => JSON.parse(arr));
    input.forEach(arr => arr.sort((f, s) => s - f));

    let uniqueArrays = [];
    for (let i = 0; i < input.length; i++) {
        let firstArr = input[i];
        let isUnique = true;

        for (let j = 0; j < uniqueArrays.length; j++) {
            let secondArr = uniqueArrays[j];
            if (firstArr.toString() === secondArr.toString()) {
                isUnique = false;
                break;
            }
        }
        if (isUnique) {
            uniqueArrays.push(firstArr);
        }
    }

    uniqueArrays
        .sort((f, s) => f.length - s.length)
        .forEach(arr => console.log(`[${arr.join(', ')}]`));
}