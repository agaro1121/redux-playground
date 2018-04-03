/*
* Notice it only says 'course' and not
* 'course: course'
* ES6 allows this since both sides of the
* semicolon match
* */

import courseApi from '../api/mockCourseApi';
import * as types from './actionTypes';

export function createCourse(course) {
  return { type: 'CREATE_COURSE', course };
}

export function loadCoursesSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
}

// This is a thunk
export function loadCourses() {
  return function(dispatch) {
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      throw(error);
    });
  };
}
