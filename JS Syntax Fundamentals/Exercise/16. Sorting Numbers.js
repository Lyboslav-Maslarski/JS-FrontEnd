function solve(arr) {
    arr.sort((f, s) => f - s);
    let output = [];
    while (arr.length > 0) {
        output.push(arr.shift(arr[0]));
        output.push(arr.pop(arr[arr.length - 1]));
    }

    return output;
}