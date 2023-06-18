function convertToObj(json) {
    let object = JSON.parse(json);

    let keys = Object.keys(object);

    for (const key of keys) {
        console.log(`${key}: ${object[key]}`);
    }
}