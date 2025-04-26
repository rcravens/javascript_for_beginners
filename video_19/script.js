// Script instructions go here!!!

// Higher-Order Functions?
//  - take functions as parameters
//  - return functions as result

// Functions as Arguments / Parameters

// const numbers = [1, 2, 3, 4];
// const result = numbers.map(function (number) {
//     return number * 2;
// });
// console.log(numbers, result);
//
// const words = ['short', 'medium', 'extra-long'];
// const result2 = words.filter(function (w) {
//     return w.length > 5;
// });
// console.log(words, result2);

// Functions as Return Values

// function custom_greeting(greeting) {
//     return function (name) {
//         console.log(`${greeting}, ${name}!`);
//     }
// }
//
// const hello = custom_greeting('Hello');
// const howdy = custom_greeting('Howdy');
// const hey = custom_greeting('Hey');
//
// hello('Bob');
// howdy('Ted');
// hey('Dana');

function create_pub_sub() {
    const subscribers = {};

    return {
        subscribe(event_name, callback) {
            if (!subscribers[event_name]) {
                subscribers[event_name] = [];
            }
            subscribers[event_name].push(callback);
        },
        publish(event_name, data) {
            const event_subs = subscribers[event_name] || [];

            event_subs.forEach(function (callback) {
                callback(event_name, data);
            })
        }
    };
}

const pub_sub = create_pub_sub();

// console.log(pub_sub);


function handle_user_login(evt, data) {
    console.log('handle_user_login', evt, data);
}

function analytics(evt, data) {
    console.log('analytics', evt, data);
}

function login() {
    // after login
    pub_sub.publish('login', {user_id: 5})
}

pub_sub.subscribe('login', handle_user_login);
pub_sub.subscribe('login', analytics);

login();


