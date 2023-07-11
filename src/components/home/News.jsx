import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import imgNews1 from "../assets/img/boost-productivity.png";
import imgNewsDefault from "../assets/img/is-cyberpunk.png";
import { Mousewheel, FreeMode, Keyboard } from "swiper";

import 'swiper/css';

export default function News() {
  const defaultText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  const [newsList, setNewsList] = useState([
    {
      id: "1",
      image: imgNews1,
      title: "Boost Productivity",
      description: defaultText
    },
    {
      id: "2",
      image: imgNewsDefault,
      title: "Is Cyberpunk",
      description: defaultText
    },
    {
      id: "3",
      image: imgNewsDefault,
      title: "Is Cyberpunk",
      description: defaultText
    },
    {
      id: "4",
      image: imgNewsDefault,
      title: "Is Cyberpunk",
      description: defaultText
    }
  ]);

  return (
    <div id="news" className="lg:h-[100vh] flex flex-col-reverse lg:flex-col relative py-8 lg:py-16">
      <div className="absolute top-0 bottom-0 h-full flex items-center w-full">
        <h1 className="text-backdrop font-bold text-gradient-primary text-[20vh] opacity-20 lg:text-[30vh] lg:opacity-40 leading-none">
        M-NEWS <br />ROOM
        </h1>
      </div>
      <div className="news-slider w-full">
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
            {newsList.map((item) =>
              <SwiperSlide key={item.id} className="flex flex-col lg:flex-row items-center lg:w-[50vw]">
                <img src={item.image} alt="" className='img-product h-[50vh] w-full lg:h-[70vh] lg:w-[16rem] object-cover'/>
                <div className="h-full p-4 lg:p-12">
                  <div className="my-auto">
                    <h3 className="font-bold text-lg mb-2 lg:text-4xl lg:mb-8">{item.title}</h3>
                    <p className="montserrat text-sm lg:text-base">{item.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            )}
        </Swiper>
      </div>
      <h4 className="text-gradient-primary font-bold text-4xl mb-4 lg:text-7xl">NEWSROOM</h4>
    </div>
  );
}