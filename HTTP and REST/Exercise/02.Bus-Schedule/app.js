function solve() {
    const infoContainer = document.querySelector('.info');
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');
    const URL = 'http://localhost:3030/jsonstore/bus/schedule/';
    let depotId = 'depot';
    let stopName = '';


    async function depart() {
        departBtn.disabled = true;
        arriveBtn.disabled = false;
        try {
            let depotInfo = await fetch(URL + depotId);
            depotInfo = await depotInfo.json();
            depotId = depotInfo.next;
            stopName = depotInfo.name;

            infoContainer.textContent = `Next stop ${stopName}`;
        } catch (err) {
            departBtn.disabled = true;
            arriveBtn.disabled = true;
            infoContainer.textContent = 'Error';
        }
    }

    async function arrive() {
        departBtn.disabled = false;
        arriveBtn.disabled = true;

        infoContainer.textContent = `Arriving at ${stopName}`;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();