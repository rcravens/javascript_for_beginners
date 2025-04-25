// Script instructions go here!!!



// Parameters

function greet(name)
{
    console.log('Hello,', name, '!');
}
greet('Bob');

function add(a, b)
{
    console.log(a, '+', b, '=', a+b);
}
add(3,2);

// Return Types

function subtract(a, b){
    let diff = a - b;

    console.log('diff', diff);

    return diff;
}

let result = subtract(10, 7);
console.log('result', result);

// Scopes - Global, Function, Block, Lexical

let global_var = 'GLOBAL';
console.log('global context', global_var);

function func()
{
    let func_var = 'FUNC';
    console.log('inside func', global_var);
    console.log('inside func', func_var);
}
func();
// console.log('global context', func_var);

let is_adult = true;
if(is_adult)
{
    let block_var = 'BLOCK';
    console.log('inside if(is_adult)', is_adult);
    console.log('inside if(is_adult)', block_var);
}

// console.log('global context', block_var);

function outer()
{
    let outer_var = 'OUTER';

    function inner()
    {
        console.log('inside inner', outer_var);
        console.log('inside inner', global_var);
    }
    inner();
}
outer();
