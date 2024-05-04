import { createContext, useEffect, useState } from 'react';
import { LocalStorageKey } from '../commons';

export const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const setIsSignIn = (fullName) => {
    setIsLogin(true);
    localStorage.setItem(LocalStorageKey.isLogin, true);
    localStorage.setItem(LocalStorageKey.fullName, fullName);
  };
  useEffect(() => {
    const isSignIn = localStorage.getItem(LocalStorageKey.isLogin);
    setIsLogin(isSignIn ?? false);
  }, [isLogin]);
  return <AppContext.Provider value={{ isLogin, setIsSignIn }}>{children}</AppContext.Provider>;
};
