import './hero.css'
import imgOne from '../../../assets/img/news/boost-productivity.png'
import imgTwo from '../../../assets/img/news/is-cyberpunk.png'
import imgThree from '../../../assets/img/news/boost-productivity.png'
import imgFour from '../../../assets/img/news/is-cyberpunk.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Keyboard, Pagination } from 'swiper';
import { useState } from 'react';
const Hero = () => {
    const [imgList, setImgList] = useState([
        {image: imgOne},
        {image: imgTwo},
        {image: imgThree},
        {image: imgFour}
    ])
    return (
        <div className="container">
            <div className="kanan">
                <h1>Hallo</h1>
            </div>
            <div className="kiri">
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

                    {imgList.map((item) =>
                        <SwiperSlide key={item.id} className="flex flex-col lg:flex-row items-center lg:w-[50vw]">
                            <img src={item.image} alt="" className='img-product h-full w-full lg:h-[70vh] lg:w-[16rem] object-cover'/>
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>
        </div>
    );
}

export default Hero;