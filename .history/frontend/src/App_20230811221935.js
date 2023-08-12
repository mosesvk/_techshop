import React from 'react'
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'



const App = () => {
  return (
    <>
      <Header />
      <main className='bg-light h-screen'>
        devices
        <HomeScreen />
      </main>
    </>
  )
}

export default App