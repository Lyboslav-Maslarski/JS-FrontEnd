function addressBookParseAndSort(input) {
    let addressBook = {};

    for (const line of input) {
        let [name, address] = line.split(':');
        addressBook[name] = address;
    }

    addressBook = Object.entries(addressBook)
        .sort(([fName, fAddress], [sName, sAddress]) => fName.localeCompare(sName));

    for (const [name, address] of addressBook) {
        console.log(`${name} -> ${address}`);
    }
}