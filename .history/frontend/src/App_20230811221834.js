import React from 'react'
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'



const App = () => {
  return (
    <>
      <Header />
      <main className='bg-light h-screen'>
        <h1 className='text-dark'>Welcome to TechShop</h1>
        <HomeScreen />
      </main>
    </>
  )
}

export default App