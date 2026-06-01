'use strict';

window.onload = function() {
    let personList = new PersonList();
    let ul = document.querySelector("#personList");
    fetch("studies.json")
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data);
            for(let person of data.persons){
                let p = new Person (person.firstName, person.lastName);
                personList.addPerson(p);
            }
            personList.printHTML(ul);
        })
}