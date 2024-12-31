import { jwtDecode } from 'jwt-decode';
import { User } from '../types';

const AUTH_TOKEN_KEY = 'auth_token';

export const setToken = (token: string) => {
  localStorage.setItem(AUTH_TOKEN_KEY, token);
};

export const getToken = (): string | null => {
  return localStorage.getItem(AUTH_TOKEN_KEY);
};

export const removeToken = () => {
  localStorage.removeItem(AUTH_TOKEN_KEY);
};

export const getCurrentUser = (): User | null => {
  const token = getToken();
  if (!token) return null;
  
  try {
    const decoded = jwtDecode<User>(token);
    return decoded;
  } catch {
    removeToken();
    return null;
  }
};