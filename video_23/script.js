// Script instructions go here!!!

// ES6 Classes: class, constructor, properties, methods

class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hi! My name is ${this.name}. My age is ${this.age} years old.`)
    }
}

const joe = new Student('Joe', 19);
const sara = new Student('Sara', 20);
joe.greet();
sara.greet();

console.log(joe);