'use strict';

/*window.addEventListener("load",function(){

})*/

window.onload = function () {
    const list = document.querySelector("#notesList");

    list.onclick = function (e) {
        console.log(e.target);
        console.log(e.currentTarget);
        openCloseNote(e.target);
    }

    const addButton = document.querySelector("#addNote");

    addButton.onclick = function (e) {
        add(list);
    }
}

function openCloseNote(button) {
    if(button.classList.contains("toggleStatus")) {
        const note = button.closest("li");
        if(note.classList.contains("open")) {
            note.classList.replace("open","closed");
            note.querySelector(".toggleStatus").textContent ="Öffnen";
        } else{
            note.classList.replace("closed","open");
            note.querySelector(".toggleStatus").textContent ="Schließen";
        }
    }
}

function add(list) {
    const title = document.querySelector("#notesTitle").value.trim();
    const description = document.querySelector("#notesDescription").value.trim();

    const note = document.createElement("li");
    note.classList.add("note","open");
    let html = `
            <span>
                <strong>${title}</strong> - ${description}
            </span>
            <button class="toggleStatus">Schließen</button>
    `;
    note.innerHTML = html;

    /*note.querySelector(".toggleStatus").onclick = function () {
        if(note.classList.contains("open")) {
            note.classList.replace("open","closed");
            note.querySelector(".toggleStatus").textContent ="Öffnen";
        } else{
            note.classList.replace("closed","open");
            note.querySelector(".toggleStatus").textContent ="Schließen";
        }
    }*/
    list.prepend(note);
    document.querySelector("#notesTitle").value = "";
    document.querySelector("#notesDescription").value="";
}

