// Script instructions go here!!!

// What is Recursion?
//  - function calls itself

// Examples


// Count Down Timer
// 5 --> 4 --> 3 --> 2 --> 1 --> blast off
console.log('------------ COUNT DOWN -----------------');

function countdown(n) {
    if (n < 1) {
        console.log('blast off');
        return;
    }
    console.log(n);
    countdown(n - 1);
}

countdown(5);


// Factorial
// 4! = 4 x 3 x 2 x 1 = 24
// 4! = (4) x 3! = (4 x 3) x 2! = (4 x 3 x 2) x 1!
console.log('------------ FACTORIAL -----------------');

function factorial(n) {
    if (n === 1) {
        return 1;
    }
    return n * factorial(n - 1)
}

let answer = factorial(4);
console.log('4!=', answer);

// Sort
// [9, 8, 7, 6, 5], 5 elements
// pass #1(n=5): [9, 8, 7, 6, 5] -> [8, 9, 7, 6, 5] -> [8, 7, 9, 6, 5] -> [8, 7, 6, 9, 5] -> [8, 7, 6, 5, 9]
// pass #2(n=4): [8, 7, 6, 5, 9] -> [7, 8, 6, 5, 9] -> [7, 6, 8, 5, 9] -> [7, 6, 5, 8, 9]
// pass #3(n=3): [7, 6, 5, 8, 9] -> [6, 7, 5, 8, 9] -> [6, 5, 7, 8, 9]
// pass #4(n=2): [6, 5, 7, 8, 9] -> [5, 6, 7, 8, 9]
// pass #5(n=1): [5, 6, 7, 8, 9]
console.log('------------ SORT -----------------');

function my_sort(arr, n) {
    if (n === 1) {
        return;
    }

    for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            // destructuring
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        }
    }

    my_sort(arr, n - 1);
}

let data = [9, 8, 7, 6, 5];
let copy = [...data];
console.log(data);
my_sort(data, data.length);
console.log(copy, data);
