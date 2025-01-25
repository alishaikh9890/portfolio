import React from 'react'
import About from './Components/about/About'
import Contact from './Components/contact/Contact'
import Experience from './Components/experience/Experience'
import Exp from './Components/exp/Exp'
// import Services from './Components/services/Services'
import Footer from './Components/footer/Footer'
import Navbar from "./Components/navbar/Navbar"
import Header  from './Components/header/Header'
import Nav from './Components/nav/Nav'
import Portfolio from './Components/portfolio/Portfolio'
import Testimonails from './Components/testimonials/Testimonials'
import Features from './Components/features/features'


const App = () => {
  return (
    <div>

 <Navbar />   
   <Nav />
      <div data-bs-smooth-scroll="true"  data-bs-spy="scroll" data-bs-target="#simple-list-example">
          
        <div id="section1"><Header /></div>
        <div id="section2"><About /></div>
        <div> <Features/> </div>
        <div id="section3"><Exp /></div>
        <div id="section4"><Experience /></div>
        <div id="section5"> <Portfolio /></div>
        <div id="section6"><Testimonails /></div>
        <div id="section7"><Contact /></div>
        <div id="section8"><Footer /> </div>
            
            
            
            
            
            {/* <Services /> */}
           
            
            
            
      </div>
    </div>
  )
}

export default App
