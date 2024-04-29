import notifications from '../../notifications.json';

export default function getAllNotificationsByUser(userId) {
  const contexts = [];
  for (let notification of notifications) {
    if (notification.author.id === userId) {
      contexts.push(notification.context);
    }
  }
  return contexts;
}

