function loading(number) {
    if (number < 100) {
        let repetition = number / 10;
        console.log(`${number}% [${'%'.repeat(repetition)}${'.'.repeat(10 - repetition)}]`);
        console.log('Still loading...');
    } else {
        console.log('100% Complete!');
        console.log('[%%%%%%%%%%]');
    }
}