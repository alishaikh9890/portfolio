import React from 'react'
import "./header.css"
import CTA from "./CTA"
import ME1 from "../../assets/Focus.gif"
import  HeaderSocials from "./headerSocials"


const Header = () => {
  return (
   <header id="header">
      <div className="container header_container">
        <div className='w-2' >
          <h4>Hello<span className="emoji" >👋</span>  I'm </h4>
          <h1>Alishan Shaikh</h1>
          <h3 className="text-light">Frontend Developer</h3>
          <CTA />
        </div>
        <HeaderSocials />

        
        <div className="me w-2">
          {/* <img src={ME1} alt="ME" /> */}
          <img src={ME1} 
          alt="ME" />
        </div>
        
        
        
{/* 
        <a href="#contact" className="scroll_down">Scroll Down ⟶</a>*/}
      </div>
   </header>
  )
}

export default Header
