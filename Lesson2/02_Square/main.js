'use strict';

//opnload - Event that is thrown after the DOM Tree has been loaded
window.onload = function(){
    let btn = document.querySelector("#square");
    btn.onclick = function(){
        input();
    }
}

function input(){
    let inputField = document.querySelector("input");
    let number = inputField.value;
    console.log(number);
    if(isNaN(number)){
        console.error("Input must be a number");
        inputField.style.border = "2px solid red";
    } else {
        inputField.value = number * number;
        inputField.style.border = "2px solid green";
    }
}