// Script instructions go here!!!

// What is an Array?
// - another data type
// - order list of other variables

// Creating Arrays
let empty = [];
let colors = ['red', 'green', 'blue'];
let numbers = [6, 3, 9];
let person = ['Bob', 'Cravens', 45];

// Accessing Array Elements
// console.log('colors', colors);
//
// console.log('first element', colors[0])
// console.log('second element', colors[1])
// console.log('third element', colors[2])
// console.log('fourth element', colors[3])


// Common Methods: push, pop, shift, unshift, length, indexOf

// push - adds an element to the end of the array
// pop - removes the last element in the array
// shift - removes the first element in the array
// unshift - adds an element to the beginning of the array

empty.push('john', 'bob', 'joe', 'dana', 'Bob');

let index = empty.indexOf('bob', 2);
if(index !== -1)
{
    console.log('found element', empty[index]);
}
else
{
    console.log('element not found');
}

console.log(empty, index);
