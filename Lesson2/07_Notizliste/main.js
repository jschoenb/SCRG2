'use strict';

/*window.addEventListener("load",function(){

})*/

window.onload = function () {
    const list = document.querySelector("#notesList");
    const showOpenButton = document.querySelector("#showOpen");
    const showAllButton = document.querySelector("#showAll");

    showAllButton.onclick = function () {
        for(let note of list.children){
            note.style.display = "flex";
        }
    }

    showOpenButton.onclick = function () {
        showOpen(list)
    }

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

function showOpen(list){
    //const listNodes = list.querySelectorAll("li");
    const listNodes = list.children
    for(let note of listNodes){
        note.style.display = note.classList.contains("open")?"flex":"none";
        /*if(note.classList.contains("open")){
            note.style.display = "flex";
        } else {
            note.style.display = "none";
        }*/
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

