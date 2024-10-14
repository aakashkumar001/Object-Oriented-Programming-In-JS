class BadBankAccount {
    constructor(balance) {
      this.balance = balance;  // Directly exposed
    }
  }
  
  let account = new BadBankAccount(100);
  account.balance = -500;  // No control, invalid balance
  console.log(account.balance);  // -500
  