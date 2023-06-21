function armiesParse(input) {
    let leaders = [];
    for (const line of input) {
        if (line.includes('arrives')) {
            let leaderName = line.substring(0, line.indexOf('arrives') - 1);
            let leader = { name: leaderName, totalArmyCount: 0, armies: [] };
            leaders.push(leader);
        } else if (line.includes(':')) {
            let [leaderName, armyInfo] = line.split(': ');
            let [armyName, armyCount] = armyInfo.split(', ');
            let currentLeader = leaders.find(l => l.name === leaderName);
            if (currentLeader) {
                armyCount = Number(armyCount);
                currentLeader.totalArmyCount += armyCount;
                let army = { armyName, armyCount };
                currentLeader.armies.push(army);
            }
        } else if (line.includes('+')) {
            let [searchedArmyName, addedCount] = line.split(' + ');
            for (const leader of leaders) {
                for (const army of leader.armies) {
                    if (army.armyName === searchedArmyName) {
                        army.armyCount += Number(addedCount);
                        leader.totalArmyCount += Number(addedCount);
                    }
                }
            }
        } else {
            let leaderName = line.substring(0, line.indexOf('defeated') - 1);
            let leaderIndex = -1;
            for (let i = 0; i < leaders.length; i++) {
                if (leaders[i].name === leaderName) {
                    leaderIndex = i;
                }
            }
            if (leaderIndex >= 0) {
                leaders.splice(leaderIndex, 1);
            }
        }
    }

    leaders = leaders.sort((f, s) => s.totalArmyCount - f.totalArmyCount);

    for (const leader of leaders) {
        console.log(`${leader.name}: ${leader.totalArmyCount}`);
        leader.armies.sort((f, s) => s.armyCount - f.armyCount)
            .forEach(army => console.log(`>>> ${army.armyName} - ${army.armyCount}`));
    }
}