import { getFullYear, getFooterCopy, getLatestNotification } from './utils';
test('getFullYear function', () => {
  expect(getFullYear()).toBe(2024);
});

test('getFooterCopy function', () => {
  expect(getFooterCopy(true)).toBe('Holberton School');
  expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});

test('getLatestNotification function', () => {
  expect(getLatestNotification()).toBe(
    '<strong>Urgent requirement</strong> - complete by EOD',
  );
});
