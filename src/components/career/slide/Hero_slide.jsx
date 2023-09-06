import React from 'react';
import Slider from 'react-slick';
import slideOne from '../../assets/img/hero/3.png'
import slideTwo from '../../assets/img/hero/4.jpg'
import './style.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const slides = [
  { id: 1, image: 'url_ke_gambar_1.jpg', caption: 'Slide 1' },
  { id: 2, image: 'url_ke_gambar_2.jpg', caption: 'Slide 2' },
  { id: 3, image: 'url_ke_gambar_3.jpg', caption: 'Slide 3' },
];

const HeroSlide = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  

  return (
    <div className="hero-slider">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="slide">
            {/* <img src={slide.image} alt={slide.caption} />
            <div className="caption">{slide.caption}</div> */}
            <div className='hero min-h-full'>
              <div className='hero-content flex-col lg:flex-row-reverse'>
                <img src={slideTwo} className="max-w-sm rounded-lg shadow-2xl h-[55vh] lg:h-[70vh] m-20" />
                <div>
                    <h1 className="hero-text hero-title lg:hero-subtitle text-4xl lg:text-8xl font-bold mb-0 lg:mb-5">MAKERINDO</h1>
                    <h1 className="hero-text hero-title lg:hero-subtitle text-3xl lg:text-6xl font-bold">Prima Solusi</h1>
                    <p className="py:0 lg:py-6 hero-title lg:hero-subtitle text-2xl lg:text-4xl">Makes IT For Better</p>                    
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlide;
