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

class SavingsAccount extends BankAccount{

    
    deposit(amount){

        if(super.deposit(amount))
        {
            console.log(`Congratulations! you saved $${amount}`);
        }
      
        

    }
    
    withdraw(amount){

       
            console.log(`Can not Withdraw money from savings account`)
        

       

        
    }

}



var savingsAccount = new SavingsAccount(100);
savingsAccount.deposit(20);

savingsAccount.printBalance();
savingsAccount.withdraw(10);
savingsAccount.printBalance();
