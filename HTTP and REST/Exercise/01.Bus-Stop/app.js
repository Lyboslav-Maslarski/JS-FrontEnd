function getInfo() {
    const busStopID = document.getElementById('stopId').value;
    const stopNameContainer = document.getElementById('stopName');
    const busContainer = document.getElementById('buses');
    busContainer.replaceChildren();
    const URL = `http://localhost:3030/jsonstore/bus/businfo/${busStopID}`;

    fetch(URL, { method: 'GET' })
        .then(res => res.json())
        .then(data => {
            stopNameContainer.textContent = data.name;

            Object.entries(data.buses).forEach(([key, value]) => {
                let newLi = document.createElement('li');
                newLi.textContent = `Bus ${key} arrives in ${value} minutes`;
                busContainer.appendChild(newLi);
            })
        })
        .catch(err => stopNameContainer.textContent = 'Error');
}