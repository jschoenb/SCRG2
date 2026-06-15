class Album extends PieceOfMusic {
    #songs

    constructor(id,title,interpret) {
        super(id,title,interpret,0);
        this.#songs = [];
    }

    addSong(song) {
        this.#songs.push(song);
        song.album = this;
        this.duration += song.duration;
    }

    printHTMLTable(parent) {
        super.printHTMLTable(parent);
        document.querySelector("#albums").
        insertAdjacentHTML("beforeend",
            `<option value="${this.id}">${this.title}</option>`)
        this.showDetails();
    }

    showDetails() {
        this.tr.onclick = ()=>{
            let details = document.querySelector("#details");
            details.replaceChildren();
            for(let song of this.#songs){
                song.printHTMLTable(details);
            }
        }
    }

    updateDuration() {
        let td = this.tr.querySelector("td:last-child");
        td.innerText = this.duration;
    }
}