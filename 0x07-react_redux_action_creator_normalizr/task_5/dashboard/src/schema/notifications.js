import notifications from '../../notifications.json';
import { normalize, schema } from 'normalizr';

const user = new schema.Entity('users');
const message = new schema.Entity('message', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('nontification', {
  author: user,
  context: message,
});

export const norm = normalize(notifications, [notification]);

export default function getAllNotificationsByUser(userId) {
  const contexts = [];
  // const notificationsNormalized = norm.entities.nontification;
  // const messageNormalized = norm.entities.message;
  for (let notification of notifications) {
    if (notification.author.id === userId) {
      contexts.push(notification.context);
    }
  }
  return contexts;
}

