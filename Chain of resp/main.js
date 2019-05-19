const courses = require('./courses');
const Finder = require('./finder');


const courseFinder = new Finder("Bla", courses);

const result = courseFinder.find('Zombie');

console.log(result);