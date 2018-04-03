import {combineReducers} from 'redux';
import courses from './courseReducer';

/*
* Once again,
* 'courses' = 'courses:courses'
* Thanks to ES6 syntax :-)
*
* "short hand property name"
* */
const rootReducer = combineReducers({
  courses
});

export default rootReducer;
