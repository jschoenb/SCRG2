class Playlist {
    #name;
    #piecesOfMusic;
    constructor(name) {
        this.#name = name;
        this.#piecesOfMusic = [];
    }

    addPieceOfMusic(piece) {
        this.#piecesOfMusic.push(piece);
    }

    printHTMLTable(parent) {
        for(let piece of this.#piecesOfMusic) {
            piece.printHTMLTable(parent);
        }
    }

    getAlbum(id){
        return this.#piecesOfMusic.find(piece => piece.id == id);
    }
}