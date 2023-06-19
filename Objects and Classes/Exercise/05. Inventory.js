function registerHeroes(input) {
    let heroes = [];
    for (const line of input) {
        let [heroName, level, items] = line.split(' / ');
        let hero = { heroName, level: Number(level), items };
        heroes.push(hero);
    }
    
    heroes.sort((f, s) => f.level - s.level)
        .forEach(h => {
            console.log(`Hero: ${h.heroName}`);
            console.log(`level => ${h.level}`);
            console.log(`items => ${h.items}`);
        })
}

registerHeroes([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]
)