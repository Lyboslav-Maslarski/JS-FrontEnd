function makeDictionary(input) {
    let dictionary = {};
    for (const line of input) {
        let obj = JSON.parse(line);
        let term = Object.keys(obj)[0];
        let definition = Object.values(obj)[0];
        dictionary[term] = definition;
    }
    Object.entries(dictionary)
        .sort(([fKey, fValue], [sKey, sValue]) => fKey.localeCompare(sKey))
        .forEach(([key, value]) => console.log(`Term: ${key} => Definition: ${value}`));
}