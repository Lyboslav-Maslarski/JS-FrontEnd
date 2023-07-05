function solve(input) {
    let numberOfPieces = input.shift();

    let pieces = {};

    for (let i = 0; i < numberOfPieces; i++) {
        let [piece, composer, key] = input.shift().split('|');
        pieces[piece] = { composer, key };
    }

    let command = input.shift();
    while (command !== 'Stop') {
        let [_command, piece, composer, key] = command.split('|');
        let result;

        if (command.includes('Add')) {
            if (!pieces.hasOwnProperty(piece)) {
                pieces[piece] = { composer, key };
                result = `${piece} by ${composer} in ${key} added to the collection!`;
            } else {
                result = `${piece} is already in the collection!`;
            }
        } else if (command.includes('Remove')) {
            if (pieces.hasOwnProperty(piece)) {
                delete pieces[piece];
                result = `Successfully removed ${piece}!`;
            } else {
                result = `Invalid operation! ${piece} does not exist in the collection.`;
            }
        } else {
            let newKey = composer;
            if (pieces.hasOwnProperty(piece)) {
                pieces[piece].key = newKey;
                result = `Changed the key of ${piece} to ${newKey}!`
            } else {
                result = `Invalid operation! ${piece} does not exist in the collection.`;
            }
        }

        console.log(result);
        command = input.shift();
    }

    Object.entries(pieces).forEach(([k, v]) => {
        console.log(`${k} -> Composer: ${v.composer}, Key: ${v.key}`);
    })
}