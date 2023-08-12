import React from 'react';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';

const App = () => {
  return (
    <>
      <Header />
      <main className='bg-light h-screen'>
        <div className='container'>
          <HomeScreen />
        </div>
      </main>
    </>
  );
};

export default App;
