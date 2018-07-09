// Acoount array
var accounts=[];

// A function that creates an account by receiveing aand account object
function createaccount(account)
{
   //push an account into account array
   accounts.push(account)

   //return account
   return account;



}

//get a specific account using the username

function getaccount(userName)
{
    // Just like an accumulator use this to verify if accounts match
    var accountMatched;

    //check each individual account for a match
    accounts.forEach(function(account) 
    {

        for( var i =0; i <= accounts.length; i++)
        {

              if(account.userName === userName)
                 {
                   accountMatched = account;
                  
                 }
          
                  
        

        }
       

        
    });
    
    return accountMatched;
}



function creditaccount(account, deposit)
 {
   account.balance += deposit;
   
 }


 function Deduction(account,withdraw)
  {
    
     account.balance -= withdraw;



  }
 
 
function getaccountBalance (account)
 {

   
     /* This will display the account balance. */
   return account.balance;
 }

//create Ade's Account
var Adesaccount = createaccount( {

       userName: 'Ade',
       balance: 0

    });

//credit the account's balance
creditaccount(Adesaccount,300);
console.log(getaccountBalance(Adesaccount));


Deduction(Adesaccount,50);
console.log(getaccountBalance(Adesaccount));
console.log("\n");

var checkIfAcccountExist = getaccount('Ade');
console.log(checkIfAcccountExist);

console.log("\n");
var shainassaccount = createaccount( {

    userName: 'shaina',
    balance: 50

 });

 console.log(accounts);

 console.log("\n");

//credit the account's balance
creditaccount(shainassaccount,30);
console.log(getaccountBalance(shainassaccount));


Deduction(shainassaccount,5);
console.log(getaccountBalance(shainassaccount));

var ShainaAcccountExist = getaccount("shaina");
console.log(ShainaAcccountExist);
console.log(getaccountBalance(shainassaccount))

