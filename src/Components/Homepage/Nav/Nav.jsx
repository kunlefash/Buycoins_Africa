import React from 'react'
import "./nav.css"
import {AiOutlineMenu} from "react-icons/ai"

function Nav()  {
  return (
    <header>
      <img className='logo' src="" alt="logo" />
      <nav>
        <ul id='menuList' className='nav_links'>
          <li><a href="#">Buycoin Pro</a></li>
          <li><a href="#Products">Products</a></li>
          <li><a href="#Learn">Learn</a></li>
          <li><a href="#Company">Company</a></li>
          <li><a href="#Signin">Sign In</a></li>
          <a className='cta'  href="#"><button>Get Started</button></a>
          


        </ul>
      </nav>
      <AiOutlineMenu className='menu_icon' onClick="togglemenu"/>

    </header>

  )
}

export default Nav