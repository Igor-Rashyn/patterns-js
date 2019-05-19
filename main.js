const { CourseBuilder, HotNew, BestSeller } = require('./Builder');

const course_1 = new CourseBuilder('JS').makePaid(100).makeCampaign().build();

const hotNew_1 = new HotNew(course_1);
const bestSeller_1 = new BestSeller(hotNew_1);

course_1.toString(course_1);
course_1.toString(hotNew_1);
course_1.toString(bestSeller_1);