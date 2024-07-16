import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
       <img src={about_img} alt="" className='about-img' />
       <img src={play_icon} alt="" className='play-icon' />
      </div>

      <div className="about-right">
           <h3>ABOUT SCHOOL</h3>
           <h2>Nurturing Tomorrows's Leaders Today</h2>
           <p>My school stands out with its exceptional infrastructure, featuring modern
             classrooms, well-equipped laboratories, and a vast library. These facilities provide a 
             conducive environment for both academic and extracurricular activities, ensuring that 
             students have access to the best resources for their education.</p>

           <p>The teaching staff at my school is dedicated and highly qualified, playing a 
            crucial role in the academic success of the students.Their expertise and passion have significantly 
            contributed to the school's impressive academic record.</p> 

           <p>In addition to academics, the school boasts a large playground that supports various sports and 
            physical activities, promoting a balanced and healthy lifestyle among students. Over the past five years, 
            the school has consistently achieved high percentages in board exams, a testament to the hard work of both
             students and teachers.</p>
      </div>
    </div>
  )
}

export default About
