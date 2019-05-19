class CourseGroup{
    constructor(name, composite){
        this.name = name;
        this.composite = composite;
    }

    total(){
        return this.composite.reduce((sum, item) => {
            return sum + item.total();
        }, 0);
    }

    print(){
        this.composite.forEach(element => {
            element.print();
        });
    }
}

module.exports = CourseGroup;