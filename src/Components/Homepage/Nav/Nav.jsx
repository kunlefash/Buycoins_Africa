import React, { useState, useRef, useEffect } from 'react'
import "./nav.css"
import {AiOutlineMenu} from "react-icons/ai"


function Nav()  {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll  = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
};
  const [toggle, setToggle] = useState(false)
  const navRef = useRef()

  const handleToggler = () => {
    setToggle(!toggle)

  }

  useEffect(() => {
    
    // navRef.current.style.top = '-300px'
    if(toggle){
      navRef.current.style.top = '75px'
      navRef.current.style.transition = '.4s top'
    }else{
      navRef.current.style.top = '-300px'
      navRef.current.style.transition = '.4s top'
    }
  }, [toggle])

  return (
      <header className= {isScrolled ? "nav scrolled" : "nav"}>
        <img className='logo' src="" alt="logo" />
        <div className='container_header'>
        <nav>
          <ul ref={navRef} id='menuList' className='nav_links'>
            <li><a href="#">Buycoin Pro</a></li>
            <li><a href="#Products">Products</a></li>
            <li><a href="#Learn">Learn</a></li>
            <li><a href="#Company">Company</a></li>
            <li><a href="#Signin">Sign In</a></li>
            <a className='cta'  href="#"><button className='button_nav'>Get Started</button></a>
          </ul>
        </nav>
        <AiOutlineMenu className='menu_icon' onClick={handleToggler}/>
        </div>
      </header>
  )
}

export default Nav
