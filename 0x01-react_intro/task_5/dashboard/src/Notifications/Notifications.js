import React from 'react';
import '../Notifications/Notifications.css';
import closeIcon from '../close-icon.png';
import { getLatestNotification } from '../utils/utils';

const Notifications = () => {
  return (
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
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li
          data-priority="urgent"
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        />
      </ul>
    </div>
  );
};

export default Notifications;
