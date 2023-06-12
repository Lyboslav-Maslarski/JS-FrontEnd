function solve(num, arr) {
    let newArr = arr.slice(0, num);
    newArr.reverse();
    console.log(newArr.join(' '));
}