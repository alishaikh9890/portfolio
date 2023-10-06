import React from 'react'
import About from './Components/about/About'
import Contact from './Components/contact/Contact'
import Experience from './Components/experience/Experience'
// import Services from './Components/services/Services'
import Footer from './Components/footer/Footer'
import Navbar from "./Components/navbar/Navbar"
import Header  from './Components/header/Header'
import Nav from './Components/nav/Nav'
import Portfolio from './Components/portfolio/Portfolio'
import Testimonails from './Components/testimonials/Testimonials'

const App = () => {
  return (
    <div>
      <Navbar />
      <Header /> 
      <Nav />
      <About />
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
