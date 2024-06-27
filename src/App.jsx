import React from 'react';
import Navbar from './components/navbar';
import LandingPage from './components/LandingPage'
import Marquee from './components/marquee'
import About from './components/about'
import Eyes from './components/eyes'
import Feature from './components/feature'

function App() {
  return (
    <div className='w-full min-h-screen text-white bg-zinc-900'>
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Feature />
    </div>
  )
}

export default App
