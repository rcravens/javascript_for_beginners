// Script instructions go here!!!

// Lexical Scope

let global_var = 'GLOBAL';
console.log(global_var);

function test() {
    let function_var = 'FUNCTION';
    console.log(global_var);
    console.log(function_var);
}

// console.log(function_var);

if (1 + 3 > 2) {
    let block_var = 'BLOCK';
    console.log(global_var);
    // console.log(function_var);
    console.log(block_var);
}

// console.log(block_var);

function math() {
    let pi = 3.14;

    function area_of_circle(radius) {
        return pi * radius ** 2;
    }

    let area = area_of_circle(2);
    console.log('area', area);
}

math();


// Closures
function greet(name) {
    return function () {
        console.log(`Hello ${name}!`);
    }
}

const hi_bob = greet('Bob');
const hi_kai = greet('Kai');

hi_bob();
hi_kai();

// Practical Examples

function make_counter() {
    let count = 0;

    return function () {
        count++;
        console.log('Count is:', count);
    }
}

const counter = make_counter();
counter();
counter();
counter();

const counter2 = make_counter();
counter2();