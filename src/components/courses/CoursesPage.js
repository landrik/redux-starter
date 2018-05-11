import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';

class CoursesPage extends React.Component{
  constructor(props, context){
    super(props, context);
    this.state = {
      course: {title: ""}
    };
  }
  render(){
    const {courses} = this.props;
    return(
      <section id="courses" className="offset section">
        <div className="lightGrey">
          <div className="container clearfix">
            <div className="intro">
              <h1 className="titleBig">Courses Page</h1>
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
