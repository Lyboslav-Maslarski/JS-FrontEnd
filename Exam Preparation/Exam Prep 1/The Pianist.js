function solve(input) {
    let numberOfPieces = input.shift(1);

    let pieces = {};

    for (let i = 0; i < numberOfPieces; i++) {
        let [piece, composer, key] = input.shift(1).split('|');
        pieces[piece] = { composer, key };
    }

    let command = input.shift(1);
    while (command !== 'Stop') {
        let [_command, piece, composer, key] = command.split('|');
        let foundPiece = pieces[piece];
        let result;

        if (command.includes('Add')) {
            if (!foundPiece) {
                pieces[piece] = { composer, key };
                result = `${piece} by ${composer} in ${key} added to the collection!`;
            } else {
                result = `${piece} is already in the collection!`;
            }
        } else if (command.includes('Remove')) {
            if (foundPiece) {
                delete pieces[piece];
                result = `Successfully removed ${piece}!`;
            } else {
                result = `Invalid operation! ${piece} does not exist in the collection.`;
            }
        } else {
            let newKey = composer;
            if (foundPiece) {
                pieces[piece].key = newKey;
                result = `Changed the key of ${piece} to ${newKey}!`
            } else {
                result = `Invalid operation! ${piece} does not exist in the collection.`;
            }
        }

        console.log(result);
        command = input.shift(1);
    }

    Object.entries(pieces).forEach(([k, v]) => {
        console.log(`${k} -> Composer: ${v.composer}, Key: ${v.key}`);
    })
}