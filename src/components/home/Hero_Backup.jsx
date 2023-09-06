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
  
  // const [isScrolled, setIsScrolled] = useState(false);
  
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 5) {
  //       setIsScrolled(true);
  //     } else {
  //       setIsScrolled(false);
  //     }
  //   };
    
  //   window.addEventListener('scroll', handleScroll);
    
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);
  
  
  return (    
    <>
      <section id="hero" className="hero">
      <span className="hero-backdrop relative text text-2xl md:text-8xl">MAKE<br />RINDO</span>
      {/* <span className={`${isScrolled ? 'scrolledKanan' : ''} hero-backdrop z-10 animate_animated animate__backOutRight`}>MAKE<br />RINDO</span> */}
      {/* <div className="hero-content flex-col md:flex-col-reverse mx-0 lg:flex-row-reverse justify-between w-full z-50"> */}
      <div className='absolute grid grid-cols-2 lg:grid-cols-1'>
        <div className="hero-content flex-col lg:flex-row-reverse">
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
                // <SwiperSlide key={index} className={`container ${isScrolled ? 'scrolledKanan' : ''}`}>
                <SwiperSlide key={index}>
                {/* <img src={data?.image} alt="" className='masonOne max-w-sm rounded-lg shadow-2xl max-h-screen mx-auto  md:block'/> */}
                <img src={data?.image} alt="img product" className='lg:h-[75vh] max-w-sm mx-auto rounded-lg shadow-2xl absolute lg:relative'/>
              </SwiperSlide>
              ))}             
          </Swiper>

          <div className="hero-text text-left md:text-center absolute lg:relative mt-0">          
            {/* <h1 className="text-6xl md:text-8xl sm:text-sm font-black hero-title uppercase block lg:hiden">{data?.title?.split(' ')[0]}</h1> */}
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-black hero-title uppercase block md:hiden">{data?.title?.split(' ')[0]}</h1>
            {/* <h1 className={`container ${isScrolled ? 'scrolledKiri' : ''} text-6xl md:text-8xl sm:text-8xl font-black hero-title uppercase`}>{data?.title?.split(' ')[0]}</h1> */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white hero-subtitle uppercase">{data?.title?.split(' ')[1]} {data?.title?.split(' ')[2]}</h1>
            {/* <h1 className="text-4xl md:text-7xl sm:text-7xl font-black text-white hero-subtitle uppercase">{data?.title?.split(' ')[1]} {data?.title?.split(' ')[2]}</h1> */}
            {/* <p className={`container ${isScrolled ? 'scrolledKiri' : ''}  hero-tagline uppercase`}>{data?.subtitle}</p> */}
            <p className="hero-tagline text-2xl md:text-4xl lg:text-4xl pt-3 font-black">{data?.subtitle}</p>
          </div>
        </div>
      </div>
      </section>
      <section>
        <Socials/>
      </section>
    </>
  )
}