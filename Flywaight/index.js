class Course {
    constructor({name, user, completed}){
        this.flyWeight = FlyWeightStore.get(user, completed);
        this.completed = completed;
    }
}

class FlyWeight{
    constructor(user, completed){
        this.user = user;
        this.completed = completed;
    }
}

const FlyWeightStore = (() =>{
    const flyWeights = {};

    const get = (user, completed) => {
        if(!flyWeights[user + completed]){
            flyWeights[user + completed] = new FlyWeight(user, completed)
        }
        return flyWeights[user + completed];
    }

    const getCount = () => {
        return Object.keys(flyWeights).length;
    }

    return{
        get: get,
        getCount: getCount
    }
})();

const users = ['Alex', 'Igor', 'Ann', 'Bob'];
const completed = [true, false];

const CourseMethods = function() {
    const courses = {};
    let count = 0;

    const add = (data) => {
        courses[data.name] = new Course(data);
        count++;
    }

    const get = (name) => {
       return courses[name]
    }

    const getCount = () => {
        return count;
     }

     return {
         get: get,
         add: add,
         getCount: getCount
     }

}

const courses = new CourseMethods();
const initialMemory = process.memoryUsage().heapUsed;

for (let i = 0; i < 1000000; i++) {
    courses.add({
        name: `${i}.course`, 
        user:users[Math.floor(Math.random() * users.length)],
        completed: Math.floor(Math.random() * completed.length)
    })
}
const finalMemory = process.memoryUsage().heapUsed;
const usedMemory =( (finalMemory - initialMemory)/1000000).toFixed(2); // 204 Mb
console.log(`used memory: ${usedMemory} Mb`)