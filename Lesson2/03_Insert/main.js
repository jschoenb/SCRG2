'use strict';

window.onload = function(){
    createElements();
    testingAfterBefore();
    testingAdjacent();
}

function testingAdjacent(){
    let parent = document.querySelector("#container");
    parent.insertAdjacentHTML("beforebegin","<p>Testing insert adjacent HTML");
    parent.insertAdjacentHTML("afterbegin","<p>Testing insert adjacent HTML");
    parent.insertAdjacentHTML("beforeend","<p>Testing insert adjacent HTML");
    parent.insertAdjacentHTML("afterend","<p>Testing insert adjacent HTML</p>");
}

function testingAfterBefore(){
    let ex = document.querySelector("#exisisting");
    let newP = document.createElement("p");
    newP.textContent = "Trying the after method..."
    ex.before(newP);
}

function createElements(){
    let p = document.createElement("p");
    p.id = "myFirstElement";
    let text = document.createTextNode("Hello World!");
    p.appendChild(text);
    let parent = document.querySelector("#container");
    parent.appendChild(p);

    let p1 = document.createElement("p");
    p1.append("Second paragraph using append");
    p1.append("Some more text");
    p1.textContent += " Add some text"
    parent.prepend(p1);

    parent.innerHTML += "<p>New paragraph using innerHtml</p>";
}

