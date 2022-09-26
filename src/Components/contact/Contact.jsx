import React from 'react'
import "./contact.css"
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_d8gt4bg', 'template_ptqekti', form.current, 'R5UKAlTHsQqp16BE1')
    
    e.target.reset()

    };
    
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">

          <article className='contact_option'>
            <MdOutlineEmail className='contact_option-icon'/>
             <h4>Email</h4>
             <h5>alishanshaikh9890@gmail.com</h5>
             <a href="mailto:alishanshaikh9890@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className='contact_option'>
            <RiMessengerLine className='contact_option-icon'/>
             <h4>Linkedind</h4>
             <h5>alishan-shaikh</h5>
             <a href="https://www.linkedin.com/in/alishan-shaikh" target="_blank">Send a message</a>
          </article>

          <article className='contact_option'>
            <BsWhatsapp className='contact_option-icon'/>
             <h4>WhatsApp</h4>
             <h5>+1234567890</h5>
             <a href="https://api.whatsapp.com/send?phone+919604434132" target="_blank">Send a message</a>
          </article>

        </div>
        {/* END OF CONTACT OPTION */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" id="" cols="30" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>

      </div>
      </section>
  )
}

export default Contact