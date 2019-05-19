const { CourseBuilder, HotNew, BestSeller } = require('./Builder');
const Course = require('./course');
const CourseGroup = require('./Composite');

// const course_1 = new CourseBuilder('JS').makePaid(100).makeCampaign().build();

// const hotNew_1 = new HotNew(course_1);
// const bestSeller_1 = new BestSeller(hotNew_1);

const course_2 = new Course({name: 'JS', price: 99})
const course_3 = new Course({name: 'Java', price: 55})

const course_4 = new Course({name: 'Football', price: 11})
const course_5 = new Course({name: 'Tenis', price: 22})

const group_dev = new CourseGroup('dev', [course_2, course_3])
const group_sport = new CourseGroup('sport', [course_4, course_5])
const all_courses = new CourseGroup('all', [group_dev, group_sport])

// course_1.print(course_1);
// course_1.print(hotNew_1);
// course_1.print(bestSeller_1);

all_courses.print()