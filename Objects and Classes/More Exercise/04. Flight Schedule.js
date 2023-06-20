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

flightScheduler([['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK430 Cancelled'],
['Ready to fly']
]
)