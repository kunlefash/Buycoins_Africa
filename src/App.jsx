import React from 'react'
import About from './Components/Homepage/About/About'
import Hero1 from './Components/Homepage/Hero1/Hero1'
import Hero2 from './Components/Homepage/Hero2/Hero2'
import Nav from './Components/Homepage/Nav/Nav'

const App = () => {
  return (
    <div>
      <Nav />
      <Hero1 />
      <Hero2 />
      <About/> 
    </div>
  )
}

export default App