import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';


class ManageCoursePage extends React.Component{
  constructor(props, context){
    super(props, context);
    this.state = {
      course: Object.assign({}, this.props.course),
      errors: {}
    };
    this.updateCourseState = this.updateCourseState.bind(this);
    this.saveCourse = this.saveCourse.bind(this);
  }
  updateCourseState(event){
    const field = event.target.name;
    let course = this.state.course;
    course[field] = event.target.value;
    return this.setState({course: course});
  }
  saveCourse(event){
    event.preventDefault()
    this.props.actions.saveCourse(this.state.course);
  }
  render(){
    return (
      <section id="home" className="offset section">
        <div className="lightGrey">
          <div className="container clearfix">
            <div className="intro">
              <h1 className="titleBig">Manage Courses</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                   magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                   Ut enim ad minim veniam, quis nostrud exercitation .</p>
            </div>
            <div className="sixteen columns">
              <CourseForm
                allAuthors={this.props.authors}
                onChange={this.updateCourseState}
                onSave = {this.saveCourse}
                course={this.state.course}
                errors={this.state.errors}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors:PropTypes.array.isRequired,
  actions:PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
  let course = {id:'', watchHref:'', title:'', authorId:'', length:'', category:''};
  const authorFormattedForDropdown = state.authors.map(author => {
    return {
      value: author.id,
      text:author.firstName + ' ' + author.lastName
    };
  });
  return {
    course: course,
    authors: authorFormattedForDropdown
  };
}
function mapDispatchToProps(dispatch){
  return {
    actions:bindActionCreators(courseActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
