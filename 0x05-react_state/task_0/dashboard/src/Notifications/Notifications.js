import React, { Component } from 'react';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { fontFamily } from '../global';
import { mainColor } from '../global';

const styles = StyleSheet.create({
  Notifications: {
    border: `2px dashed ${mainColor}`,
    padding: '16px',
    width: 'calc(100% - 32px)',
    marginLeft: 'auto',
    fontFamily: fontFamily,
    fontSize: '20px',
  },
  menuItem: {
    textAlign: 'right',
    fontFamily: fontFamily,
    transition: 'opacity 1s ease',
  },
  menuItemHover: {
    ':hover': {
      opacity: '0.5',
      cursor: 'pointer',
      animationName: {
        '0%': {
          transform: 'translateY(0px)',
        },
        '50%': {
          transform: 'translateY(-5px)',
        },
        '100%': {
          transform: 'translateY(5px)',
        },
      },
      animationDuration: '0.5s',
      animationIterationCount: '3',
      animationDirection: 'alternate',
    },
  },
  ul: {
    padding: 0,
    listStyle: 'none',
  },
});

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length >
        this.props.listNotifications.length ||
      nextProps.displayDrawer !== this.props.displayDrawer
    );
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const {
      displayDrawer,
      listNotifications,
      handleDisplayDrawer,
      handleHideDrawer,
    } = this.props;
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
        {!displayDrawer && (
          <div
            className={css(styles.menuItem, styles.menuItemHover)}
            onClick={handleDisplayDrawer}
          >
            Your notifications
          </div>
        )}
        {displayDrawer && (
          <div className={css(styles.Notifications)}>
            <button
              aria-label="close"
              onClick={handleHideDrawer}
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
            <ul className={css(styles.ul)}>
              {listNotifications.map((notification, index) => (
                <NotificationItem
                  type={notification.type}
                  value={notification.value}
                  html={notification.html}
                  markAsRead={this.markAsRead}
                  key={notification.id}
                  id={index}
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
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  // listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  markAsRead: () => {},
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
};

export default Notifications;
