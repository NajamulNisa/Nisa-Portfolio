import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      link: 'https://www.linkedin.com/in/najam-ul-nisa-432b1a231?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/',
      name: 'Mir Manan',
      role: 'Cyber Security Engineer . Improving open-source projects, one commit at a time.',
      test: 'As a developer and a problem solver, I think Najam is a great collaborative partner to have. I met Najam in some basic javascript & react projects and since then she has drastically progressed in her understanding of the development process. She always has a professional environment and has good audio and video quality which makes it easier to communicate with her.',
    },
    {
      id: 2,
      link: 'https://www.linkedin.com/in/najam-ul-nisa-432b1a231?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/',
      name: 'HUmayun Ashraf',
      role: 'Full-stack developer | Technical Support Engineer at Microverse',
      test: "It was a pleasure collaborating with Najam on different projects. One of the things that I think is special about her is that she never settles, even after completing the projects she finds other resources and strengthens her knowledge. Collaborating with her is easy and comfortable, it's like working with someone you've known for a long period of time.",
    },
   
    {
      id: 3,
      link: 'https://www.linkedin.com/in/najam-ul-nisa-432b1a231?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/',
      name: 'Javid Ali',
      role: 'Full-Stack Web Developer. JavaScript | Rails | React | Redux.',
      test: "I mentored Najam some months ago, and I can say that she is one of those people that you love to work with. She was always interested in what I was trying to teach her, paying attention and always asking questions if something was not clear. When it comes to professional skills, she is really committed to work, always doing her best and going beyond the requirements of the project she's building.",
    },
    {
      id: 4,
      link: 'https://www.linkedin.com/in/najam-ul-nisa-432b1a231?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/',
      name: 'Sameem Iqbal',
      role: 'Software Developer',
      test: "Throughout all our collaborations, Najam has always conducted herself politely and kindly. She comes across as someone that's always willing to help and puts the team ahead of herself. But beneath this, I see a strength and determination to distinguish herself. she's not only someone I highly recommend but is also someone I greatly respect.",
    },
  ];
  return (
    <section id="testmonials">
      <h5>Feedback from my peers</h5>
      <h2>Testimonials</h2>
      <Swiper 
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
          <div className="client__avatar">
            <a href={test.link}>
              <BsLinkedin />
            </a>
          </div>
          <h5 className='client__name'>{test.name}</h5>
          <small className="client__review">{test.test}</small>
        </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials