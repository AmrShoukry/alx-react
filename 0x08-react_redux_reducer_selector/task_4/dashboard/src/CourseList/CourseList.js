import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  table: {
    border: '1px solid #dddddd',
    borderCollapse: 'collapse',
    padding: '10px',
    marginTop: '32px',
    width: '100%',
  },
});

const CourseList = ({ listCourses }) => {
  if (listCourses.length === 0) {
    return (
      <table id="CourseList" className={css(styles.table)}>
        <CourseListRow textFirstCell="No course available yet" />{' '}
      </table>
    );
  }
  return (
    <table id="CourseList" className={css(styles.table)}>
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
          return (
            <CourseListRow
              textFirstCell={course.name}
              textSecondCell={course.credit}
              isHeader={false}
            />
          );
        })}
      </tbody>
    </table>
  );
};

CourseList.propTypes = {
  // listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;
