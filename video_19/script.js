// Script instructions go here!!!

// Higher-Order Functions?
//  - take functions as parameters
//  - return functions as result

// Functions as Arguments / Parameters
const numbers = [1, 2, 3, 4, 5];
const result = numbers.map(function (val) {
    return val * 2;
});
console.log(numbers, result);

const words = ['a', 'aa', 'aaa', 'aaaa', 'aaaaa', 'aaaaaa'];
const long_words = words.filter(function (word) {
    return word.length > 3;
});
console.log(words, long_words);

// Functions as Return Values
function custom_greeting(greeting) {
    return function (name) {
        console.log(`${greeting}, ${name}!`);
    }
}

const hello = custom_greeting('Hello');
const howdy = custom_greeting('Howdy');
const hey = custom_greeting('Hey');

hello('Bob');
howdy('Ted');
hey('Dana');


// Practical Example: Pub/Sub
//  - subscribe to events (e.g., login)
//      - event_name, callback
//  - publish event when it happens
//      - event_name, event_data
//      - execute callback functions subscribed to event

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

function handle_user_login(evt, data) {
    console.log('handle_user_login', evt, data);
}

function analytics(evt, data) {
    console.log('analytics', evt, data);
}

function logging(evt, data) {
    console.log('logging', evt, data);
}

pub_sub.subscribe('login', logging);
pub_sub.subscribe('login', handle_user_login);
pub_sub.subscribe('login', analytics)


function login() {
    pub_sub.publish('login', {user_id: 5});
}

login();
// console.log(pub_sub);