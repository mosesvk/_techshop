import React from 'react';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Header />
      <main className='bg-light max-h-fit py-3'>
        <Outlet />
      </main>
    </>
  );
};

export default App;
