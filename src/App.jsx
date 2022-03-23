import React from 'react'
import About from './Components/Homepage/About/About'
import Hero from './Components/Homepage/Hero/Hero'
import Nav from './Components/Homepage/Nav/Nav'

const App = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <About/> 
    </div>
  )
}

export default App