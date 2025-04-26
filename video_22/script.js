// Script instructions go here!!!

// What is a Constructor Function?
// - function used to create an object

function Person(name, age) {
    this.name = name;
    this.age = age;

    this.greet = function () {
        console.log(`Hi! My name is ${this.name}. My age is ${this.age} years old.`);
    }
}

const bob = new Person('Bob', 45);
console.log(bob);
console.log('age', bob.age);
console.log('name', bob.name);
bob.greet();

const alice = new Person('Alice', 25);
alice.greet();

console.log(bob.greet === alice.greet);


// What is a Prototype?
// - the base / parent object that our object inherits from

Person.prototype.greet2 = function () {
    console.log(`Hi! My name is ${this.name}. My age is ${this.age} years old.`);
}
bob.greet2();
alice.greet2();

console.log(bob.greet2 === alice.greet2);


// The CORRECT way
function Student(name, age) {
    this.name = name;
    this.age = age;
}

Student.prototype.greet = function () {
    console.log(`Hi! My name is ${this.name}. My age is ${this.age} years old.`);
}
const joe = new Student('Joe', 18);
const sara = new Student('Sara', 19);
joe.greet();
sara.greet();

console.log(joe.greet === sara.greet);