import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  defaultNotification: {
    color: 'blue',
  },
  urgentNotification: {
    color: 'red',
  },
});

class NotificationItem extends PureComponent {
  shouldComponentUpdate(nextProps) {
    return (
      nextProps.value !== this.props.value ||
      nextProps.html !== this.props.html ||
      nextProps.type !== this.props.type ||
      nextProps.markAsRead !== this.props.markAsRead ||
      nextProps.id !== this.props.id
    );
  }
  render() {
    const { type, html, value, markAsRead, id } = this.props;
    return (
      <>
        {type && value && (
          <li
            data-notification-type={type}
            onClick={() => markAsRead(id)}
            className={
              type === 'urgent'
                ? css(styles.urgentNotification)
                : css(styles.defaultNotification)
            }
          >
            {value}
          </li>
        )}
        {html && (
          <li
            data-notification-type="urgent"
            dangerouslySetInnerHTML={html}
            onClick={() => markAsRead(id)}
            className={css(styles.urgentNotification)}
          />
        )}
      </>
    );
  }
}

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
