class Category{
    constructor(name, courses = []){
        this.name = name;
        this.courses = courses;

        this.next = null;
    }

    setNext(name){
        this.next = name;
    }

    search(name){
        const found =  this.courses.find(item => item.name === name);
        if(found){
            return{
                name: found.name,
                price: found.price,
                location: this.name,
            }
        } else if(this.next){
            return this.next.search(name)
        } else {
            return `${name} was not found`
        }
    }

}

module.exports = Category