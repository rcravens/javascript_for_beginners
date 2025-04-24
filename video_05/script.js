// Script instructions go here!!!

let a = 5;
let b = 10;
let c = 'Bob';
let d = 'Cravens';
let e = true;
let f = false;

let x;

// Arithmetic Operators: +, -, *, /, %, **
x = a + b;
console.log('x', x, typeof x);
x = a - b;
console.log('x', x, typeof x);
x = a * b;
console.log('x', x, typeof x);
x = a / b;
console.log('x', x, typeof x);
x = a % b;
console.log('x', x, typeof x);
x = a ** b;
console.log('x', x, typeof x);

// Assignment Operators: =, +=, -=, ++, --
x = a;
console.log('x', x, typeof x);
x = x + 1;
console.log('a', a, typeof a);
console.log('x', x, typeof x);
x += 1; // x = x + 1
console.log('x', x, typeof x);
x++; // x = x + 1
console.log('x', x, typeof x);
x -= 3;
console.log('x', x, typeof x);
x--;
console.log('x', x, typeof x);


// String Operators: +
x = c + ' ' + d;
console.log('x', x, typeof x);

x = a + c;
console.log('x', x, typeof x);
x = a / c;
console.log('x', x, typeof x);


// Comparison Operators: ==, ===, !=, <, >, <=, >=
console.log(a == b);
console.log(a != b);
x = '5';
console.log(x == a);
console.log(x === a);

console.log(a > b);
console.log(a < b);

console.log(c < d);

x = 'bob';
console.log(x === c);
console.log(x == c);
console.log(x < c); // A = 65, B = 66, a = 97, b = 98

// Logical Operators: &&, ||, !
console.log(e, f);
console.log(e || f);
console.log(e && f);
console.log(e && !f);

