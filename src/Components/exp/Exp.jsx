import React from "react";
import "./exp.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Exp = () => {
  return (
    <section id="experience">
      <h5>What Experience I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience-frontend">
          <h3>MERN Stack Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Full Stack Developer</h4>
                <small className="text-light">Red & White Multimedia Education</small>
              </div>
            </article>

          </div>
        </div>


       
        <div className="experience-frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Frontend Developer</h4>
                <small className="text-light">Ask Digital Solution</small>
              </div>
            </article>

          </div>
        </div>

        {/* backend detials now  */}

        <div className="experience_backend">
          <h3>Frontend Developement</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Frontend Engineer</h4>
                <small className="text-light">muVerity Cunsultancy Services</small>
              </div>
            </article>

           
            {/* <article className='experience_details'>
  <BsPatchCheckFill className='experience_details-icon' />
  <div>
    <h4>Python</h4>
  <small className='text-light'>Intermediate</small>
  </div>
</article> */}
          </div>
        </div>
      </div>


    </section>
  );
};

export default Exp;
