import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  td: {
    border: '1px solid #dddddd',
    borderCollapse: 'collapse',
    padding: '10px',
  },
  th: {
    border: '1px solid #dddddd',
    borderCollapse: 'collapse',
    padding: '10px',
  },
});

const CourseListRow = ({ textFirstCell, isHeader, textSecondCell }) => {
  const renderHeaderCell = () => {
    if (isHeader && !textSecondCell) {
      return (
        <th colSpan="2" className={css(styles.th)}>
          {textFirstCell}
        </th>
      );
    } else {
      return (
        <>
          <th className={css(styles.th)}>{textFirstCell}</th>
          <th className={css(styles.th)}>{textSecondCell}</th>
        </>
      );
    }
  };

  const renderDataCell = () => {
    if (!isHeader && !textSecondCell) {
      return <td colSpan="2">{textFirstCell}</td>;
    } else {
      return (
        <>
          <td className={css(styles.td)}>{textFirstCell}</td>
          <td className={css(styles.td)}>{textSecondCell}</td>
        </>
      );
    }
  };

  const style = isHeader
    ? { backgroundColor: '#f5f5f5ab' }
    : { backgroundColor: '#deb5b545' };

  return (
    <tr style={style}>{isHeader ? renderHeaderCell() : renderDataCell()}</tr>
  );
};

CourseListRow.propTypes = {
  textFirstCell: PropTypes.string.isRequired,
  isHeader: PropTypes.bool.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  textSecondCell: null,
};

export default CourseListRow;
