import React from 'react'
import './Contact.css'
import msg_icon from "../../assets/msg-icon.png"
import mail_icon from "../../assets/mail-icon.png"
import phone_icon from "../../assets/phone-icon.png"
import location_icon from "../../assets/location-icon.png"
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {


  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "73b0da08-8502-471f-9e69-384906f2c312");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  

  return (

    <div className='contact'>
      <div className="contact-col">
        <h3>Send us Message  <img src={msg_icon} alt="" /></h3>
        <p>Feel free to contact me for collaboration opportunities, questions, or feedback. I look forward to hearing from you! Whether you have a project in mind or just want to connect, I’m always open to new ideas and discussions. Let's create something amazing together!Your thoughts and suggestions are always welcome. 
             Dont hesitate to reach out and start a conversation.</p>
             <ul>
                <li> <img src={mail_icon} alt="" /> your.email@example.com </li>
                <li> <img src={phone_icon} alt="" /> +91 96916 28344 </li>
                <li> <img src={location_icon} alt="" />  Near Sahara Road,<br/> Keri, Umbria </li>
               
             </ul>
      </div>
      <div className="contact-col">

       <form onSubmit={onSubmit} >
        <label >Your Name</label>
        <input type="text" name='name' placeholder='Enter Your Name' required />
        <label>Phone Number</label>
        <input type="tel" name='phone' placeholder='Enter Your Number' required />
        <label >Write your Message Here</label>
        <textarea name="Message" rows={6} placeholder='Enter Your Message' required></textarea>
        <button type='submit' className='btn dark-btn' >Submit <img src={white_arrow} alt="" /></button>
       </form>
       <span>{result}</span>
      </div>

      
    </div>
  )
}

export default Contact
