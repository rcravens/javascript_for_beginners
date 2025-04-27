// Script instructions go here!!!

// What is Inheritance?
//  - Animal (data & behavior)
//  - Dog inherit (data & behavior) from Animal

// Examples: class, constructor, extends, super

class Animal {
    constructor(name) {
        if (new.target === Animal) {
            throw new Error('Cannot implement Animal!');
        }

        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    speak() {
        console.log(`${this.name} barks!`)
    }
}

class LargeDog extends Dog {
    constructor(name, breed, weight_in_lbs) {
        super(name, breed);
        this.weight = weight_in_lbs;
    }

    speak() {
        console.log(`${this.name} BARKS!`)
    }
}

// const animal = new Animal('Spot');
// animal.speak();

const dog = new Dog('Bruiser', 'Chihuahua');
dog.speak();

const large_dog = new LargeDog('Thor', 'Great Dane', 150);
large_dog.speak();