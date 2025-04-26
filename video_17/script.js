// Script instructions go here!!!

// Why?
//  - JavaScript stops execution when an unhandled error occurs
//  - Allows the developer choices (notify user, carry on with limited features)

// When?
//  - Limited Resources
//  - Network Calls (api, database, ...)
//  - Code that "Throws" (your own, modules, libraries...)

// try/catch
// const a = 5;
//
// let c = null;
// try {
//     c = a / b;
// } catch (e) {
//     console.log(e.toString());
// }
// console.log(a, c);

// Throwing your own errors
function sketchy_function() {
    if (Math.random() < 0.5) {

        const random_choice = Math.floor(Math.random() * 3);

        switch (random_choice) {
            case 0:
                throw new TypeError('Sketch Function Failed');
            case 1:
                throw new ReferenceError('Sketch Function Failed')
            default:
                throw new Error('Sketchy Function Failed');
        }

    }
}

// try/catch/finally
console.log('outside');
try {
    console.log('just before');
    sketchy_function()
    console.log('just after');
} catch (e) {
    console.log('inside catch');
    console.log(e.toString());
    if (e instanceof TypeError) {
        console.log('special type error code');
    } else if (e instanceof ReferenceError) {
        console.log('special reference error code');
    }
} finally {
    console.log('inside finally');
}
console.log('here we are');



