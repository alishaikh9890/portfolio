import React from 'react'
import CV from "../../assets/CV.pdf"
import "./header.css";
import { SiReaddotcv } from "react-icons/si";
import { MdOutlineChat } from "react-icons/md";


const CTA = () => {
  return (
    <div className="cta">
      <a href={CV}  className='btn' target = "_blank" rel="noopener noreferrer"><SiReaddotcv /> My Resume</a>
      <a href="#contact" className='btn btn-primary'><MdOutlineChat /> Let's Talk</a>

      
      </div>
  )
}

export default CTA