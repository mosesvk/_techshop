import React from 'react';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';

const App = () => {
  return (
    <>
      <Header />
      <main className='bg-light max-h-fit py-3'>
        <HomeScreen />
      </main>
    </>
  );
};

export default App;
