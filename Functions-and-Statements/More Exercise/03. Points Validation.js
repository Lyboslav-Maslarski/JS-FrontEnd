function pointsValidation([x1, y1, x2, y2]) {

    console.log(checkValid(x1, y1, 0, 0));
    console.log(checkValid(x2, y2, 0, 0));
    console.log(checkValid(x1, y1, x2, y2));

    function checkValid(x1, y1, x2, y2) {
        let distance = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
        return Number.isInteger(distance) ?
            `{${x1}, ${y1}} to {${x2}, ${y2}} is valid` :
            `{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`;
    }
}