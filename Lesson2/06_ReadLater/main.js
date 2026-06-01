'use strict';



window.onload = function(){
    const links = document.querySelectorAll("a");
    for (let link of links){
        link.onclick = function(e){
            e.preventDefault();
            console.log("Clicked on a link");
            handleLink(e.currentTarget)
        }
    }
}

function handleLink(clickedLink){
    let list = document.querySelector("#list");
    if(!list){
        //we have to create it -> first time
        let hr = document.createElement("hr");
        document.body.appendChild(hr);
        let h1 = document.createElement("h1");
        h1.append("Links to visit");
        document.body.appendChild(h1);
        list = document.createElement("ol");
        list.id= "list";
        list.classList.add("linklist");
        document.body.appendChild(list);
    }
    //code is executed for every link
    const li = document.createElement("li");
    if(list.childNodes.length % 2 === 0){
        li.classList.add("odd");
    }
    const a = document.createElement("a");
    a.href = clickedLink.href;
    a.append(clickedLink.href);
    li.appendChild(a);
    list.appendChild(li);
}