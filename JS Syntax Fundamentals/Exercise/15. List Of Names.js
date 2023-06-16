function solve(arr) {
    arr.sort((f, s) => f.localeCompare(s));
    for (let i = 0; i < arr.length; i++) {
        console.log(`${i + 1}.${arr[i]}`);
    }
}