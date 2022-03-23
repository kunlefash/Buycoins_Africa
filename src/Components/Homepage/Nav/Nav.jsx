import React from 'react'
import "./nav.css"
const Nav = () => {
  return (
          <nav>
              <div className='logo'>Logo</div>
              <ul>
                  <li className='navbar'><a href="#pro">Buycoins Pro</a></li>
                  <li className='navbar'><a href="#about">About</a></li>
                  <li className='navbar'><a href="#company">Company</a></li>
                  <li className='navbar'><a href="#login">Login</a></li>
                  <li className='navbar'><a href="#services">Services</a></li>
              </ul>
              <button type='button'>Get Started</button>
          </nav>
  )
}

export default Nav