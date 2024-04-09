import './NotificationItem.css';
import PropTypes from 'prop-types';

const NotificationItem = ({ type, html, value, markAsRead, id }) => {
  return (
    <>
      {type && value && (
        <li data-notification-type={type} onClick={() => markAsRead(id)}>
          {value}
        </li>
      )}
      {html && (
        <li
          data-notification-type="urgent"
          dangerouslySetInnerHTML={html}
          onClick={() => markAsRead(id)}
        />
      )}
    </>
  );
};

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string.isRequired,
  }),
  markAsRead: PropTypes.func,
  id: PropTypes.number,
};

NotificationItem.defaultProps = {
  type: 'default',
};

export default NotificationItem;
