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
//
// const [e, f] = d;
// console.log(d, e, f);
//
// const [g = 2, h = 4] = d;
// console.log(d, g, h);

// - swapping
// let x = 11;
// let y = 55;

// let z = x;
// x = y;
// y = z;
// console.log(x, y, z);

// [x, y] = [y, x];
// console.log(x, y);

// Spread Syntax:
// The spread syntax (...) allows you to expand elements of an array
// (or object) in places where multiple values or elements are expected.

// - copying
const num = [1, 2, 3];

const copy = [];
for (let val of num) {
    copy.push(val);
}
console.log(num, copy);

const copy2 = [...num]; // [1, 2, 3]
console.log(num, copy2);

console.log(...num);
console.log(1, 2, 3);

// - combining arrays
const m = [1, 2, 3];
const n = [7, 8, 9];
const combined = [...m, ...n];
console.log(m, n, combined);

// - spreading into parameters
function add(a, b) {
    return a + b;
}

const max_val = Math.max(...combined);
console.log('max', max_val);

// - spread in destructuring (...rest)
[s, t] = combined;
console.log(s, t);

[j, k, ...l] = combined;
console.log(j, k, l);





