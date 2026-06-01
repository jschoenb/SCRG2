class PersonList {
    constructor() {
        this.persons = [];
    }

    addPerson(person) {
        this.persons.push(person);
    }

    printHTML(parent){
        for(let p of this.persons){
            p.printHTML(parent);
        }
    }
}