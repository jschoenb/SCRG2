class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    printHTML (parent) {
        let li = document.createElement("li");
        li.append(`${this.firstName} ${this.lastName}`);
        parent.appendChild(li);
    }
}