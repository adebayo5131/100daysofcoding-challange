console.log('Starting password manager');

var storage = require('node-persist');
storage.initSync();


//first account created
/* storage.setItemSync('accounts',
[
    {
        userName: 'Adebayo',
        balance: 0
    }
]) */

var accounts= storage.getItemSync('accounts');

//Push on a new account
// accounts.push({

//         userName:'shaina',
//         balance:10

//     }
       
// );

//save using setItemSync
// storage.setItemSync('accounts', accounts)

console.log(accounts);