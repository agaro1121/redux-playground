import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import { bindActionCreators } from 'redux';

class CoursesPage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      course: { title: "" }
    };

    // better performance when done here
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({ course: course });
  }

  onClickSave() {
    /*
    * dispatch function gets automatically injected
    * when the second param to 'connect(...)' is left blank
    * */
    this.props.actions.createCourse(this.state.course);
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  render(){
    return (
      <div>
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
        <h2>Add Course</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title} />

        <input
          type="submit"
          value="Save"
          onClick={this.onClickSave} />
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
