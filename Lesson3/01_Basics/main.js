'use strict';

let car = new Object();
car.type ="PKW";
car.color="green";
car.brand="Audi";
car.drive = function(){
    console.log("Now driving!!!");
}

console.log(car);
car.drive();


let car2 = new Object();
car2.type ="PKW";

console.log(car2);

let car3 = {
    "type":"PKW",
    "color":"green",
    "brand": "VW"
}

class Car {
    #carType;
    #color;
    #brand;
    constructor(carType,color,brand) {
        this.#carType = carType;
        this.#color = color;
        this.#brand = brand;
    }

    drive() {
        console.log(`Car ${this.#color} ${this.#brand} ${this.#carType} is driving`);
    }

    /*getColor() {
        return this.#color;
    }*/

    get color() {
        return this.#color;
    }

    set color(value) {
        this.#color = value;
    }
}

class Owner {
    firstName;
    lastName;
    owns;

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.owns = [];
    }

    addCar(car){
        this.owns.push(car);
    }
}

let car4 = new Car("LWK","black","Volvo");
console.log(car4);
car4.drive();

//car4.getColor()
car4.color = "blue"
console.log(car4.color);
console.log(car4);