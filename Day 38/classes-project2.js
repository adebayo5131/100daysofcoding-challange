class BankAccount{

    constructor(balance){
        this.balance = typeof balance === 'number' ? balance: 0;

    }

    set balance(val){
             

          this._balance = val;
          this.balanceUpdatedAt = new Date();
    }

    get balance(){
           return this._balance;

    }

    //deposit
    deposit(amount){

        if(typeof amount === 'number')
        {
                this.balance += amount;
                return true;
        }
        else
        {
              console.log(`Amount must be a number`);
              return false;
        }

        


    }

    withdraw(amount){

        if(typeof amount === 'number')
        {
            this.balance -= amount
            return true;
        }
        else{
            console.log(`Amount must be a number`);
            return false;
        }
        

    }

    printBalance(){

         console.log(`Your account balance is $${this.balance} Last updated at ${this.balanceUpdatedAt}`)
    }
}



var account = new BankAccount(100);
account.deposit(20);
account.withdraw(10);
account.printBalance();

console.log('\n')
var account2 = new BankAccount('adebayo');
account2.deposit('james');
account2.withdraw('sytia');
account2.printBalance();