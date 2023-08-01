function solve(input) {
    let initialTasks = Number(input.shift());
    let tasks = input.splice(0, initialTasks);

    const assignees = tasks.reduce((acc, current) => {
        let [assignee, taskId, title, status, points] = current.split(':');
        if (!acc.hasOwnProperty(assignee)) {
            acc[assignee] = [];
        }
        acc[assignee].push({ taskId, title, status, points: Number(points) });
        return acc;
    }, {});


    let commands = {
        'Add New': ([assignee, taskId, title, status, points]) => {
            if (assignees.hasOwnProperty(assignee)) {
                assignees[assignee].push({ taskId, title, status, points: Number(points) });
            } else {
                console.log(`Assignee ${assignee} does not exist on the board!`);
            }
        },
        'Change Status': ([assignee, taskId, newStatus]) => {
            if (assignees.hasOwnProperty(assignee)) {
                let task = assignees[assignee].find(t => t.taskId === taskId);
                if (!task) {
                    console.log(`Task with ID ${taskId} does not exist for ${assignee}!`);
                } else {
                    task.status = newStatus;
                }
            } else {
                console.log(`Assignee ${assignee} does not exist on the board!`);
            }
        },
        'Remove Task': ([assignee, index]) => {
            if (assignees.hasOwnProperty(assignee)) {
                let tasks = assignees[assignee];
                if (index < 0 || index >= tasks.length) {
                    console.log('Index is out of range!');
                } else {
                    tasks.splice(Number(index), 1);
                }
            } else {
                console.log(`Assignee ${assignee} does not exist on the board!`);
            }
        }
    };

    for (const line of input) {
        let [command, ...data] = line.split(':');
        commands[command](data);
    }

    let toDoPts = calculatePoints('ToDo');
    let inProgressPts = calculatePoints('In Progress');
    let codeReviewPts = calculatePoints('Code Review');
    let donePts = calculatePoints('Done');

    console.log(`ToDo: ${toDoPts}pts`);
    console.log(`In Progress: ${inProgressPts}pts`);
    console.log(`Code Review: ${codeReviewPts}pts`);
    console.log(`Done Points: ${donePts}pts`);

    if (donePts >= (toDoPts + inProgressPts + codeReviewPts)) {
        console.log('Sprint was successful!');
    } else {
        console.log('Sprint was unsuccessful...');
    }

    function calculatePoints(status) {
        return Object.values(assignees).flat()
            .filter(t => t.status === status)
            .reduce((acc, task) => acc += task.points, 0);
    }
}
solve([
    '5',
    'Kiril:BOP-1209:Fix Minor Bug:ToDo:3',
    'Mariya:BOP-1210:Fix Major Bug:In Progress:3',
    'Peter:BOP-1211:POC:Code Review:5',
    'Georgi:BOP-1212:Investigation Task:Done:2',
    'Mariya:BOP-1213:New Account Page:In Progress:13',
    'Add New:Kiril:BOP-1217:Add Info Page:In Progress:5',
    'Change Status:Peter:BOP-1290:ToDo',
    'Remove Task:Mariya:1',
    'Remove Task:Joro:1',
])