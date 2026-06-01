'use strict';

window.onload = function(){
    let addBtn = document.querySelector("#add");
    /*addBtn.addEventListener("click", function(){

    })*/
    addBtn.onclick = function(){
        addElement();
    }

    let removeAllBtn = document.querySelector("#removeall");
    removeAllBtn.onclick = function(){
        removeAll();
    }

    let removeBtn = document.querySelector("#remove");
    removeBtn.onclick = function(){
        removeByType();
    }
}

function removeByType(){
    let elementType = document.querySelector("select").value;
    let textarea = document.querySelector("#textarea");
    let elements = textarea.querySelectorAll(elementType);

    /*elements.forEach(function(el){
        el.remove();
    })*/
    /*for(let el of elements){
        el.remove();
    }*/
    for(let i = elements.length - 1; i >= 0; i--){
        textarea.removeChild(elements[i]);
    }
}

function removeAll(){
    let textarea = document.querySelector("#textarea");
    //textarea.innerHTML = '';
    textarea.replaceChildren();
    /*while(textarea.hasChildNodes()){
        textarea.removeChild(textarea.firstChild);
    }*/

    //would delete the whole container
    //textarea.remove();
}

function addElement(){
    //create the selected tag (either h1 -h3, or p, or hr)
    let elementType = document.querySelector("select").value
    let element = document.createElement(elementType);

    if(elementType !=="HR"){
        let text = document.texteditorForm.content.value;
        //let t = document.createTextNode(text);
        //element.appendChild(t);
        element.append(text);
    }

    element.onclick = function(e){
       //deleteElement(element);
       //deleteElement(this);
       //console.log(e);
       deleteElement(e.currentTarget);
       //deleteElement(e.target)
    }

    let textarea = document.querySelector("#textarea");
    textarea.appendChild(element);
}

function deleteElement(elementToDelete){
    if(confirm("Are you sure you want to delete?")){
        elementToDelete.remove();
    }
}