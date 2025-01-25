import React from 'react'
import "./nav.css"
import {AiOutlineHome} from "react-icons/ai"
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { GiSkills } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";
import { VscFeedback } from "react-icons/vsc";
import { MdOutlineChat } from "react-icons/md";
import { SlBriefcase } from "react-icons/sl";
import { VscFolderLibrary } from "react-icons/vsc"




// import { RiServiceLine } from "react-icons/ri"
import { BiMessageSquareDetail } from "react-icons/bi"
import {useState} from "react";

const Nav = () => {
  const [activeNav, setActiveNav]= useState("#")
  return (
    <div>
    <nav id="simple-list-example" > 
      <a href="#section1" > <AiOutlineHome /></a>
      <a href="#section2" > <AiOutlineUser /></a>
      <a href="#section3" > <SlBriefcase /></a>
      <a href="#section4" > <GiSkills /></a>
      <a href="#section5" > <VscFolderLibrary color='white' /></a>
      <a href="#section6" > <VscFeedback color='white' /></a>
      {/*  <a href="#services" onClick={() => setActiveNav('#services')} ><RiServiceLine /></a> */}
      <a href="#section7" ><MdOutlineChat /></a>

      </nav>






    </div>
   )
}

export default Nav
