// DetailPage.js
import React, { useEffect, useState } from 'react';
import Image from '../../assets/img/gallery/iot.png'
import './Detil.css'

const DetailPage = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const storedItem = JSON.parse(localStorage.getItem('detilNews'));
    setSelectedItem(storedItem);
  }, []);

  return (
    <div className="detail-container">
      {selectedItem ? (
        <>
          <div className='grid grid-cols-1 mx-auto flex justify-center flex-col lg:flex-row items-center'>
            <div>
              <h1 className='text-left font-bold text-lg mb-10' style={{fontFamily:'roboto'}}>{selectedItem.title}</h1>
              <img src={selectedItem.image} className='float-left w-2/4 h-[50vh] flex justify-center mx-auto lg:h-[70vh]  object-cover'/>
              <p className=' text-justify mt-10 font-light' style={{fontFamily:'roboto'}}>{selectedItem.description}</p>
            </div>
          </div>
        </>
      ) : (
        <p>Tidak ada item yang dipilih.</p>
      )}

      
    </div>
  );
};

export default DetailPage;