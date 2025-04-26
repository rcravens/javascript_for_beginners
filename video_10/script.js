// Script instructions go here!!!


// Functions Can Be Assigned To Variables
const say_hi = function () {
    console.log('Hi from the say_hi function');
}
say_hi();

// Passing Functions As Arguments
function whisper(message) {
    console.log(message.toLowerCase());
}

// whisper('ABC');

function shout(message) {
    console.log(message.toUpperCase());
}

// shout('abc');

function speak(message, func) {
    func(message);
}

speak('Hello', whisper);
speak('go away', shout);

// Simple Callback Example

function process(a, b, success_callback, failure_callback) {
    let sum = a + b;
    if (sum > 10) {
        success_callback(sum);
    } else {
        failure_callback(sum);
    }
}

function success(sum) {
    console.log('SUCCESS', sum);
}

function error(sum) {
    console.log('ERROR', sum);
}

process(2, 30, success, error);
process(2, 3, success, error);