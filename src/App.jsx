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
      <Header /> 
      <Nav />
      <About />
      <Features/>
      <Exp />
      <Experience />
      {/* <Services /> */}
      <Portfolio />
      <Testimonails />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
