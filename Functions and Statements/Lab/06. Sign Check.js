function solve(...numbers) {
    console.log(numbers.filter(num => num < 0).length % 2 === 0 ?
        'Positive' : 'Negative');
}