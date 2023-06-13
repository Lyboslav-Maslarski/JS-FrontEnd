function solve(base, increment) {
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = (base % 2 == 0 ? 4 : 1) * increment;
    let height = 0;
    for (let i = base; i > 2; i -= 2) {
        height++;

        if (height % 5 == 0) {
            lapis += ((i * 2 + (i - 2) * 2) * increment);
        } else {
            marble += ((i * 2 + (i - 2) * 2) * increment);
        }

        stone += (((i - 2) * (i - 2)) * increment);
    }

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor((height + 1) * increment)}`);
}