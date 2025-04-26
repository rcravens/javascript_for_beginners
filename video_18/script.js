// Script instructions go here!!!

// What is a closure?
//  - A closure is the combination of a function bundled together (enclosed)
//      with references to its surrounding state (lexical environment / scope).
//  - This means that a closure can "remember" and continue to access
//      variables from its parent or outer scope, even when the parent scope
//      is no longer active

// What is Lexical Scope? and Closure Examples

// Global function
console.log('---------------------- greet');

function greet(name) {
    // name - Function scope

    // say_hello() is an inner function that forms a closure
    return function () {
        console.log(`Hello, ${name}!`);
    }
}

const hi_alice = greet('Alice');
const hi_bob = greet('Bob');

hi_alice();
hi_bob();

console.log('---------------------- counter');

function make_counter() {
    let count = 0;

    return function () {
        count++;
        console.log('Count is', count);
    }
}

const counter1 = make_counter();
counter1();
counter1();
counter1();


const counter2 = make_counter();
counter2();