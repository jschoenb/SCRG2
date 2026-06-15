class Song extends PieceOfMusic {
    #album;
    constructor(id,name,interpret,duration) {
        super(id,name,interpret,duration);
    }

    get album() {
        return this.#album;
    }

    set album(album) {
        this.#album = album;
    }
}