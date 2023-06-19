function moviesInfo(input) {
    let movies = [];

    for (const line of input) {
        if (line.includes('addMovie')) {
            let movieName = line.split('addMovie ')[1];
            let currentMovie = { name: movieName };
            movies.push(currentMovie);

        } else if (line.includes('directedBy')) {
            let [movieName, directorName] = line.split(' directedBy ');
            let currentMovie = movies.find(m => m.name === movieName);
            if (currentMovie) {
                currentMovie['director'] = directorName;
            }

        } else {
            let [movieName, date] = line.split(' onDate ');
            let currentMovie = movies.find(m => m.name === movieName);
            if (currentMovie) {
                currentMovie['date'] = date;
            }
        }
    }

    movies.filter(m => m.hasOwnProperty('date') && m.hasOwnProperty('director'))
        .forEach(m => console.log(JSON.stringify(m)));
}