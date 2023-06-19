function createListOfTowns(input) {
    // for (const line of input) {
    //     let [town, latitude, longitude] = line.split(' | ');

    //     let townOjc = {
    //         town,
    //         latitude: Number(latitude).toFixed(2),
    //         longitude: Number(longitude).toFixed(2)
    //     }

    //     console.log(townOjc);
    // }

    Object.values(input.reduce((data, townInfo) => {
        let [town, latitude, longitude] = townInfo.split(' | ');
        data[town] = {
            town,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2)
        };
        return data;
    }, {})).forEach(t => console.log(t));
}