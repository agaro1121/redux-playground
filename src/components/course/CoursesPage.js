import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import { bindActionCreators } from 'redux';
import CourseList from './CourseList';

class CoursesPage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      course: { title: "" }
    };

  }

  render(){
    return (
      <div>
        <h1>Courses</h1>
        <CourseList courses={this.props.courses}/>
      </div>
    );
  }
}

CoursesPage.propTypes = {
  actions: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired
};

/*
* 'state.courses' maps to the one in rootReducer
* @param ownProps - allows you to access props attached to 'this' component
* */
function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

/*
* Defines which actions are available to
* component
*
* This is a little more manual
* */
function mapDispatchToProps(dispatch) {
  return {
    //This is manual
    // createCourse: course => dispatch(courseActions.createCourse(course))
    /*
    * This is more terse
    * This will go through every courseAction in `courseActions`
    * and wrap them in a call to dispatch
    * */
    actions: bindActionCreators(courseActions, dispatch)
    // createCourse: bindActionCreators(courseActions.createCourse, dispatch) // <- Also
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
