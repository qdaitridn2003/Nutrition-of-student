import { Checkbox, Input } from 'antd';
import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { AppContext } from '../../../contexts';
import { ListAccount } from '../../../commons';

const LoginPage = () => {
  const { setIsSignIn } = useContext(AppContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loginToApp = () => {
    ListAccount.forEach((item) => {
      if (item.username === username && item.password === password) {
        setIsSignIn(true, item.fullname);
        alert('Successfully Login');
      } else {
        alert('Failure Login');
      }
    });
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-[#f2f2f2] px-3 py-4 rounded-md shadow-md shadow-slate-200">
          <h1 className="text-3xl font-semibold text-center">Welcome Back</h1>
          <h1 className="text-xl font-medium text-center mt-2">Login Into Account</h1>
          <Input
            placeholder="Username"
            className="mt-4 py-2"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input.Password
            placeholder="Password"
            className="mt-4 py-2"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="mt-4 flex items-center justify-between">
            <Checkbox className="text-sm">Remember Me ?</Checkbox>
            <h1 className="text-red-500 text-sm cursor-pointer">Recover Password</h1>
          </div>
          <h1 className="mt-4 text-center">
            Do not have an account?{' '}
            <NavLink className="text-blue-500" to="/register">
              Register
            </NavLink>
          </h1>
          <button
            onClick={() => loginToApp()}
            className="mt-4 py-2 bg-emerald-500 w-full rounded-lg text-white font-medium uppercase"
          >
            Sign In
          </button>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
