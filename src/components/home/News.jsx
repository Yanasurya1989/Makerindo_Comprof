import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, FreeMode, Keyboard } from "swiper";
import SeeMoreComponent from '../career/seemore/SeeMoreComponent';
import 'swiper/css';
import axios from "axios";

export default function News() {
  
  const defaultText = "lorem";
  
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
        <h1 className="animate_animated animate__fadeIn  font-bold text-gradient-primary text-[20vh] opacity-10 lg:text-[30vh] leading-none">
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
                <img src={data.image} alt="" className='masonOne img-product h-[50vh] w-full lg:h-[70vh] lg:w-[16rem] object-cover'/>
                <div className="h-full p-4 lg:p-12">
                  <div className="my-auto content-start">
                    <h3 className="font-bold text-lg mb-2 lg:text-4xl lg:mb-8">{data.title}</h3>
                    <p className="montserrat text-sm lg:text-base content-start text-left">
                      <SeeMoreComponent item={data} content={data.description} maxLength={300}/>
                    </p>
                    {/* <a href="#">read more</a> */}
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