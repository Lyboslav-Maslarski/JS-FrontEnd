function attachEvents() {
    const location = document.getElementById('location');
    const submitBtn = document.getElementById('submit');
    const forecast = document.getElementById('forecast');
    const current = document.getElementById('current');
    const upcoming = document.getElementById('upcoming');
    const url = 'http://localhost:3030/jsonstore/forecaster/locations';
    const todayUrl = 'http://localhost:3030/jsonstore/forecaster/today/';
    const upcomingUrl = 'http://localhost:3030/jsonstore/forecaster/upcoming/';

    const weatherSymbols = {
        'Sunny': '&#x2600',
        'Partly sunny': '&#x26C5',
        'Overcast': '&#x2601',
        'Rain': '&#x2614',
        'Degrees': '&#176',
    };

    submitBtn.addEventListener('click', displayForecast);

    async function displayForecast() {
        let searchedLocation = location.value;
        let searchedLocationCode;
        try {
            let allLocations = await fetch(url, { method: 'GET' });
            allLocations = await allLocations.json();
            Object.values(allLocations).forEach(({ code, name }) => {
                if (name === searchedLocation) {
                    searchedLocationCode = code;
                }
            });

            if (searchedLocationCode) {
                current.removeChild(current.lastChild);
                upcoming.removeChild(upcoming.lastChild);
                forecast.style.display = 'block';
                let currentForecast = await fetch(todayUrl + searchedLocationCode);
                currentForecast = await currentForecast.json();

                let todayDiv = document.createElement('div');
                todayDiv.classList.add('forecast');
                todayDiv.innerHTML = `
                <span class="condition symbol">${weatherSymbols[currentForecast.forecast.condition]}</span>
                <span class="condition">
                    <span class="forecast-data">${currentForecast.name}</span>
                    <span class="forecast-data">${currentForecast.forecast.low}&#176/${currentForecast.forecast.high}&#176</span>
                    <span class="forecast-data">${currentForecast.forecast.condition}</span>
                </span>    
                `;

                current.appendChild(todayDiv);

                let upcomingForecast = await fetch(upcomingUrl + searchedLocationCode);
                upcomingForecast = await upcomingForecast.json();
                let upcomingDiv = document.createElement('div');
                upcomingDiv.classList.add('forecast-info');

                for (const day of upcomingForecast.forecast) {
                    let span = document.createElement('span');
                    span.classList.add('upcoming');
                    span.innerHTML = `
                    <span class="symbol">${weatherSymbols[day.condition]}</span>
                    <span class="forecast-data">${day.low}&#176/${day.high}&#176</span>
                    <span class="forecast-data">${day.condition}</span>
                    `;

                    upcomingDiv.appendChild(span);
                }

                upcoming.appendChild(upcomingDiv);
            }
        } catch (err) {
            forecast.style.display = 'block';
            forecast.textContent = 'ERROR';
        }

    }
}

attachEvents();