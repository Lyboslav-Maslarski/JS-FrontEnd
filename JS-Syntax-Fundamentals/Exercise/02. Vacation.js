function solve(people, type, day) {
    let ticket = 0;
    switch (type) {
        case 'Students':
            switch (day) {
                case 'Friday':
                    ticket = 8.45;
                    break;
                case 'Saturday':
                    ticket = 9.80;
                    break;
                case 'Sunday':
                    ticket = 10.46;
                    break;
            }
            break;
        case 'Business':
            switch (day) {
                case 'Friday':
                    ticket = 10.90;
                    break;
                case 'Saturday':
                    ticket = 15.60;
                    break;
                case 'Sunday':
                    ticket = 16;
                    break;
            }
            break;
        case 'Regular':
            switch (day) {
                case 'Friday':
                    ticket = 15;
                    break;
                case 'Saturday':
                    ticket = 20;
                    break;
                case 'Sunday':
                    ticket = 22.50;
                    break;
            }
            break;
    }

    let price = 0;
    if (type === 'Students' && people >= 30) {
        price = (ticket * people) * 0.85;
    } else if (type === 'Business' && people >= 100) {
        price = ticket * (people - 10);
    } else if (type === 'Regular' && people >= 10 && people <= 20) {
        price = (ticket * people) * 0.95;
    } else {
        price = ticket * people;
    }

    console.log(`Total price: ${price.toFixed(2)}`);
}