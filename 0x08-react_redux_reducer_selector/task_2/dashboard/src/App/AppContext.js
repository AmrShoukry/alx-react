import { createContext } from 'react';

export const user = {
  email: '',
  password: '',
  isLoggedIn: false,
};

export function logOut() {}

export const MyContext = createContext({ user, logOut });
