class Course {
    constructor({name, sales = 0, isFree, price = 0, isCampain}){
        this.name = name;
        this.sales = sales;
        this.isFree = isFree;
        this.price = price;
        this.isCampain = isCampain;
    }

    print (course = this) {
        return console.log(JSON.stringify(course))
    }

    total(){
        return this.price;
    }
}

module.exports = Course;