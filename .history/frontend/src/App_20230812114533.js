import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

const App = () => {
  return (
    <>
      <Header />
      <main className='bg-neutral-50 max-h-fit py-3'>
        <Outlet />
      </main>
    </>
  );
};

export default App;
