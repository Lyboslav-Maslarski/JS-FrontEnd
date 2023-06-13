function solve(input) {
    let username = input[0];
    let password = username.split("").reverse().join("");
    let isBlocked = false;

    for (let i = 1; i < input.length; i++) {

        if (input[i] === password) {
            break;
        } else if (i !== 4) {
            console.log('Incorrect password. Try again.')
        } else {
            isBlocked = true;
            break;
        }
    }

    if (isBlocked) {
        console.log(`User ${username} blocked!`)
    } else {
        console.log(`User ${username} logged in.`)
    }
}

solve(['Acer', 'login', 'go', 'let me in', 'recA'])
solve(['momo', 'omom'])
solve(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny'])