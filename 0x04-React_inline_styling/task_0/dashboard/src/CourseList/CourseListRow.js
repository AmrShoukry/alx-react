import React from 'react';
import PropTypes from 'prop-types';

const CourseListRow = ({ textFirstCell, isHeader, textSecondCell }) => {
  const renderHeaderCell = () => {
    if (isHeader && !textSecondCell) {
      return <th colSpan="2">{textFirstCell}</th>;
    } else {
      return (
        <>
          <th>{textFirstCell}</th>
          <th>{textSecondCell}</th>
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
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
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
