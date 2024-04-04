import './NotificationItem.css';
import PropTypes from 'prop-types';

const NotificationItem = ({ type, html, value }) => {
  return (
    <>
      {type && value && <li data-notification-type={type}>{value}</li>}
      {html && (
        <li data-notification-type="urgent" dangerouslySetInnerHTML={html} />
      )}
    </>
  );
};

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  html: PropTypes.shape({
    __html: PropTypes.string.isRequired,
  }),
};

NotificationItem.defaultProps = {
  type: 'default',
};

export default NotificationItem;
