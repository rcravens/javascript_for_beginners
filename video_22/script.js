// Script instructions go here!!!

// What is a Constructor Function?
// - function used to create an object

function Person(name, age) {
    this.name = name;
    this.age = age;

    // Not what you want to do!!!!!
    this.greet = function () {
        console.log(`Hi! My name is ${this.name}. My age is ${this.age} years old.`)
    }
}

const bob = new Person('Bob', 45);
const alice = new Person('Alice', 25);
bob.greet();
alice.greet();

console.log(bob.greet === alice.greet);

// What is a Prototype?
// - the base / parent object that our object inherits from
console.log(bob);

Person.prototype.greet2 = function () {
    console.log(`Hi! My name is ${this.name}. My age is ${this.age} years old.`)
}
bob.greet2();
alice.greet2();

console.log(bob.greet2 === alice.greet2);


// THE CORRECT WAY
function Student(name, age) {
    this.name = name;
    this.age = age;
}

Student.prototype.greet = function () {
    console.log(`Hi! My name is ${this.name}. My age is ${this.age} years old.`)
}

const joe = new Student('Joe', 19);
const sara = new Student('Sara', 20);
joe.greet();
sara.greet();