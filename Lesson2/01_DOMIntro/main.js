console.log(document);

let btn = document.querySelector("#execute");
console.log(btn);

btn.onclick = function () {
   formatDiv();
   formatElements();
}

function formatElements() {
    let elements = document.querySelectorAll(".c1");
    elements.forEach(element => {
        element.classList.add("font");
    })
    for(let element of elements){
        element.classList.add("font");
    }

}

function formatDiv() {
    let div = document.querySelector("#content");
    /*div.style.backgroundColor = "gray";
    div.style.padding = "5px";
    div.style.width = "300px";
    div.style.border = "2px double blue";*/
    div.classList.add("highlight");
}
