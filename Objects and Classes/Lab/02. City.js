function printObject(city) {
    for (const [key, value] of Object.entries(city)) {
        console.log(key + ' -> ' + value);
    }
}