function solve(x1, y1, x2, y2) {
    let firstToZero = Math.sqrt(Math.pow((0 - x1), 2) + Math.pow((0 - y1), 2));
    let secondToZero = Math.sqrt(Math.pow((0 - x2), 2) + Math.pow((0 - y2), 2));
    let firstToSecond = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));

    if (Number.isInteger(firstToZero)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(secondToZero)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(firstToSecond)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}
