import React, { useEffect, useState } from 'react'
import './Navbar.css'
//import logo from './../assets/images.logo.png'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'
import { Link } from 'react-scroll';

const NAvbar = () => {

 const [sticky,setSticky]= useState(false);

 useEffect(()=>{
  window.addEventListener('scroll',()=>{
    window.scrollY >50 ? setSticky(true) :setSticky(false)
  })
 },[]);


 const [mobileMenu,setMobileMenu] =useState(false);

 const toggleMenu = () =>{
  
  mobileMenu? setMobileMenu(false) : setMobileMenu(true);
 }

  return (
    
    <nav className={ `container ${sticky ? 'dark-nav' : '' }` }>
        <img src={logo} alt='' className='image'/>
        <ul className={mobileMenu ? '' : 'hide-menu'}>
          
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='programs' smooth={true} offset={-260} duration={500}>Programs</Link></li>
            <li><Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link></li>
            <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
            <li><Link to='Testimonial' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>

            <li> <Link to='contact' smooth={true} offset={0} duration={-260} className='btn' >Contact Us</Link> </li>
        </ul>
        <img src={menu_icon} alt=""  className='menu-icon' onClick={toggleMenu}/>
    </nav>


  )
}

export default NAvbar;