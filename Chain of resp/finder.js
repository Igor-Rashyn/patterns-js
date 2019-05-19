const courses = require('./courses');
const Category = require('./category');
class Finder{
    constructor(name, courses = []){
        this.name = name;
        this.courses = courses;

        const design = new Category('design', courses.design);
        const language =  new Category('design', courses.language);
        const music =  new Category('design', courses.music);

        design.setNext(language);
        language.setNext(music);
        this.category = design;
    }

    find(name){
        return this.category.search(name)
    }
}

module.exports = Finder