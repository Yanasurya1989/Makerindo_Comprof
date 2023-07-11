import React from 'react';
import HeroImage from "../assets/img/drivy.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Navigation, Pagination } from 'swiper';

export default function Hero({ tagline }) {
  return (
    <section id="hero" className="hero">
      <span className="hero-backdrop z-10">MAKE<br />RINDO</span>
      <div className="hero-content flex-col lg:flex-row-reverse justify-between w-full z-50">

        {/* <img src={HeroImage} className="max-w-sm rounded-lg shadow-2xl max-h-screen h-[85vh] mx-auto hidden md:block" /> */}

        <Swiper
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          keyboard={{
            enabled: true
          }}
          modules={[Keyboard, Pagination]} 
          className="mySwiper mb-4">
          <SwiperSlide>
            <img src={HeroImage} alt="" className='max-w-sm rounded-lg shadow-2xl max-h-screen h-[85vh] mx-auto hidden md:block'/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={HeroImage} alt="" className='max-w-sm rounded-lg shadow-2xl max-h-screen h-[85vh] mx-auto hidden md:block'/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={HeroImage} alt="" className='max-w-sm rounded-lg shadow-2xl max-h-screen h-[85vh] mx-auto hidden md:block'/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={HeroImage} alt="" className='max-w-sm rounded-lg shadow-2xl max-h-screen h-[85vh] mx-auto hidden md:block'/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={HeroImage} alt="" className='max-w-sm rounded-lg shadow-2xl max-h-screen h-[85vh] mx-auto hidden md:block'/>
          </SwiperSlide>
        </Swiper>

        <div className="hero-text text-center md:text-left">
          <h1 className="text-6xl md:text-8xl font-black hero-title">MAKERINDO</h1>
          <h1 className="text-4xl md:text-7xl font-black text-white hero-subtitle">PRIMA SOLUSI</h1>
          <p className="p-2 hero-tagline uppercase">{tagline}</p>
        </div>
      </div>
    </section>
  )
}