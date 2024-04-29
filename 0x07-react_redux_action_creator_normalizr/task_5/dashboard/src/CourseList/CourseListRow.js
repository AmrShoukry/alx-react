import React, { useState } from 'react';
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

  rowChecked: {
    backgroundColor: '#e6e4e4',
  },
});

const CourseListRow = ({ textFirstCell, isHeader, textSecondCell }) => {
  const [rowChecked, setRowChecked] = useState(false);
  function handleRowChecked(e) {
    setRowChecked((prevRowChecked) => !prevRowChecked);
  }

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
      return (
        <td colSpan="2">
          <span>{textFirstCell}</span>
          <input
            type="checkbox"
            onChange={(e) => handleRowChecked(e)}
            value={rowChecked}
          />
        </td>
      );
    } else {
      return (
        <>
          <td
            className={
              rowChecked ? css(styles.td, styles.rowChecked) : css(styles.td)
            }
          >
            <span>{textFirstCell}</span>
            <input
              type="checkbox"
              onChange={(e) => handleRowChecked(e)}
              value={rowChecked}
            />
          </td>
          <td
            className={
              rowChecked ? css(styles.td, styles.rowChecked) : css(styles.td)
            }
          >
            <span>{textSecondCell}</span>
          </td>
        </>
      );
    }
  };

  const style = isHeader
    ? { backgroundColor: '#f5f5f5ab' }
    : { backgroundColor: '#deb5b545' };

  return (
    <tr style={style}>
      {console.log(isHeader)}
      {isHeader ? renderHeaderCell() : renderDataCell()}
    </tr>
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
