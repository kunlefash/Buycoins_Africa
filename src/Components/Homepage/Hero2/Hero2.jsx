import React from 'react'
import "./hero2.css"
import IMG1 from "../../../assets/img1.png"
const Hero2 = () => {
    return (
    <section className='hero_2'>
        <div className="container_left">
            <h2 className='h2-hero2' >BuyCoins Services </h2>
            <h4 className='h4-hero2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, nobis.</h4>
            <a className='hero_2_cta'  href="#Products"><button className='button_hero2'>Products</button></a>

        </div>

        <div className="container_right">
            <div>
              <img src={IMG1} alt=""  className='img_right'/>
            </div>

            
        </div>
    </section>
  )
}

export default Hero2