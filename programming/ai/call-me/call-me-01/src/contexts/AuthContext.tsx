import React, { createContext, useContext, useState, useEffect } from 'react';
import { AuthState, User } from '../types';
import { jwtDecode } from 'jwt-decode';

interface AuthContextType extends AuthState {
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [auth, setAuth] = useState<AuthState>({
    token: localStorage.getItem('auth_token'),
    user: null,
  });

  useEffect(() => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      try {
        const decoded = JSON.parse(atob(token)) as User;
        setAuth({ token, user: decoded });
      } catch (error) {
        localStorage.removeItem('auth_token');
        setAuth({ token: null, user: null });
      }
    }
  }, []);

  const login = (token: string) => {
    localStorage.setItem('auth_token', token);
    const decoded = JSON.parse(atob(token)) as User;
    setAuth({ token, user: decoded });
  };

  const logout = () => {
    localStorage.removeItem('auth_token');
    setAuth({ token: null, user: null });
  };

  return (
    <AuthContext.Provider value={{ ...auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};