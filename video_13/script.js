// Script instructions go here!!!

// What is an Object?
//  - datatype
//  - list of key/value pairs

// Defining an Object
let empty = {};
let person = {
    first_name: 'Bob',
    last_name: 'Cravens',
    age: 45,
    is_admin: true
};

// Accessing Properties
console.log(empty)
console.log(person);

console.log(person.first_name);
console.log(person['first_name']);

console.log(person.abc);
console.log(person['abc']);

// Adding Properties
let car = {};
car.num_doors = 4;
car.year = 2016;
car.manufacturer = 'Ford';

car.year = 2015;

// Deleting Properties
delete car.year;

console.log(car);

// Enumerating Properties
for(let key in person)
{
    if(person.hasOwnProperty(key))
    {
        console.log(key, person[key]);
    }
}