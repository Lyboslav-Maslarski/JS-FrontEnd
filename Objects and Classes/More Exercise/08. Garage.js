function garage(input) {
    let garages = {};
    for (const line of input) {
        let [garageNumber, garageInfo] = line.split(' - ');
        let carInfo = garageInfo.split(', ');
        let car = [];

        for (const carProp of carInfo) {
            let [propKey, propValue] = carProp.split(': ');
            car.push(`${propKey} - ${propValue}`);
        }

        if (!garages.hasOwnProperty(garageNumber)) {
            garages[garageNumber] = [];
        }

        garages[garageNumber].push(car);
    }
    for (const key in garages) {
        console.log(`Garage № ${key}`);

        for (const car of garages[key]) {
            let carInfo = '--- ' + car.join(', ');
            console.log(carInfo);
        }
    }
}