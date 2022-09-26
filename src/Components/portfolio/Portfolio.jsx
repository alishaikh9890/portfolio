import React from 'react'
import "./portfolio.css"
import IMG1 from "../../assets/portfolio1.jpg"
import IMG2 from "../../assets/portfolio2.jpg"
import IMG3 from "../../assets/portfolio3.jpg"
import IMG4 from "../../assets/portfolio4.jpg"
import IMG5 from "../../assets/portfolio5.jpg"
import IMG6 from "../../assets/portfolio6.jpg"

const data =[
  {
    id:1,
    image:IMG1,
    title:"Lifestyle stores Clone",
    github:"https://github.com/alishaikh9890/lifestylestores.com",
    demo:"https://lifestylestoresclone.netlify.app/"
  },
  {
    id:1,
    image:IMG2,
    title:"Bigbasket Clone",
    github:"https://github.com/alishaikh9890/bigBasketCloneProject",
    demo:"https://bigbasketteam11clone.netlify.app/"
  },  {
    id:1,
    image:IMG3,
    title:"Medium Clone",
    github:"https://github.com/alishaikh9890/medium-clone",
    demo:"https://the-medium-clone.netlify.app/"
  },  {
    id:1,
    image:IMG4,
    title:"ACKO Clone",
    github:"https://github.com/alishaikh9890/ACKO.com_Clone",
    demo:"www.google.com"
  },
  {
    id:1,
    image:IMG5,
    title:"Expernse Tracker",
    github:"https://github.com",
    demo:"www.google.com"
  },
  {
    id:1,
    image:IMG6,
    title:"IMDB Search",
    github:"https://github.com",
    demo:"www.google.com"
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My  Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({id, image, title, github, demo}) =>{
            return(
              <article key={id} className='portfolio_item'>
              <div className="portfolio_item-image">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
              <a href={github} className='btn' target="_blank">Github</a>
              <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
