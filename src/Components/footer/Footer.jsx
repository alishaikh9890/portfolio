import React from 'react'
import "./footer.css"
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <footer id="footer">
      <a href="#header" className='footer_logo'>Alishan</a>

      <ul className='permalinks' >
      <li><a href="#header">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#testimonials">Testimonials</a></li>
      <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://facebook.com" target="_blank" rel="noreferrer noopener"><FaFacebookF /></a>
        <a href="https://www.instagram.com/shaikhalishan9890/" target="_blank" rel="noreferrer noopener"><FiInstagram /></a>
        <a href="https://twitter.com/Alishan9890" target="_blank" rel="noreferrer noopener"><IoLogoTwitter /></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Alishan shaikh. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
