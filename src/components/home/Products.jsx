import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper';
import '../career/hover/Hoverstyle.css';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Products() {
  const [isHovering, setIsHovering] = useState(false);

  const handleHover = () => {
    setIsHovering(true);
    console.log("mouse in")
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    console.log("mouse out")
  };

  const bitanic = 'http://bitanic.site/';
  const drivy = 'https://drivy.online/';
  const makerindo_edu = 'http://makeredu.id/';

  // fetching start
  const [data, setData] = useState(null);
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_APP_DOMAIN}/our-product`)
      .then((response) => setData(response.data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []); 
  // fetching end

  return (
    <div 
      id="products" 
      className="h-full lg:h-[100vh] py-16 animate__animated animate__fadeIn hoverable product"
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}>
      
      <h4 className="font-bold text-5xl text-center montserrat mb-12 lg:mb-2">Our Products</h4>
      
      <Swiper
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        keyboard={{
          enabled: true
        }}
        spaceBetween={10}
        autoplay={{
          delay:3000,
          disableOnInteraction:(false)
        }}
        scrollbar={{draggable: true}}
        onSwiper={(Swiper) => console.log(Swiper)}
        modules={[Keyboard, Pagination, Autoplay]} 
        className="mySwiper mb-4">
          
        {data && data.product.map((data, index) => (
          <SwiperSlide key={index}>
            <img  src={data?.image} alt="" className='masonOne img-product'/>
            {isHovering && <a 
              href={data.link}
              target='_blank'
              rel='noopener noreferrer' 
              className="hidden-content"
            >              
              <button className='btn btn-info flex center'>
                Show detil
              </button>              
            </a>}              
          </SwiperSlide> 
        ))}  
      </Swiper>
    </div>
  )
}

