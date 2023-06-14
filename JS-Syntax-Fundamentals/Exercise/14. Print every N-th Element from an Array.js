function solve(arr, num) {
    let output = [];
    for (let i = 0; i < arr.length; i += num) {
        output.push(arr[i]);
    }
    return output;
}