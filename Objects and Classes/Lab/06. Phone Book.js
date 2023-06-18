function parsePhoneBook(input) {
    let phoneBook = {};

    for (const line of input) {
        let [name, number] = line.split(' ');
        phoneBook[name] = number;
    }

    for (const key in phoneBook) {
        console.log(`${key} -> ${phoneBook[key]}`);
    }
}