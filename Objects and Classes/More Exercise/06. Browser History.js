function browserHistory(browser, commands) {

    for (const commandLine of commands) {
        let [command, site] = commandLine.split(' ');

        if (command === 'Open') {
            browser['Open Tabs'].push(site);
            browser['Browser Logs'].push(commandLine);
        } else if (command === 'Close') {
            let index = browser['Open Tabs'].indexOf(site);
            if (index >= 0) {
                browser['Open Tabs'].splice(index, 1);
                browser['Recently Closed'].push(site);
                browser['Browser Logs'].push(commandLine);
            }
        } else {
            browser['Open Tabs'] = [];
            browser['Recently Closed'] = [];
            browser['Browser Logs'] = [];
        }
    }
    console.log(browser['Browser Name']);
    console.log('Open Tabs: ' + browser['Open Tabs'].join(', '));
    console.log('Recently Closed: ' + browser['Recently Closed'].join(', '));
    console.log('Browser Logs: ' + browser['Browser Logs'].join(', '));
}