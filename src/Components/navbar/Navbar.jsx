import React from 'react'
import "./navbar.css"

function Navbar() {
  return (
    <div className='navbar'>
      <div className="name"><h2>Alishan Shaikh</h2></div>
      <div className="hireme"> <a href="#contact" className='hire' >Hire Me ➥</a></div>

    </div>
  )
}

export default Navbar