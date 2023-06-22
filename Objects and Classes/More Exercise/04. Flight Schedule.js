function flightScheduler(input) {
    let flights = input[0];
    let changes = input[1];
    let filterStatus = input[2][0];

    let allFlights = [];

    for (const flight of flights) {
        let flightInfo = flight.split(' ');
        let number = flightInfo.shift();
        let destination = flightInfo.join(' ');
        allFlights.push({ number, destination, status: 'Ready to fly' })
    }

    for (const change of changes) {
        let changeNumber = change.split(' ')[0];
        for (const flight of allFlights) {
            if (changeNumber === flight.number) {
                flight.status = 'Cancelled';
                break;
            }
        }
    }
    allFlights.filter(flight => flight.status === filterStatus)
        .map(flight => ({ Destination: flight.destination, Status: flight.status }))
        .forEach(flight => console.log(flight));
}