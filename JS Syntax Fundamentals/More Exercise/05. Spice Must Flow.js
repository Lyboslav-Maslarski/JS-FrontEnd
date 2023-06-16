function solve(startingYield) {
    let days = 0;
    let yield = 0;

    while (startingYield >= 100) {
        days++;
        yield += startingYield;
        yield -= 26;
        startingYield = startingYield -= 10;
    }

    if (yield >= 26) {
        yield -= 26;
    }

    console.log(days);
    console.log(yield);
}

solve(450);