import { createContext, useEffect, useState } from 'react';
import { LocalStorageKey } from '../commons';

export const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const setIsSignIn = (isSignIn, fullName) => {
    setIsLogin(isSignIn);
    localStorage.setItem(LocalStorageKey.isLogin, isSignIn);
    localStorage.setItem(LocalStorageKey.fullName, fullName);
  };
  useEffect(() => {
    const isSignIn = localStorage.getItem(LocalStorageKey.isLogin);
    setIsLogin(Boolean(isSignIn));
  }, []);
  return <AppContext.Provider value={{ isLogin, setIsSignIn }}>{children}</AppContext.Provider>;
};
