class Course {
    constructor({name, sales = 0, isFree, price = 0, isCampain}){
        this.name = name;
        this.sales = sales;
        this.isFree = isFree;
        this.price = price;
        this.isCampain = isCampain;
    }

    toString () {
        return console.log(JSON.stringify(this))
    }
}

module.exports = Course;