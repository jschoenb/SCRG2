function hello(){
    document.write('Hello World!');
    console.error('Hello World!');
    alert('Hello World!');
}

//hello();


function dynamicTyping(){
    //Variable definieren
    let x;
   console.log(typeof x);
   console.log(x);
   x = 17;
    console.log(typeof x);
    console.log(x);

    x = "Hannes";
    console.log(typeof x);
    console.log(x);

    let a = 17;
    let b ="9";

    console.log(isNaN(b));
    Number(b);

    let result = a + b;
    console.log(typeof result);
    console.log(result);
}

//dynamicTyping();

function add(){
    let input1 = prompt("Enter a first number");
    while(isNaN(input1) || input1==null || input1.trim() ===""){
        console.error('Please insert two numbers');
        input1 = prompt("Enter a first number");
    }


    let input2 = prompt("Enter a second number");
    while(isNaN(input2)  || input2==null || input2.trim() ===""){
        console.error('Please insert two numbers');
        input2 = prompt("Enter a first number");
    }

    /*while(isNaN(input1) || isNaN(input2)){
        console.error('Please insert two numbers');
        input1 = prompt("Enter a first number");
        input2 = prompt("Enter a second number");
    }*/
    let result = Number(input1) + Number(input2);
    console.log(result);
    return result;
}

//let result = add();

function calcSum() {
    let sum = 0;
    let input = prompt("Please enter a number");
    //(quit if -1); if it is not a number -> quit, empty string -> quit, cancel quit,  <0 - quit
    while(!isNaN(input) && input!=null && input.trim() !=="" && Number(input) >= 0){
        console.log("in while loop");
        sum += Number(input);
        input = prompt("Please enter a number");
    }
    return sum;
}

/*let res = calcSum();
let res2 = calcSum();
console.log(res + res2);*/


function minimum() {
    let min =-1;
    let input = prompt("Please enter a number");
    //(quit if -1); if it is not a number -> quit, empty string -> quit, cancel quit,  <0 - quit
    while(!isNaN(input) && input!=null && input.trim() !=="" && Number(input) >= 0){
        if(min ===-1 ||Number(input) < min){
            min = Number(input)
        }
        input = prompt("Please enter a number");
    }
    return min;
}
