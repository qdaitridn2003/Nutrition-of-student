import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { LoginPage, RegisterPage } from '../components';

const AuthenticateRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};

export default AuthenticateRoute;
