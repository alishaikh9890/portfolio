import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import { BsGithub } from "react-icons/bs";
import { IoLogoTwitter } from "react-icons/io";
import { FiInstagram } from "react-icons/fi";

import "./header.css"


const HeaderSocials = () => {
  return (
   <div className="header_socials">
      <a href="https://www.linkedin.com/in/alishan-shaikh/" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
      <a href="https://github.com/alishaikh9890" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
      <a href="https://twitter.com/Alishan9890" target="_blank" rel="noopener noreferrer"><IoLogoTwitter /></a>
      <a href="https://www.instagram.com/shaikhalishan9890/" target="_blank" rel="noopener noreferrer"><FiInstagram /></a>
     
   </div>
  )
}

export default HeaderSocials