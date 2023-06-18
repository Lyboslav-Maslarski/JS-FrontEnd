function createSongs(input) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let numberOfSongs = input.shift();
    let playlist = input.pop();
    let songs = [];

    for (const line of input) {
        let [typeList, name, time] = line.split('_');
        let song = new Song(typeList, name, time);
        songs.push(song);
    }

    songs.filter(playlist === 'all'
        ? s => true
        : s => s.typeList === playlist)
        .forEach(s => console.log(s.name));
}