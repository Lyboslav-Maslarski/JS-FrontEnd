function armiesParse(input) {
    let leaders = [];
    for (const line of input) {
        if (line.includes('arrives')) {
            let leaderName = line.substring(0, line.indexOf('arrives') - 1);
            let leader = { name: leaderName, armyCount: 0, armies: [] };
            leaders.push(leader);
        } else if (line.includes(':')) {
            let [leaderName, armyInfo] = line.split(': ');
            let [armyName, armyCount] = armyInfo.split(', ');
            let currentLeader = leaders.find(l => l.name === leaderName);
            if (currentLeader) {
                currentLeader.armyCount += Number(armyCount);
                let army = { armyName, armyCount };
                currentLeader.armies.push(army);
            }
        } else {
            let [armyName, addedCount] = line.split(' + ');
            
        }
    }
}

armiesParse(['Rick Burr arrives',
    'Fergus: Wexamp, 30245',
    'Rick Burr: Juard, 50000',
    'Findlay arrives',
    'Findlay: Britox, 34540',
    'Wexamp + 6000',
    'Juard + 1350',
    'Britox + 4500',
    'Porter arrives',
    'Porter: Legion, 55000',
    'Legion + 302',
    'Rick Burr defeated',
    'Porter: Retix, 3205'])