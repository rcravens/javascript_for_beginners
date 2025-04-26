// Script instructions go here!!!

/****** THE PROBLEM ******/

/*
Asynchronous Tasks:
    - takes some time to complete (e.g., network, disk, timer, api)
    - does not need to finish immediately
    - doesn't BLOCK the JavaScript engine while it is happening

Examples:
    - setTimeout, setInterval
    - fetching a file
    - making a network request (e.g., api calls...)
    - reading from a database
    - events (e.g., user clicks, key presses...)

IMPORTANT: JavaScript by itself CANNOT read files, send network requests,
or set timers. The ENVIRONMENT (e.g., web browser of node.js) provides
extra systems that JavaScript can ask for help.
    JS: fetch() --> ENV: uses built-in C++/OS APIs
 */

// SYNCHRONOUS & BLOCKING
// function getUserInfo(id) {
//     console.log('getting user info....');
//
//     let start = Date.now();
//     while (Date.now() - start < 3000) {
//     } // blocks for 3s
//
//     console.log('...finished getting user info.');
//     return {id: id, first_name: 'Bob', last_name: 'Cravens'}
// }
//
// console.log('start');
// let user = getUserInfo(1);
// console.log(user);
// console.log('end');

/****** CALLBACKS: THE ORIGINAL SOLUTION ******/

// ASYNCHRONOUS / NON-BLOCKING
// function getUserInfo(id, callback) {
//     console.log('getting user info....');
//
//     setTimeout(function () {
//         console.log('...finished getting user info.');
//         callback({id: id, first_name: 'Bob', last_name: 'Cravens'});
//     }, 3000);
// }
//
// function getAccountInfo(user_id, callback) {
//     console.log('getting account info....');
//
//     setTimeout(function () {
//         console.log('...finished getting account info.');
//         callback({account_id: 123, card_info: 'card_info', monthly_charge: 23.45});
//     }, 3000);
// }
//
// function chargeAccount(account, callback) {
//     console.log('charging account....');
//
//     setTimeout(function () {
//         console.log('...finished charging account.');
//         callback({transaction_id: 'abc_123'});
//     }, 3000);
// }
//
// function updateAccount(account, callback) {
//     console.log('updating account....');
//
//     setTimeout(function () {
//         console.log('...finished updating account.');
//         callback();
//     }, 3000);
// }
//
// // CALLBACK HELL / PYRAMID OF DOOM
//
// console.log('start');
// getUserInfo(1, function (user) {
//     console.log(user);
//     getAccountInfo(user.id, function (account) {
//         console.log(account);
//         chargeAccount(account, function (transaction) {
//             console.log(transaction);
//             updateAccount(account, function () {
//                 console.log('all steps completed');
//             });
//         })
//     })
// });
// console.log('end')

/****** FIRST EVOLUTION: PROMISES (ES6, 2015) ******/

function getUserInfo(id) {
    console.log('getting user info....');
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('...finished getting user info.');
            resolve({id: id, first_name: 'Bob', last_name: 'Cravens'});
        }, 3000);
    });
}

function getAccountInfo(user_id) {
    console.log('getting account info....');
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('...finished getting account info.');
            resolve({account_id: 123, card_info: 'card_info', monthly_charge: 23.45});
        }, 3000);
    });
}

function chargeAccount(account) {
    console.log('charging account....');
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('...finished charging account.');
            resolve({transaction_id: 'abc_123'});
        }, 3000);
    });
}

function updateAccount(account) {
    console.log('updating account....');
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('...finished updating account.');
            resolve();
        }, 3000);
    });
}

// console.log('start');
// getUserInfo()
//     .then(function (user) {
//         console.log('after getUserInfo', user);
//         return getAccountInfo(user.id).then(function (account) {
//             return {user: user, account: account};
//         })
//     })
//     .then(function (data) {
//         console.log('after getAccountInfo', data);
//         return chargeAccount(data.account).then(function (transaction) {
//             return {user: data.user, account: data.account, transaction: transaction};
//         });
//     })
//     .then(function (data) {
//         console.log('after chargeAccount', data);
//         return updateAccount(data.account);
//     })
//     .then(function () {
//         console.log('all steps completed.')
//     });
// console.log('end');

/****** SECOND EVOLUTION: ASYNC/AWAIT (ES2017) ******/

console.log('start');

async function process_account(id) {
    const user = await getUserInfo(id);
    console.log('after getUserInfo', user);

    const account = await getAccountInfo(user.id);
    console.log('after getAccountInfo', account);

    const transaction = await chargeAccount(account);
    console.log('after chargeAccount', transaction);

    const result = await updateAccount(account);
    console.log('after updateAccount');
}

process_account(1);

console.log('end');
