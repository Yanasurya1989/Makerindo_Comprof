import React, { useEffect, useState } from 'react';
// import HeroImage from "../assets/img/drivy.png"
import { Swiper, SwiperSlide, useSwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Keyboard, Navigation, Pagination } from 'swiper';
import Image from '../career/Image';
import { useQuery } from "react-query";
import axios from 'axios';
import Socials from './Socials';
import { split } from 'postcss/lib/list';

export default function Hero({ tagline }) {  

  // fetching start
  const [data, setData] = useState(null);  
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_APP_DOMAIN}/hero`)
    .then((response) => setData(response.data))
    .catch((error) => console.error('Error fetching data:', error));    
  }, []); 
  // fetching end
  
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  
  return (    
    <>
      <section id="hero" className="hero">
      <span className={`${isScrolled ? 'scrolledKanan' : ''} hero-backdrop z-10 animate_animated animate__backOutRight`}>MAKE<br />RINDO</span>
      <div className="hero-content flex-col md:flex-col-reverse mx-0 lg:flex-row-reverse justify-between w-full z-50">
        <Swiper
          pagination={{
            clickable: true,
          }}
          keyboard={{
            enabled: true
          }}
          spaceBetween={10}
          autoplay={{
            delay:2000,
            disableOnInteraction:(false)
          }}
          
          scrollbar={{draggable: true}}
          onSwiper={(Swiper) => console.log(Swiper)}
          onSlideChange={()=> console.log('slide change')}
          modules={[Keyboard, Pagination, Autoplay]} 
          className="mySwiper mb-4">
            {data && data.slider.map((data, index) => (
              <SwiperSlide key={index} className={`container ${isScrolled ? 'scrolledKanan' : ''}`}>
              <img src={data?.image} alt="" className='max-w-sm rounded-lg shadow-2xl max-h-screen mx-auto hidden md:block'/>
            </SwiperSlide>
            ))}             
        </Swiper>

        <div className="hero-text text-left md:text-center ">          
          <h1 className={`container ${isScrolled ? 'scrolledKiri' : ''} text-6xl md:text-8xl font-black hero-title uppercase`}>{data?.title?.split(' ')[0]}</h1>
          <h1 className={`container ${isScrolled ? 'scrolledKiri' : ''} text-4xl md:text-7xl font-black text-white hero-subtitle uppercase`}>{data?.title?.split(' ')[1]} {data?.title?.split(' ')[2]}</h1>
          <p className={`container ${isScrolled ? 'scrolledKiri' : ''} p-6 hero-tagline uppercase`}>{data?.subtitle}</p>
        </div>
      </div>
    </section>
    <Socials/>
    </>
  )
}