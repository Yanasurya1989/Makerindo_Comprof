import { Autoplay, Keyboard, Pagination } from 'swiper';
import ImgHero from '../../assets/img/hero/4.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import SeeMoreComponent from '../seemore/SeeMoreComponent';

export default function Hero({tagline}){
    const [data, setData] = useState(null);  
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_APP_DOMAIN}/newsroom`)
        .then((response) => setData(response.data))
        .catch((error) => console.error('Error fetching data:', error));    
    }, []); 
    return (
        <>
        <div className="hero min-h-screen">
        <span className="hero-backdrop relative text text-2xl md:text-8xl hidden lg:block">MAKE<br />RINDO</span>
            <div className="hero-content flex-col lg:flex-row-reverse mt-0">
                
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
                        {data ? data.news.map((data, index) => (
                        <SwiperSlide key={index}>
                            <img src={data.image} className="max-w-sm rounded-lg shadow-2xl ml-36 h-[50vh] lg:h-[60vh] pb-10" />
                            <div className="h-full pb-6 lg:pb-4">
                                <div className="content-center">
                                    <h3 style={{fontFamily:'roboto'}} className="font-bold text-lg lg:text-1xl text-center pl-36">
                                    <SeeMoreComponent item={data} content={data.title} maxLength={15} />
                                    </h3>
                                    
                                    {/* <p style={{fontFamily:'roboto'}} className="text-center montserrat text-sm lg:text-base">
                                    <SeeMoreComponent item={data} content={data.description} maxLength={30} />
                                    </p> */}
                                </div>
                            </div>
                        </SwiperSlide>
                        )) : ''}
                </Swiper>
                
                 
                {/* <img src={ImgHero} className="max-w-sm rounded-lg shadow-2xl ml-9 h-[50vh] lg:h-[80vh]" /> */}

                <div>
                    <h1 className="hero-text hero-title lg:hero-subtitle text-4xl lg:text-8xl font-bold mb-0 lg:mb-5">MAKERINDO</h1>
                    <h1 className="hero-text hero-title lg:hero-subtitle text-3xl lg:text-6xl font-bold">Prima Solusi</h1>
                    <p className="py:0 lg:py-6 hero-title lg:hero-subtitle text-2xl lg:text-4xl">Makes IT For Better</p>                    
                </div>
            </div>
            {/* <div className='block lg:hidden'>
                <h1 className="hero-text hero-title lg:hero-subtitle text-4xl lg:text-8xl font-bold mb-0 lg:mb-5">MAKERINDO</h1>
                <h1 className="hero-text hero-title lg:hero-subtitle text-3xl lg:text-6xl font-bold">Prima Solusi</h1>
                <p className="py:0 lg:py-6 hero-title lg:hero-subtitle text-2xl lg:text-4xl">Makes IT For Better</p>                    
            </div> */}
        </div>        
        </>
    );
}