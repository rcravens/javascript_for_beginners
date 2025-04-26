// Script instructions go here!!!

const arr = [1, 2, 3, 4, 5];


// Destructuring:
// Array destructuring lets you unpack values from an array into
// distinct variables in a clean and readable way.

// - basic
// const [a, b] = arr;
// console.log(a, b, arr);

// - skipping
// const [, , c] = arr;
// console.log(c, arr);

// - defaults
// const d = [6];
// const [e, f] = d;
// console.log(e, f, d);
// const [g = 2, h = 4] = d;
// console.log(g, h, d);

// - swapping
// let x = 11;
// let y = 55;

// let z = x;
// x = y;
// y = z;
// console.log(x, y);
//
// [x, y] = [y, x];
// console.log(x, y);

// Spread Syntax:
// The spread syntax (...) allows you to expand elements of an array
// (or object) in places where multiple values or elements are expected.

console.log(1, 2, 3, 4, 5);
console.log(...arr); // ...arr [1, 2, 3, 4, 5] ==> 1, 2, 3, 4, 5

// - copying
const num = [1, 2, 3];

const copy = [];
for (let val of num) {
    copy.push(val);
}
console.log(num, copy);

const copy2 = [...num]; // [1, 2, 3]
console.log(num, copy2);

// - combining arrays
const m = [1, 2, 3];
const n = [7, 8, 9];
const combined = [...m, ...n];
console.log(combined);

// - spreading into parameters
function sum(...nums) {
    let total = 0;
    for (let num of nums) {
        total += num;
    }
    return total;
}

console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4, 5, 6));

// - spread in destructuring (...rest)
const [a, b, ...rest] = arr;
console.log(a, b, rest, arr);




