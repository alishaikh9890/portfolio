import React from 'react'
import "./about.css"
import ME from "../../assets/about-me.jpg"
import { FaAward } from "react-icons/fa"
import { FaGraduationCap } from "react-icons/fa"
import { VscFolderLibrary } from "react-icons/vsc"

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        {/* <div className="about_me"> */}
          <div className="about_me-image">
             <img src={ME} alt="About Image" />
             {/* <img src="https://camo.githubusercontent.com/61491d59e71fec5c794945fed916a4a682b6c0404fc31f30b08a0d919c558404/68747470733a2f2f696d616765732e73717561726573706163652d63646e2e636f6d2f636f6e74656e742f76312f3537363966633430316236333162616231616464623261622f313534313538303631313632342d5445363451474b524a4738535741495553374e532f6b6531375a77644742546f6464493870446d34386b506f73776c7a6a53564d4d2d53784f703743563539425a772d7a505067646e346a557756634a45315a7657515578776b6d794578676c4e714770304976544a5a616d574c49327a76595748384b332d735f3479737a63703272795449304871544f6161556f68724938504936465879386339505774426c7141566c555335697a7064634958445a71445976707252715a32395077306f2f636f64696e672d667265616b2e676966"
              alt="About Image" /> */}
          {/* </div>         */}
        </div>

        <div className="about_content">
          <div className="about_cards">

            
          <article className='about_card'>
              <FaGraduationCap className='about_icon'/>
              <h5>Education</h5>
              <small>BE Mech - 2022</small>
            </article>

            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>0-1 Years 
                {/* Working */}
                </small>
            </article>

            <article className='about_card'>
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>4 Completed</small>
            </article>
            
          </div>

          <p>
          An aspiring Full Stack Web Developer learning
MERN Stack web development. Skilled in
HTML, CSS, JavaScript, data structure. Highly
passionate about building web applications
and always enthusiastic about learning new
things.

          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About


