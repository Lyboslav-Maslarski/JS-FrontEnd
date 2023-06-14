function solve(arr, rotations) {
    rotations = rotations % arr.length;
    for (let i = 0; i < rotations; i++) {
        let num = arr.shift();
        arr.push(num);
    }
    console.log(arr.join(' '));
}