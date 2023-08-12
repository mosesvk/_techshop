import React from 'react'
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'



const App = () => {
  return (
    <div className='bg-light '>
      <Header />
      <main className='bg-light h-full'>
        <h1 className='text-dark'>Welcome to TechShop</h1>
        <HomeScreen />
      </main>
    </div>
  )
}

export default App