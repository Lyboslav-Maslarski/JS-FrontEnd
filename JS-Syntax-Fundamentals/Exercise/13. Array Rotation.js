function solve(arr, rotations) {
    for (let i = 0; i < rotations; i++) {
        let num = arr.shift(1);
        arr.push(num);
    }
    console.log(arr.join(' '));
}