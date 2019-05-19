const PaymentStrategy = require('./index');

class Payment{
    constructor(strategy = 'Card'){
        this.strategy = PaymentStrategy[strategy];
    }

    changeStrategy(strategy){
        this.strategy = PaymentStrategy[strategy];
    }

    showPaymentMethod(user){
        this.strategy(user);
    }
}

module.exports = Payment;