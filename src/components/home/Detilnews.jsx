import { useEffect, useState } from 'react';
import Image from '../assets/img/gallery/desktop-programming.png'
import SeeMOreComponent from '../career/seemore/SeeMoreComponent'
import {  } from 'react';
import axios from 'axios';

const Detilnews = () => {
    // fetching start
const [data, setData] = useState(
    null
);

useEffect(() => {
  // Penggunaan useEffect akan memastikan pemanggilan API hanya terjadi sekali saat komponen dimuat.
  axios.get(`${import.meta.env.VITE_APP_DOMAIN}/newsroom`)
    .then((response) => setData(response.data))
    .catch((error) => console.error('Error fetching data:', error));
}, []); 
// fetching end
    return (
        <div>
            {data && data.news.map((data, index) =>(
                <div>
                    <img src={data?.Image} alt="" />
                    <h1>{data?.title}</h1>
                    <p className='text-left'>{data?.description}</p>                    
                </div>
            ))}
        </div>
    );
}

export default Detilnews;