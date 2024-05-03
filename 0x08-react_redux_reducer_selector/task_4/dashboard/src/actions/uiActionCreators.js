import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from './actionTypes';
import { LOGIN_FAILURE, LOGIN_SUCCESS } from './uiActionTypes';

function login(email, password) {
  return {
    type: LOGIN,
    user: { email, password },
  };
}

export const boundLogin = (email, password) => dispatch(login(email, password));

function logout() {
  return {
    type: LOGOUT,
  };
}

export const boundLogout = () => dispatch(logout());

function displayNotificationDrawer() {
  return {
    type: DISPLAY_NOTIFICATION_DRAWER,
  };
}

export const boundDisplayNotificationDrawer = () =>
  dispatch(displayNotificationDrawer());

function hideNotificationDrawer() {
  return {
    type: HIDE_NOTIFICATION_DRAWER,
  };
}

export const boundHideNotificationDrawer = () =>
  dispatch(hideNotificationDrawer());

function loginSuccess() {
  return {
    type: LOGIN_SUCCESS,
  };
}

export const boundLoginSuccess = () => dispatch(loginSuccess());

function loginFailure() {
  return {
    type: LOGIN_FAILURE,
  };
}

export const boundLoginFailure = () => dispatch(loginFailure());

export async function loginRequest(email, password) {
  boundLogin(email, password);

  try {
    await fetch('/login-success.json');
    boundLoginSuccess();
  } catch (e) {
    boundLoginFailure();
  }
}

