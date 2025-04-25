// Script instructions go here!!!


// Functions Can Be Assigned To Variables
const say_hi = function()
{
    console.log('Hi from the say_hi function');
}
// say_hi();

// Passing Functions As Arguments
function whisper(message)
{
    console.log(message.toLowerCase());
}
// whisper('Hello from Bob');

function shout(message)
{
    console.log(message.toUpperCase());
}
// shout('Hello from Bob');

function speak(message, func)
{
    func(message);
}
// speak('Hello from Bob', shout);


// Simple Callback Example

function process(a, b, success_callback, failure_callback)
{
    let sum = a + b;

    if(sum > 10)
    {
        success_callback(sum);
    }
    else
    {
        failure_callback(sum);
    }
}

process(5, 3,
    function(sum)
                    {
                        console.log('SUCCESS the sum is', sum);
                    },
    function(sum)
                    {
                        console.log('FAILURE the sum is', sum);
                    }
);