const userFactory = require('./userFactory')

const paul = userFactory('instructor', 'Paul', 'Developer', 100);
const john = userFactory('student', 'John', 'Bla-bla');

console.log(paul.toString())