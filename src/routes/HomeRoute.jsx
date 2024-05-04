import React, { useContext, useState } from 'react';
import { LocalStorageKey } from '../commons';
import { Input } from 'antd';
import { AppContext } from '../contexts';

const HomeRoute = () => {
  const { setIsSignIn } = useContext(AppContext);
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  const logoutApp = () => {
    localStorage.clear();
    setIsSignIn(false, '');
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-[#f2f2f2] px-3 py-4 rounded-md shadow-md shadow-slate-200">
          <div className="flex justify-between">
            <h1>Hello {localStorage.getItem(LocalStorageKey.fullName)}</h1>
            <button onClick={() => logoutApp()} className="text-red-500 cursor-pointer uppercase">
              Logout
            </button>
          </div>
          <Input
            className="mt-4 py-3"
            placeholder="Weight"
            onChange={(e) => setWeight(e.target.value)}
          />
          <Input
            className="mt-4 py-3"
            placeholder="Height"
            onChange={(e) => setHeight(e.target.value)}
          />
          <button
            onClick={() => alert(`Your Stats: ${weight}kg - ${height}m`)}
            className="mt-4 py-2 bg-emerald-500 w-full rounded-lg text-white font-medium uppercase"
          >
            Confirm Your Stat
          </button>
        </div>
      </div>
    </>
  );
};

export default HomeRoute;
