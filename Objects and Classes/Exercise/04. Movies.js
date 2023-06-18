function moviesInfo(input) {
    let movies = [];

    for (const line of input) {
        if (line.includes('addMovie')) {
            let movieName = line.substring(line.indexOf(' ') + 1);
            let currentMovie = { name: movieName };
            movies.push(currentMovie);

        } else if (line.includes('directedBy')) {
            let movieName = line.substring(0, line.indexOf('directedBy') - 1);
            let currentMovie = movies.find(m => m.name === movieName);
            if (currentMovie !== undefined) {
                let directorName = line.substring(line.indexOf('directedBy') + 11);
                currentMovie['director'] = directorName;
            }

        } else {
            let movieName = line.substring(0, line.indexOf('onDate') - 1);
            let currentMovie = movies.find(m => m.name === movieName);
            if (currentMovie !== undefined) {
                let date = line.substring(line.indexOf('onDate') + 7);
                currentMovie['date'] = date;
            }
        }
    }

    movies.filter(m => m.hasOwnProperty('date') && m.hasOwnProperty('director'))
        .forEach(m => console.log(JSON.stringify(m)));
}