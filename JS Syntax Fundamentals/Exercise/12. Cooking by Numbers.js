function solve(num, ...commands) {
    num = Number(num);
    for (const command of commands) {
        switch (command) {
            case 'chop':
                num = num / 2;
                break;
            case 'dice':
                num = Math.sqrt(num);
                break;
            case 'spice':
                num = num + 1;
                break;
            case 'bake':
                num = num * 3;
                break;
            case 'fillet':
                num -= num * 0.2;
                break;
        }

        console.log(num);
    }
}