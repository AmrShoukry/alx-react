import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
// import NotificationItemShape from './NotificationItemShape';

const Notifications = ({ displayDrawer = false, listNotifications = [] }) => {
  if (listNotifications.length === 0) {
    return (
      <>
        <div className="menuItem">Your notifications</div>
        <div className="Notifications">
          <p>No new notification for now</p>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="menuItem">Your notifications</div>
      {displayDrawer && (
        <div className="Notifications">
          <button
            aria-label="close"
            onClick={() => console.log('Close button has been clicked')}
            style={{
              display: 'block',
              marginLeft: 'auto',
              textAlign: 'right',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              outline: 'none',
            }}
          >
            <img src={closeIcon} alt="close" width="20px" height="20px" />
          </button>
          <p>Here is the list of notifications</p>
          <ul>
            {listNotifications.map((notification) => (
              <NotificationItem
                type={notification.type}
                value={notification.value}
                html={notification.html}
                key={notification.id}
              />
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  // listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;
