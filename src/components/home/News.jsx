import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, FreeMode, Keyboard } from "swiper";
import 'swiper/css';
import axios from "axios";

export default function News() {
  
  const defaultText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  
  // fetching start
  const [data, setData] = useState(null);

  useEffect(() => {
    // Penggunaan useEffect akan memastikan pemanggilan API hanya terjadi sekali saat komponen dimuat.
    axios.get(`${import.meta.env.VITE_APP_DOMAIN}/newsroom`)
      .then((response) => setData(response.data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []); 
  // fetching end

  console.info(data)

  return (
    <div id="news" className="lg:h-[80vh] flex flex-col-reverse lg:flex-col relative py-8 lg:py-16">
      <div className="absolute top-0 bottom-0 h-full flex items-center w-full">
        <h1 className="animate_animated animate__fadeIn text-backdrop font-bold text-gradient-primary text-[20vh] opacity-20 lg:text-[30vh] lg:opacity-40 leading-none">
        M-NEWS <br />ROOM
        </h1>
      </div>
      <div className="news-slider w-full animate_animated animate__fadeInDown ">
        <Swiper
          slidesPerView={"1.5"}
          loop={true}
          spaceBetween={30}
          freeMode={true}
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          mousewheel={true}
          modules={[Mousewheel, FreeMode, Keyboard]}
          className="mySwiper mb-4">
            {data ? data.news.map((data, index) =>(
              <SwiperSlide key={index} className="flex flex-col lg:flex-row items-center lg:w-[50vw]">
                <img src={data.image} alt="" className='img-product h-[50vh] w-full lg:h-[70vh] lg:w-[16rem] object-cover'/>
                <div className="h-full p-4 lg:p-12">
                  <div className="my-auto">
                    <h3 className="font-bold text-lg mb-2 lg:text-4xl lg:mb-8">{data.title}</h3>
                    <p className="montserrat text-sm lg:text-base">{data.description}</p>
                    <a href="#">read more</a>
                  </div>
                </div>
              </SwiperSlide>
            )) : ''}
            {/* {newsList.map((item) =>
              <SwiperSlide key={item.id} className="flex flex-col lg:flex-row items-center lg:w-[50vw]">
                <img src={item.image} alt="" className='img-product h-[50vh] w-full lg:h-[70vh] lg:w-[16rem] object-cover'/>
                <div className="h-full p-4 lg:p-12">
                  <div className="my-auto">
                    <h3 className="font-bold text-lg mb-2 lg:text-4xl lg:mb-8">{item.title}</h3>
                    <p className="montserrat text-sm lg:text-base">{item.description}</p>
                    <a href="#">read more</a>
                  </div>
                </div>
              </SwiperSlide>
            )} */}
        </Swiper>
      </div>
      <h4 className="text-gradient-primary font-bold text-4xl mb-4 lg:text-7xl animate_animated animate__backInUp">NEWSROOM</h4>
    </div>
  );
}