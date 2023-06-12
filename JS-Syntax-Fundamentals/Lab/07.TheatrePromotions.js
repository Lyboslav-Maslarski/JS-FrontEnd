function solve(day, age) {
    let result;
    if (0 <= age && age <= 18) {
        switch (day) {
            case 'Weekday':
                result = '12$';
                break;
            case 'Weekend':
                result = '15$';
                break;
            case 'Holiday':
                result = '5$';
                break;
        }
    } else if (18 < age && age <= 64) {
        switch (day) {
            case 'Weekday':
                result = '18$';
                break;
            case 'Weekend':
                result = '20$';
                break;
            case 'Holiday':
                result = '12$';
                break;
        }
    } else if (64 < age && age <= 122) {
        switch (day) {
            case 'Weekday':
                result = '12$';
                break;
            case 'Weekend':
                result = '15$';
                break;
            case 'Holiday':
                result = '10$';
                break;
        }
    } else {
        result = 'Error!';
    }
    console.log(result);
}