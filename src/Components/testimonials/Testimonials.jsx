import React from 'react'
import "./testimonials.css"
import AVTR1 from "../../assets/avatar1.jfif"
import AVTR2 from "../../assets/avatar2.jpg"
import AVTR3 from "../../assets/avatar3.jpg"
import AVTR4 from "../../assets/avatar4.jpg"

// import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data =[
  {
    avatar:AVTR1,
    name:"Rajesh Bagul",
    review:"Alishan is a great professional to work with. We worked together in lifestyle stores project and he helped me a lot to get started and also to understand internal processes. His work ethics is immaculate and so easy to work together with. He goes out of his way when you ask for some help and guidance.     Thanks a lot, Alishan ! You made the transition relatively smooth for me and was very helpfull."
  },
  {
    avatar:AVTR2,
    name:"Jishan Pathan",
    review:"Alishan is a hard working person and he is very serious about his work , we both worked on a mini project and I have seen dedication and professionalism towards the work. I would recommend Alishan as a good Developer."
  },
  {
    avatar:AVTR3,
    name:"Shoib Patel",
    review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi vero, sapiente dolore autem sed, doloribus ratione dolorem laborum veritatis eligendi nesciunt iusto modi consequuntur laboriosam expedita. Esse facere sunt corrupti."
  },
  {
    avatar:AVTR4,
    name:"Tina Snow",
    review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi vero, sapiente dolore autem sed, doloribus ratione dolorem laborum veritatis eligendi nesciunt iusto modi consequuntur laboriosam expedita. Esse facere sunt corrupti."
  }
]



const Testimonails = () => {
  return (
    <section id="testimonials">
    <h5>Review from My Colleagues</h5>
    <h2>Testimonials</h2>

    <Swiper className="container testimonials_container"
            // install Swiper modules
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }} >   
     {
      data.map(({avatar, name, review}) => {
        return(
          <SwiperSlide  className="testimonial">
          <div className="client_avatar">
            <img src={avatar} alt="Avatar one" />
          </div>
          <h5 className='client_name'>{name}</h5>
            <small className='client_review'>
              {review}
            </small>
        </SwiperSlide>
        )
      })
     }
      
    </Swiper>
    </section>
  )
}

export default Testimonails
