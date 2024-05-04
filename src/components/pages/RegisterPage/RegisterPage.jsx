import { Input } from 'antd';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { ListAccount } from '../../../commons';

const RegisterPage = () => {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const registerToApp = () => {
    if (confirmPassword !== password) {
      alert('Confirm password must be match with password');
      return;
    }

    ListAccount.push({ username, password, fullname: fullName });
    alert('Register account successfully');
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-[#f2f2f2] px-3 py-4 rounded-md shadow-md shadow-slate-200 w-1/3">
        <h1 className="text-3xl font-semibold text-center">Create Your Account</h1>
        <h1 className="text-xl font-medium text-center mt-2">Register Into Account</h1>
        <Input
          placeholder="Full Name"
          className="mt-4 py-2"
          required
          onChange={(e) => setFullName(e.target.value)}
        />
        <Input
          placeholder="Username"
          required
          className="mt-4 py-2"
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input.Password
          placeholder="Password"
          required
          className="mt-4 py-2"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input.Password
          required
          placeholder="Confirm Password"
          className="mt-4 py-2"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <h1 className="mt-4 text-center">
          Already have an account?{' '}
          <NavLink className="text-blue-500" to="/login">
            Login
          </NavLink>
        </h1>
        <button
          onClick={() => registerToApp()}
          className="mt-4 py-2 bg-emerald-500 w-full rounded-lg text-white font-medium uppercase"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default RegisterPage;
