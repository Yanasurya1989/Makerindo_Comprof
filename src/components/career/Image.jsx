import React from 'react';
import imgDesktop from '../assets/img/gallery/desktop-programming.png'

const Image = ({img}) =>{
  return <div>
    <div className='flex justify-center'>
      <img style={{width: "100%"}} src={img} />
    </div>
  </div>
}

export default Image;