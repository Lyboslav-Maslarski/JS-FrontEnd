function checkPassword(password) {
    let output = [];

    if (password.length < 6 || password.length > 10) {
        output.push('Password must be between 6 and 10 characters');
    }

    if (!/^[A-Za-z0-9]+$/.test(password)) {
        output.push('Password must consist only of letters and digits');
    }

    if (!/\d.*\d/.test(password)) {
        output.push('Password must have at least 2 digits');
    }

    if (output.length > 0) {
        console.log(output.join('\n'));
    } else {
        console.log('Password is valid');
    }
}