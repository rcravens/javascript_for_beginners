// Script instructions go here!!!

// Why?

// When?

// try/catch
// const a = 5;
//
// let c = null;
// try {
//     c = a / b;
// } catch (e) {
//     console.log('CATCH', e.toString());
// }
//
// console.log(a, c);


function sketch_function() {
    if (Math.random() > 0.5) {
        throw new Error('Sketchy Function Failed');
    }
}

// try {
//     sketch_function();
// } catch (e) {
//     if (e instanceof TypeError) {
//         console.log('CATCH INSTANCE TYPE ERROR', e.toString());
//     } else if (e instanceof ReferenceError) {
//         console.log('CATCH INSTANCE REFERENCE ERROR', e.toString());
//     } else {
//         console.log('CATCH ', e.toString());
//     }
// }

// try/catch/finally
try {
    console.log('BEFORE');
    sketch_function();
    console.log('AFTER');
} catch (e) {
    console.log('CATCH ', e.toString());
} finally {
    console.log('FINALLY');
}

// Throwing your own errors