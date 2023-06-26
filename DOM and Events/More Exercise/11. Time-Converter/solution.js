function attachEventsListeners() {
    const btns = document.querySelectorAll('input[type="button"]');
    const inputs = Array.from(document.querySelectorAll('input[type="text"]'));

    for (let index = 0; index < btns.length; index++) {
        let btn = btns[index];

        if (index === 0) {
            btn.addEventListener('click', e => {
                let days = Number(inputs[0].value);
                inputs[1].value = days * 24;
                inputs[2].value = days * 1440;
                inputs[3].value = days * 86400;
            });
        } else if (index === 1) {
            btn.addEventListener('click', e => {
                let hours = Number(inputs[1].value);
                inputs[0].value = hours / 24;
                inputs[2].value = hours * 60;
                inputs[3].value = hours * 3600;
            });
        } else if (index === 2) {
            btn.addEventListener('click', e => {
                let minutes = Number(inputs[2].value);
                inputs[0].value = minutes / 1440;
                inputs[1].value = minutes / 60;
                inputs[3].value = minutes * 60;
            });
        } else {
            btn.addEventListener('click', e => {
                let seconds = Number(inputs[3].value);
                inputs[0].value = seconds / 86400;
                inputs[1].value = seconds / 3600;
                inputs[2].value = seconds / 60;
            });
        }
    }
}