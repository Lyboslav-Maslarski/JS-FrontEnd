function uniqueArrays(input) {
    let uniqueArrays = [];
    for (let i = 0; i < input.length; i++) {
        let firstArr = JSON.parse(input[i]);

        for (let j = i + 1; j < input.length; j++) {
            let secondArr = JSON.parse(input[j]);
            if (firstArr.length !== secondArr.length) {
                continue;
            }
            let arraysAreTheSame = true;
            for (let k = 0; k < firstArr.length; k++) {
                let element = firstArr[k];
                let found = secondArr.includes(element);
                if (!found) {
                    arraysAreTheSame = false;
                }
            }
            if (arraysAreTheSame) {
                input.splice(j, 1);
                    j--;
            }
        }
    }

    input.sort((f, s) => f.length - s.length).forEach(arr => {
        arr = JSON.parse(arr);
        arr.sort((f, s) => s - f);
        console.log(arr);
    });

}

uniqueArrays(["[7.14, 7.180, 7.339, 80.099]",
"[7.339, 80.0990, 7.140000, 7.18]",
"[7.339, 7.180, 7.14, 80.099]"]

)