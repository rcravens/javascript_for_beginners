// Script instructions go here!!!

// What is Recursion?
//  - function calls itself

// Examples

// 4! = 4*3*2*1 = 4 * 3! = 4 * 3 * 2!
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

const number = 4;
const factorial_value = factorial(number);
console.log('number', number, 'factorial', factorial_value);


function countdown(n) {
    if (n < 0) {
        return;
    }
    console.log(n)
    countdown(n - 1);
}

countdown(5);


function my_sort(arr, n = arr.length) {

    if (n === 1) {
        return arr;
    }

    // bubble up the max value to the end of the unsorted part
    for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            // Use destructuring to swap values
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        }
    }

    // Now we are sorted above n - 1...recursively bubble the next largest
    return my_sort(arr, n - 1);
}

const data = [5, 1, 4, 2, 8];
const copy = [...data];
sorted_data = my_sort(copy);
console.log(data, sorted_data);
