function attachEventsListeners() {
    const input = document.getElementById('inputDistance');
    const inputSelect = document.getElementById('inputUnits');

    const output = document.getElementById('outputDistance');
    const outputSelect = document.getElementById('outputUnits');

    const btn = document.getElementById('convert');

    btn.addEventListener('click', convert);

    function convert() {
        let rates = {
            km: 1000,
            m: 1,
            cm: 0.01,
            mm: 0.001,
            mi: 1609.34,
            yrd: 0.9144,
            ft: 0.3048,
            in: 0.0254
        }
        let number = Number(input.value) * rates[inputSelect.value];
        output.value = number / rates[outputSelect.value]
    }
}