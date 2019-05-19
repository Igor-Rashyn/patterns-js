class PaymentStrategy{
   
    static Card(user){
        console.log(`${user} will pay with a credit card`)
    }

    static Paypal(user){
        console.log(`${user} will pay by paypal`)
    }

    static AnotherMethod(user){
        console.log(`${user} will pay by another method`)
    }
}

module.exports = PaymentStrategy;