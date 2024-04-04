import CourseListRow from './CourseListRow';
import './CourseList.css';
import CourseShape from './CourseShape';
import PropTypes from 'prop-types';

const CourseList = ({ listCourses = [] }) => {
  if (listCourses.length === 0) {
    return (
      <table id="CourseList">
        <CourseListRow textFirstCell="No course available yet" />{' '}
      </table>
    );
  }
  return (
    <table id="CourseList">
      <thead>
        <CourseListRow textFirstCell="Available courses" isHeader={true} />
        <CourseListRow
          textFirstCell="Course name"
          textSecondCell="Credit"
          isHeader={true}
        />
      </thead>
      <tbody>
        {listCourses.map((course) => {
          <CourseListRow
            textFirstCell={course.name}
            textSecondCell={course.credit}
            isHeader={false}
            key={course.id}
          />;
        })}
      </tbody>
    </table>
  );
};

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;
