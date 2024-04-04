import './NotificationItem.css';

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

export default NotificationItem;
