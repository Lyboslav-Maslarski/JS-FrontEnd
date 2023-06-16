function printDNA(length) {
    let index = 0;
    let chars = ['AT', 'CG', 'TT', 'AG', 'GG'];
    for (let i = 0; i < length; i++) {
        if (index === 0) {
            index++;
            console.log(`**${chars[i % chars.length]}**`);
        } else if (index === 1) {
            index++;
            console.log(`*${chars[i % chars.length].charAt(0)}--${chars[i % chars.length].charAt(1)}*`);
        } else if (index === 2) {
            index++;
            console.log(`${chars[i % chars.length].charAt(0)}----${chars[i % chars.length].charAt(1)}`);
        } else {
            index++;
            console.log(`*${chars[i % chars.length].charAt(0)}--${chars[i % chars.length].charAt(1)}*`);
            index = 0;
        }
    }
}