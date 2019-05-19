class Course {
    constructor({name, price = 0, completed}){
        this.name = name;
        this.price = price;
        this.completed = completed;
    }
}

const CourseServices = (
    () => {
        return {
            complete: (Course) =>{
                Course.completed = true;
                console.log(`completing course: ${Course.name}`)
            },
            save: (Course) =>{
                console.log(`Saved: ${Course.name}`)
            }
        }
    }
)();

const CourseServicesFacade = (
    () =>{
        return {
            complete: (course)=>{
                CourseServices.complete(course);
                if(course.completed){
                    CourseServices.save();
                }
            }
        }
    }
)();

module.exports = { Course, CourseServicesFacade};