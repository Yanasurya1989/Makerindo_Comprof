import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, FreeMode, Keyboard } from "swiper";
import imgNews1 from '../assets/img/news/is-cyberpunk.png'
import imgNewsDefault from '../assets/img/news/is-cyberpunk.png'
import SeeMoreComponent from '../career/seemore/SeeMoreComponent';
import 'swiper/css';
import axios from "axios";
import '../career/detil/Detil.css'

export default function News() {
  
  const defaultText = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus nemo debitis distinctio est unde id pariatur! Quas excepturi sunt magni illum, quidem aliquid dignissimos nemo recusandae inventore quasi similique aspernatur soluta atque nostrum eum qui maiores consectetur laudantium neque eveniet maxime ut sint? Veritatis molestiae deleniti doloremque sapiente quo eum placeat aperiam ut neque nobis exercitationem fugit temporibus dolorum, dignissimos, laborum corporis, quasi minus quaerat animi. Vel, unde. Molestias similique corrupti consequuntur impedit sed harum accusamus eaque a provident, sequi, consequatur, ex modi atque voluptatum. Autem saepe ipsa odit vel quam? Aspernatur aliquam quibusdam expedita velit aliquid sapiente tempora sint numquam ipsa ab rem unde ut quis doloribus, dolores dolore maxime doloremque natus nulla iure. Animi odit pariatur aspernatur modi ab aliquid iusto minima esse, delectus dolorum repudiandae quaerat a possimus sit neque sint accusantium maxime blanditiis. Culpa, labore? Minus rem iure unde sequi est tempora quibusdam totam, autem nulla quo impedit enim veniam laboriosam magni sapiente maiores eveniet aperiam eos, id tempore qui reiciendis deserunt. Magnam, nemo molestias totam harum commodi quia suscipit dolores consectetur placeat recusandae eius amet veniam perferendis minus quasi fugiat. Accusamus omnis vero a magnam expedita esse consectetur impedit aliquam eos, veniam et delectus, explicabo obcaecati sapiente in alias similique nihil voluptate inventore. Cumque suscipit inventore labore voluptatum animi blanditiis, mollitia in id delectus exercitationem dolor quod accusantium aliquid rem voluptate vero nam consectetur numquam culpa! Quis voluptates nemo, iure vitae dolorum mollitia esse nesciunt enim natus, nisi, ad consectetur! Illo delectus ipsa error voluptatum officiis blanditiis! Tempore accusamus excepturi provident quasi vel illum quae non. Ipsum consequuntur optio laborum ullam, temporibus dolorum aut autem iusto numquam dolores dolore quam architecto libero sequi nesciunt impedit! Cupiditate minus, pariatur animi nisi amet praesentium rerum consequatur sit possimus eum. Molestias ducimus iure velit, sint praesentium quae accusamus.";

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
    <div id="news" className="h-full lg:h-[80vh] flex flex-col-reverse lg:flex-col relative mt-10 mb-20">
      <div className="absolute top-0 bottom-0 h-full flex items-center w-full">
        <h1 className="animate_animated animate__fadeIn  font-bold text-gradient-primary text-[10vh] opacity-10 lg:text-[30vh] leading-none">
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
                  <div className="content-start">
                    <h3 style={{fontFamily:'roboto'}} className="font-bold text-lg mb-2 lg:text-4xl lg:mb-8">{data.title}</h3>
                    <p style={{fontFamily:'roboto'}} className="text-justify montserrat text-sm lg:text-base">
                      <SeeMoreComponent item={data} content={data.description} maxLength={300} />
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            )) : ''}

            {/* {newsList.map((item) =>
              <SwiperSlide key={item.id} className="flex flex-col lg:flex-row items-center lg:w-[50vw]">
                <img src={item.image} alt="" className='img-product h-full w-full lg:h-[70vh] lg:w-[16rem] object-cover'/>
                <div className="h-full pl-10">
                  <div className="my-auto">
                    <h3 className="font-bold text-lg mb-2 lg:text-4xl lg:mb-8">{item.title}</h3>
                    <p className="mx-0 px-0 text-justify montserrat text-sm lg:text-base text-elipsis  sm:max-w-50 md:max-w-50 lg:max-w-100">
                      <SeeMoreComponent item={data} content={item.description} maxLength={400}/>
                    </p>
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