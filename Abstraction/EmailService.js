class EmailService {
    sendEmail() {
      console.log("Sending email...");
      this.#connect();
      this.#authenticate();
      this.#disconnect();
    }
  
    // Private methods using # syntax (ES2021 private fields)
    #connect() {
      console.log("Connecting to email server...");
    }
  
    #authenticate() {
      console.log("Authenticating...");
    }
  
    #disconnect() {
      console.log("Disconnecting from email server...");
    }
  }
  
  const emailService = new EmailService();
  emailService.sendEmail();
  