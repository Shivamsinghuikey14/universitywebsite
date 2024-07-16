import React from 'react'
import NAvbar from './components/Navbar/NAvbar';
import Hero from './components/Hero/Hero';
import Programs from './components/programs/programs';
import Title from './components/Title/Title';
import About from './components/About/About';
import Campus from './components/Campus/Campus';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div>
     <NAvbar></NAvbar>
     <Hero></Hero>
     <div className='container'>

      <Title subtitle='Our program' title='what we offer'> </Title>
     <Programs></Programs>
     <About></About>
     <Title subtitle='Gallery' title='Campus photos'> </Title>
     <Campus></Campus>
     <Title subtitle='TESTIMONIALS' title='what students says'> </Title>
     <Testimonials></Testimonials>
     <Title subtitle='Contact Us' title='Get in Touch'> </Title>
     <Contact/>
     <Footer></Footer>
     </div>
     
     
    </div>
  )
}

export default App;