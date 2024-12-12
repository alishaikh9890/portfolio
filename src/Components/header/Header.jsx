import React from 'react'
import "./header.css"
import CTA from "./CTA"
import ME1 from "../../assets/Designer.gif"
import  HeaderSocials from "./headerSocials"


const Header = () => {
  return (
   <header id="header">
      <div className="container header_container">
        <h4>Hello<span className="emoji" >👋</span>  I'm </h4>
        <h1>Alishan Shaikh</h1>
        <h3 className="text-light">Frontend Developer</h3>
        <CTA />
        <HeaderSocials />

        
        <div className="me">
          {/* <img src={ME1} alt="ME" /> */}
          <img src={ME1} 
          alt="ME" />
        </div>
        
        
        

        <a href="#contact" className="scroll_down">Scroll Down ⟶</a>
      </div>
   </header>
  )
}

export default Header
