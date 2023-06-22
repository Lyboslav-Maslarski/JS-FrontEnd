function bookShelf(input) {
    let shelves = [];
    for (const line of input) {
        if (line.includes('->')) {
            let [id, genre] = line.split(' -> ');
            let shelf = shelves.find(s => s.id == id);
            if (!shelf) {
                shelf = { id, genre, books: [] };
                shelves.push(shelf);
            }
        } else {
            let [title, bookInfo] = line.split(': ');
            let [author, genre] = bookInfo.split(', ');
            let shelf = shelves.find(s => s.genre == genre);
            if (shelf) {
                shelf.books.push({ title, author });
            }
        }
    }

    shelves.sort((f, s) => s.books.length - f.books.length);

    for (const shelf of shelves) {
        console.log(`${shelf.id} ${shelf.genre}: ${shelf.books.length}`);
        shelf.books.sort((f, s) => f.title.localeCompare(s.title))
            .forEach(b => console.log(`--> ${b.title}: ${b.author}`));
    }
}