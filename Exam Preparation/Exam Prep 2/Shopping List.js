function solve(input) {
    let groceries = [];
    let firstLine = input.shift().split('!');

    for (const product of firstLine) {
        groceries.push(product);
    }

    for (const line of input) {
        if (line === 'Go Shopping!') {
            break;
        }
        let [command, oldName, newName] = line.split(' ');
        let index = groceries.indexOf(oldName);

        if (command === 'Urgent' && index < 0) {
            groceries.unshift(oldName);
        } else if (command === 'Unnecessary' && index >= 0) {
            groceries.splice(index, 1);
        } else if (command === 'Correct' && index >= 0) {
            groceries.splice(index, 1, newName);
        } else if (command === 'Rearrange' && index >= 0) {
            groceries.push(groceries.splice(index, 1));
        }
    }

    console.log(groceries.join(', '));
}

solve(["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"]
)