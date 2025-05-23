// Script instructions go here!!!

// Array in Arrays:
let board = [
    ['O', ' ', 'O'],
    [' ', 'X', 'O'],
    ['X', 'X', 'X']
];
console.log(board)

for (let row of board) {
    console.log(row);
    for (let col of row) {
        console.log(col);
    }
}

// Objects in Objects
let account = {
    id: 1234,
    person: {
        name: 'Bob',
        age: 45
    }
};
console.log(account);
console.log(account.person.name);


// Objects in Arrays: Creating, Accessing, Enumerating

let student1 = {name: 'Alice', grade: 98};
let student2 = {name: 'Joe', grade: 85};

let students1 = [student1, student2];

let students2 = [];
students2.push(student1);
students2.push(student2);

let students = [
    {name: 'Alice', grade: 98},
    {name: 'Joe', grade: 85},
];

console.log(students);

console.log(students[0]);
console.log(students[1]);

students[0].grade = 100;

console.log(students[0].name);
console.log(students[0].grade);

let total = 0;
for (let student of students) {
    total += student.grade;
}
let avg = total / students.length;
console.log('avg', avg);


// Array in Objects: Creating, Accessing, Enumerating
students = [
    {name: 'Alice', grades: [98, 92]},
    {name: 'Joe', grades: [88, 89]},
];

console.log(students);

console.log(students[0].grades[0]);
console.log(students[0].grades[1]);

for (let student of students) {
    let total = 0;
    for (let grade of student.grades) {
        total += grade;
    }
    student.avg = total / student.grades.length;
}
console.log(students);