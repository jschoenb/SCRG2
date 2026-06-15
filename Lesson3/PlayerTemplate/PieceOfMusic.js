class PieceOfMusic {
    #id;
    #title;
    #interpret;
    #duration;
    tr;

    constructor(id, title, interpret,duration) {
        if(new.target === PieceOfMusic) {
            throw Error("Piece of music is abstract!");
        }
        this.#id = id;
        this.#title = title;
        this.#interpret = interpret;
        this.#duration = duration;
    }

    get id() {
        return this.#id;
    }

    get title() {
        return this.#title;
    }

    get interpret() {
        return this.#interpret;
    }

    get duration() {
        return this.#duration;
    }

    set duration(duration) {
        this.#duration = duration;
    }

    printHTMLTable(parent) {
        this.tr = document.createElement("tr");
        this.tr.dataset.id = this.#id;
        this.tr.innerHTML = `
            <td>${this.#title}</td>
            <td>${this.#interpret}</td>
            <td>${this.#duration}</td>
         `;
        parent.appendChild(this.tr);
    }
}