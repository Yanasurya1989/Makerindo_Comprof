import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Navigation, Pagination } from 'swiper';

import imgBitanic from '../assets/img/products/bitanic.png';
import imgDrivy from '../assets/img/products/drivy.png';
import imgIot from '../assets/img/products/iot-kit.png';

import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Products() {
  return (
    <div id="products" className="h-full lg:h-[100vh] py-16">
      <h4 className="font-bold text-5xl text-center montserrat mb-12 lg:mb-2">Our Products</h4>
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
          <img src={imgBitanic} alt="" className='img-product'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgDrivy} alt="" className='img-product'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgIot} alt="" className='img-product'/>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

