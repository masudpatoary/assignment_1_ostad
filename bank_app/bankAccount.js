// BankAccount class creasion started
class BankAccount {
    constructor(accountNumber, ownerName, balance) {
        this.ownerName = ownerName;
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

// Method to show BALANCE
    getBalance() {
        console.log(`Dear ${this.ownerName} your Current balance is: $${this.balance}`);
    }
// Method to show ACCOUNT INFORMATION
    displayAccountInfo() {
        console.log(`Account information:\n  Account Number: ${this.accountNumber}\n  Owner Name:${this.ownerName}\n Balance: $${this.balance}`);
    }
// Method to show DEPOSIT
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log( "$"+amount + " Diposited successfully to your account\n", 'After Deposit your new Balance is $'+ this.balance )
        } else {
            console.log("Invalid deposit amount.");
        }
    }
// Method to show WITHDRAW 
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log( "$"+amount + " Withdrawn successfully from your account\n", 'After withdraw your new Balance is $'+ this.balance)
        } else {
            console.log("Insufficient funds");
        }
    }
}
// BankAccount class creasion ended
///////////////////////////////////

// First instance creation
const currentAC = new BankAccount(5454, "Mr. Hasin Hyder", 100000);
currentAC.deposit(20000);
currentAC.getBalance();
currentAC.withdraw(25000);
currentAC.withdraw(18200);
currentAC.displayAccountInfo();

// second instance creation
const savingsAC = new BankAccount(6545, "Mr. Rabbil Hasan", 500);
savingsAC.deposit(3000);
savingsAC.getBalance();
savingsAC.withdraw(4500);
savingsAC.withdraw(2700);
savingsAC.displayAccountInfo();