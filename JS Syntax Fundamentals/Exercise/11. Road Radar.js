function solve(speed, area) {
    let output;
    switch (area) {
        case 'motorway':
            if (speed <= 130) {
                output = `Driving ${speed} km/h in a 130 zone`;
            } else if (speed <= 150) {
                output = `The speed is ${speed - 130} km/h faster than the allowed speed of 130 - speeding`;
            } else if (speed <= 170) {
                output = `The speed is ${speed - 130} km/h faster than the allowed speed of 130 - excessive speeding`;
            } else {
                output = `The speed is ${speed - 130} km/h faster than the allowed speed of 130 - reckless driving`;
            }
            break;
        case 'interstate':
            if (speed <= 90) {
                output = `Driving ${speed} km/h in a 90 zone`;
            } else if (speed <= 110) {
                output = `The speed is ${speed - 90} km/h faster than the allowed speed of 90 - speeding`;
            } else if (speed <= 130) {
                output = `The speed is ${speed - 90} km/h faster than the allowed speed of 90 - excessive speeding`;
            } else {
                output = `The speed is ${speed - 90} km/h faster than the allowed speed of 90 - reckless driving`;
            }
            break;
        case 'city':
            if (speed <= 50) {
                output = `Driving ${speed} km/h in a 50 zone`;
            } else if (speed <= 70) {
                output = `The speed is ${speed - 50} km/h faster than the allowed speed of 50 - speeding`;
            } else if (speed <= 90) {
                output = `The speed is ${speed - 50} km/h faster than the allowed speed of 50 - excessive speeding`;
            } else {
                output = `The speed is ${speed - 50} km/h faster than the allowed speed of 50 - reckless driving`;
            }
            break;
        case 'residential':
            if (speed <= 20) {
                output = `Driving ${speed} km/h in a 20 zone`;
            } else if (speed <= 40) {
                output = `The speed is ${speed - 20} km/h faster than the allowed speed of 20 - speeding`;
            } else if (speed <= 60) {
                output = `The speed is ${speed - 20} km/h faster than the allowed speed of 20 - excessive speeding`;
            } else {
                output = `The speed is ${speed - 20} km/h faster than the allowed speed of 20 - reckless driving`;
            }
            break;
    }

    console.log(output);
}