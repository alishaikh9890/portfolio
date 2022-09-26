import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import { BsGithub } from "react-icons/bs";
import { IoLogoTwitter } from "react-icons/io";
import { FiInstagram } from "react-icons/fi";

import "./header.css"


const HeaderSocials = () => {
  return (
   <div className="header_socials">
      <a href="linkedin.com/in/alishan-shaikh" target="_blank"><BsLinkedin /></a>
      <a href="https://github.com/alishaikh9890" target="_blank"><BsGithub /></a>
      <a href="https://twitter.com/Alishan9890" target="_blank"><IoLogoTwitter /></a>
      <a href="https://www.instagram.com/shaikhalishan9890/" target="_blank"><FiInstagram /></a>
     
   </div>
  )
}

export default HeaderSocials