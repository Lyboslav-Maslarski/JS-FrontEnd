function piccolo(input) {
    let parkingLot = new Set();

    for (const line of input) {
        let [command, number] = line.split(', ');

        if (command === 'IN') {
            parkingLot.add(number);
        } else if (command === 'OUT') {
            parkingLot.delete(number);
        }
    }

    if (parkingLot.size === 0) {
        console.log('Parking Lot is Empty');
    } else {
        parkingLot = [...parkingLot].sort((f, s) => f.localeCompare(s));
        console.log(parkingLot.join('\n'));
    }
}