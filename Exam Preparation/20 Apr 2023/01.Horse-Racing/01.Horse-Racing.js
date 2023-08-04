function solve(input) {
    const horses = input.shift().split('|');

    let line = input.shift();
    while (line !== 'Finish') {
        let [command, firstHorse, secondHorse] = line.split(' ');
        const firstHorseIndex = horses.indexOf(firstHorse);
        const secondHorseIndex = horses.indexOf(secondHorse);

        switch (command) {
            case 'Retake':
                if (firstHorseIndex < secondHorseIndex) {
                    horses.splice(firstHorseIndex, 1, secondHorse);
                    horses.splice(secondHorseIndex, 1, firstHorse);
                    console.log(`${firstHorse} retakes ${secondHorse}.`);
                }
                break;

            case 'Trouble':
                if (firstHorseIndex > 0) {
                    horses.splice(firstHorseIndex, 1);
                    horses.splice(firstHorseIndex - 1, 0, firstHorse);
                    console.log(`Trouble for ${firstHorse} - drops one position.`);
                }
                break;

            case 'Rage':
                if (firstHorseIndex <= horses.length - 3) {
                    horses.splice(firstHorseIndex, 1);
                    horses.splice(firstHorseIndex + 2, 0, firstHorse);
                } else if (firstHorseIndex === horses.length - 2) {
                    horses.splice(firstHorseIndex, 1);
                    horses.push(firstHorse);
                }
                console.log(`${firstHorse} rages 2 positions ahead.`);
                break;

            case 'Miracle':
                const horse = horses.splice(0, 1);
                horses.push(horse)
                console.log(`What a miracle - ${horse} becomes first.`);
                break;
        }

        line = input.shift();
    }

    console.log(horses.join('->'));
    console.log(`The winner is: ${horses.pop()}`);
}