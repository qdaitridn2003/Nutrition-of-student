import React, { useContext } from 'react';
import HomeRoute from './HomeRoute';
import AuthenticateRoute from './AuthenticateRoute';
import { AppContext } from '../contexts';

const AppRoute = () => {
  const { isLogin } = useContext(AppContext);
  return isLogin ? <HomeRoute /> : <AuthenticateRoute />;
};

export default AppRoute;
