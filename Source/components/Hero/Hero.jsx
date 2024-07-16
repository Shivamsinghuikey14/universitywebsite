import React from 'react'
import './Hero.css'
import arrow from '../../assets/arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1>We Ensure Better Education for a better World</h1>
            <p>Also check whether there is an integer that is a primitive root modulo n or not for n=8 
               Justify your claim by considering the properties of primitive root and the structure of n </p>
             <button className='btn'>Explore More <img src={arrow} alt="" />
             </button>
        </div>
    </div>
  )
}

export default Hero;