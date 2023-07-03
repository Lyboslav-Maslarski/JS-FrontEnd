function lockedProfile() {
    const url = 'http://localhost:3030/jsonstore/advanced/profiles';
    const main = document.getElementById('main');
    main.innerHTML = '';

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            for (key in data) {
                const div = document.createElement('div');
                div.className = 'profile';

                const profileImage = document.createElement('img');
                profileImage.src = './iconProfile2.png';
                profileImage.className = 'userIcon';

                const labelLock = document.createElement('label');
                labelLock.textContent = 'Lock';

                const radioLock = document.createElement('input');
                radioLock.type = 'radio';
                radioLock.name = 'user1Locked';
                radioLock.value = 'lock';
                radioLock.checked = true;

                const labelUnlock = document.createElement('label');
                labelUnlock.textContent = 'Unlock';

                const radioUnlock = document.createElement('input');
                radioUnlock.type = 'radio';
                radioUnlock.name = 'user1Locked';
                radioUnlock.value = 'unlock';

                const hr = document.createElement('hr');

                const labelUsername = document.createElement('label');
                labelUsername.textContent = 'Username';

                const usernameInput = document.createElement('input');
                usernameInput.type = 'text';
                usernameInput.name = 'user1Username';
                usernameInput.value = data[key].username;
                usernameInput.disabled = true;
                usernameInput.readOnly = true;

                const moreInfoDiv = document.createElement('div');
                moreInfoDiv.id = 'user1HiddenFields';

                const moreInfoHr = document.createElement('hr');

                const emailLabel = document.createElement('label');
                emailLabel.textContent = 'Email:';

                const emailInput = document.createElement('input');
                emailInput.type = 'email';
                emailInput.name = 'user1Email';
                emailInput.value = data[key].email;
                emailInput.disabled = true;
                emailInput.readOnly = true;

                const ageLabel = document.createElement('label');
                ageLabel.textContent = 'Age:';

                const ageInput = document.createElement('input');
                ageInput.type = 'email';
                ageInput.name = 'user1Age';
                ageInput.value = data[key].age;
                ageInput.disabled = true;
                ageInput.readOnly = true;

                moreInfoDiv.append(moreInfoHr, emailLabel, emailInput, ageLabel, ageInput);
                moreInfoDiv.style.display = 'none';

                const moreInfoButton = document.createElement('button');
                moreInfoButton.textContent = 'Show more';
                moreInfoButton.addEventListener('click', showOrHideMoreInfo)

                div.append(profileImage, labelLock, radioLock, labelUnlock, radioUnlock, hr, labelUsername, usernameInput, moreInfoDiv, moreInfoButton);

                main.appendChild(div);
            }
        })

    function showOrHideMoreInfo(event) {
        let profile = event.target.parentElement;
        let moreInfo = profile.querySelector('#user1HiddenFields');

        if (profile.querySelector('input[value="unlock"]').checked) {
            if (event.target.textContent === 'Show more') {
                moreInfo.style.display = 'inline-block';
                event.target.textContent = 'Hide it';
            } else {
                moreInfo.style.display = 'none';
                event.target.textContent = 'Show more';
            }
        }
    }
}