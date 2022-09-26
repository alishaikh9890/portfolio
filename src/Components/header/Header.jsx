import React from 'react'
import "./header.css"
import CTA from "./CTA"
import ME1 from "../../assets/ME1.png"
import  HeaderSocials from "./headerSocials"


const Header = () => {
  return (
   <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Alishan Shaikh</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        
        <div className="me">
          {/* <img src={ME1} alt="ME" /> */}
          <img src="https://camo.githubusercontent.com/5ddf73ad3a205111cf8c686f687fc216c2946a75005718c8da5b837ad9de78c9/68747470733a2f2f7468756d62732e6766796361742e636f6d2f4576696c4e657874446576696c666973682d736d616c6c2e676966" 
          alt="ME" />
        </div>

        <a href="#contact" className="scroll_down">Scroll Down</a>
      </div>
   </header>
  )
}

export default Header
