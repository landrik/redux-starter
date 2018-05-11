import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';

class CoursesPage extends React.Component{
  constructor(props, context){
    super(props, context);
    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    this.state = {
      course: {title: ""}
    };
  }

  redirectToAddCoursePage(){
    browserHistory.push('/course');
  }
  render(){
    const {courses} = this.props;
    return(
      <section id="courses" className="offset section">
        <div className="lightGrey">
          <div className="container clearfix">
            <div className="intro">
              <h1 className="titleBig">Courses Page</h1>
               <input type="submit" value="Add Course" className="btn btn-primary" onClick={this.redirectToAddCoursePage} />
              <CourseList courses={courses} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
  return {
    courses: state.courses//<='courses' property  is determined by the choice we made within our reducer
  };
}
export default connect(mapStateToProps)(CoursesPage);
