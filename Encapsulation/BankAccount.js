class BankAccount {
    #balance;  // Private field (using the # syntax)
  
    constructor(balance) {
      this.#balance = balance;
    }
  
    getBalance() {
      return this.#balance;
    }
  
    deposit(amount) {
      if (amount <= 0) {
        throw new Error("Deposit amount must be positive");
      }
      this.#balance += amount;
    }
  
    withdraw(amount) {
      if (amount <= 0) {
        throw new Error("Withdrawal amount must be positive");
      }
  
      if (amount > this.#balance) {
        throw new Error("Insufficient funds");
      }
  
      this.#balance -= amount;
    }
  }
  
  let account = new BankAccount(100);
  console.log(account.getBalance());  // 100
  
  account.deposit(50);
  console.log(account.getBalance());  // 150
  
  account.withdraw(30);
  console.log(account.getBalance());  // 120
  