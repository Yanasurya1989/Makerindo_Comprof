import Masonry from 'react-masonry-css'

import imgDesktop from '../assets/img/gallery/desktop-programming.png';
import imgIot from '../assets/img/gallery/iot.png';
import imgMobile from '../assets/img/gallery/mobile-programming.png';
import imgEmbedded from '../assets/img/gallery/embedded-system.png';
import imgMachine from '../assets/img/gallery/machine-learning.png';
import imgProduct from '../assets/img/gallery/product-design.png';
import imgUi from '../assets/img/gallery/ui-ux.png';
import imgWeb from '../assets/img/gallery/web-programming.png';

export default function Gallery() {
  return (
    <section id='gallery' className="w-full flex flex-row relative">
      <div className="gallery-title absolute -left-4 -top-4 lg:left-0 lg:top-0 lg:bottom-6 rotate-180" style={{ writingMode: 'vertical-rl' }}>
        <h2 className="font-bold text-4xl lg:text-5xl uppercase w-full text-gradient-primary ">
          Our Competency
        </h2>
      </div>
      <div className="gallery-content lg:px-[4rem] px-8 md:px-16">
        <div className="flex flex-col md:flex-row mb-4 gap-1 lg:gap-3 lg:h-[80vh] overflow-y-hidden">
          <div className=" w-full lg:w-3/12 h-full">
            <Masonry
            breakpointCols={1}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
              <img src={imgWeb} alt="" className='rounded-sm lg:rounded-xl'/>
              <img src={imgMobile} alt="" className='rounded-sm lg:rounded-xl'/>
            </Masonry>
          </div>
          <div className="w-full lg:w-6/12 h-full">
            <Masonry
            breakpointCols={1}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
              <Masonry
              breakpointCols={2}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column">
                <img src={imgUi} alt="" className='rounded-sm lg:rounded-xl'/>
                <img src={imgMachine} alt="" className='rounded-sm lg:rounded-xl'/>
                <img src={imgProduct} alt="" className='rounded-sm lg:rounded-xl'/>
              </Masonry>
              <img src={imgEmbedded} alt="" className='rounded-sm lg:rounded-xl'/>
            </Masonry>
          </div>
          <div className=" w-full lg:w-3/12 h-full">
            <Masonry
            breakpointCols={1}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
              <img src={imgDesktop} alt="" className='rounded-sm lg:rounded-xl'/>
              <img src={imgIot} alt="" className='rounded-sm lg:rounded-xl'/>
            </Masonry>
          </div>
        </div>
      </div>
    </section>
  )
}