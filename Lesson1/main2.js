/*function print(){
    console.log("Print with no parameter");
}*/

/*function print(name = "Musterfrau",...titles){
    name = name.toUpperCase();
    //console.log(arguments);
    //console.log(name);
    //console.log(titles);
    let nameWithTitles = "";
    //print titles followed by name
    /*for (let i=0; i<titles.length; i++){
        console.log(titles[i]);
        nameWithTitles += titles[i] + " ";
    }*/
    /*for (let val of titles){
        console.log(val);
        nameWithTitles += val + " ";
    }
    nameWithTitles = titles.join(" ");
    nameWithTitles += " " +name;
    return nameWithTitles;
}

let n = "Hannes Schönböck";

//call by value
n = print(n,"FH Prof","DI (FH)","Dr");
console.log(n);*/

//call by reference


function minimum() {
    let numbers = [];
    let input = prompt("Please enter a number");

    // (quit if -1); if it is not a number -> quit, empty string -> quit, cancel quit, <0 -> quit
    while (!isNaN(input) && input != null && input.trim() !== "" && Number(input) >= 0) {
        numbers.push(Number(input));
        input = prompt("Please enter a number");
    }

    if (numbers.length === 0) {
        return -1;
    }

    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }

    return min;
}

console.log(minimum());