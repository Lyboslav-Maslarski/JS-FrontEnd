function solve(num) {
    let sum = 0;
    let haveDiffNum = false;
    num = num.toString();
    for (let i = 0; i < num.length; i++) {
        sum += parseInt(num[i]);
        if (i < num.length - 1 && num[i] !== num[i + 1]) {
            haveDiffNum = true;
        }
    }
    console.log(!haveDiffNum);
    console.log(sum);
}