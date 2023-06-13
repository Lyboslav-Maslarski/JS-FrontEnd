function solve(input) {
    let gold = 0;
    let dayOfFirstPurchase = 0;

    for (let i = 1; i <= input.length; i++) {
        if (i % 3 == 0) {
            gold += input[i - 1] * 0.7;
        } else {
            gold += input[i - 1];
        }
        if (gold * 67.51 >= 11949.16 && dayOfFirstPurchase === 0) {
            dayOfFirstPurchase = i;
        }
    }

    let money = gold * 67.51
    let bitCoinCount = Math.floor(money / 11949.16);
    money -= bitCoinCount * 11949.16;

    console.log(`Bought bitcoins: ${bitCoinCount}`);
    if (dayOfFirstPurchase !== 0) {
        console.log(`Day of the first purchased bitcoin: ${dayOfFirstPurchase}`);
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`);
}