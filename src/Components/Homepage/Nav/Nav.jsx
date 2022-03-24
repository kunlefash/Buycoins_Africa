import React from 'react'
import "./nav.css"
const Nav = () => {
  
  return (
    <header>
      <img className='logo' src="" alt="logo" />
      <nav>
        <ul className='nav_links'>
          <li><a href="#">Buycoin Pro</a></li>
          <li><a href="#Products">Products</a></li>
          <li><a href="#Learn">Learn</a></li>
          <li><a href="#Company">Company</a></li>
          <li><a href="#Signin">Sign In</a></li>
          <a className='cta'  href="#"><button>Get Started</button></a>


        </ul>
      </nav>
    </header>

  )
}

export default Nav