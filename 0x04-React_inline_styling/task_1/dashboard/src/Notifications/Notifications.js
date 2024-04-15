import React, { Component } from 'react';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { fontFamily } from '../global';

const styles = StyleSheet.create({
  Notifications: {
    border: '2px dashed var(--mainColor)',
    padding: '16px',
    width: '35%',
    marginLeft: 'auto',
    fontFamily: fontFamily,
  },
  menuItem: {
    textAlign: 'right',
    fontFamily: fontFamily,
  },
});

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    nextProps.listNotifications.length > this.props.listNotifications.length;
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;
    if (listNotifications.length === 0) {
      return (
        <>
          <div className={css(styles.menuItem)}>Your notifications</div>
          <div className={css(styles.Notifications)}>
            <p>No new notification for now</p>
          </div>
        </>
      );
    }
    return (
      <>
        <div className={css(styles.menuItem)}>Your notifications</div>
        {displayDrawer && (
          <div className={css(styles.Notifications)}>
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
                  markAsRead={this.markAsRead}
                  key={notification.id}
                  id={notification.id}
                />
              ))}
            </ul>
          </div>
        )}
      </>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  markAsRead: PropTypes.func,
  // listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  markAsRead: () => {},
};

export default Notifications;
