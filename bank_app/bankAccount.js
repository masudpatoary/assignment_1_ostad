class BankAccount {
    constructor(accountNumber, ownerName, balance) {
        this.ownerName = ownerName;
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    getBalance() {
        console.log(`Dear ${this.ownerName} your Current balance is: $${this.balance}`);
    }

    displayAccountInfo() {
        console.log(`Account information:\n Account Number: ${this.accountNumber}\n Owner Name:${this.ownerName}\n Balance: $${this.balance}`);
    }
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log( "$"+amount + " Diposited successfully to your account\n", 'After Deposit your new Balance is $'+ this.balance )
        } else {
            console.log("Invalid deposit amount.");
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log( "$"+amount + " Withdrawn successfully from your account\n", 'After withdraw your new Balance is $'+ this.balance)
        } else {
            console.log("Insufficient funds");
        }
    }
}


const currentAC = new BankAccount(5454, "Mr. Hasin Hyder", 100000);
currentAC.deposit(20000);
currentAC.getBalance();
currentAC.withdraw(25000);
currentAC.withdraw(18200);
currentAC.displayAccountInfo();

const savingsAC = new BankAccount(6545, "Mr. Rabbil Hasan", 500);
savingsAC.deposit(3000);
savingsAC.getBalance();
savingsAC.withdraw(4500);
savingsAC.withdraw(2700);
savingsAC.displayAccountInfo();