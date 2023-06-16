function fillMatrix(num) {
    let matrix = new Array(num).fill(new Array(num).fill(num));
    matrix.forEach(row => console.log(row.join(' ')));
}