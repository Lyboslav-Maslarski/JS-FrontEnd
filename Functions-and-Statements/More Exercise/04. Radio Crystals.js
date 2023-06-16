function processCrystals([desiredThickness, ...crystals]) {
    let cut = num => num / 4;
    let lap = num => num * 0.8;
    let grind = num => num - 20;
    let etch = num => num - 2;
    let xRay = num => num + 1;
    let transportingAndWashing = num => Math.floor(num);
    let checkIfOneMoreNeeded = num => xRay(num) === desiredThickness;

    let numberOfOperation = 0;

    for (let i = 0; i < crystals.length; i++) {
        let crystal = crystals[i];
        console.log(`Processing chunk ${crystal} microns`);

        while (desiredThickness - 1 <= crystal / 4) {
            crystal = cut(crystal);
            numberOfOperation++;
        }
        if (numberOfOperation > 0) {
            console.log(`Cut x${numberOfOperation}`);
            console.log('Transporting and washing');
            crystal = transportingAndWashing(crystal);
            numberOfOperation = 0;
        }

        while (desiredThickness - 1 <= crystal * 0.8) {
            crystal = lap(crystal);
            numberOfOperation++;
        }
        if (numberOfOperation > 0) {
            console.log(`Lap x${numberOfOperation}`);
            console.log('Transporting and washing');
            crystal = transportingAndWashing(crystal);
            numberOfOperation = 0;
        }

        while (desiredThickness - 1 <= crystal - 20) {
            crystal = grind(crystal);
            numberOfOperation++;
        }
        if (numberOfOperation > 0) {
            console.log(`Grind x${numberOfOperation}`);
            console.log('Transporting and washing');
            crystal = transportingAndWashing(crystal);
            numberOfOperation = 0;
        }

        while (desiredThickness - 1 <= crystal - 2) {
            crystal = etch(crystal);
            numberOfOperation++;
        }
        if (numberOfOperation > 0) {
            console.log(`Etch x${numberOfOperation}`);
            console.log('Transporting and washing');
            crystal = transportingAndWashing(crystal);
            numberOfOperation = 0;
        }

        if (checkIfOneMoreNeeded(crystal)) {
            console.log('X-ray x1');
        }

        console.log(`Finished crystal ${desiredThickness} microns`);
    }
}