const CourseBuilder = require('./Builder');

const course_1 = new CourseBuilder('JS').makePaid(100).makeCampaign().build();

course_1.toString();