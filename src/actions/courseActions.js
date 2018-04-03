/*
* Notice it only says 'course' and not
* 'course: course'
* ES6 allows this since both sides of the
* semicolon match
* */
export function createCourse(course) {
  return { type: 'CREATE_COURSE', course };
}
