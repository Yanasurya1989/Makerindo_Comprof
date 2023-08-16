// DetailPage.js
import React, { useEffect, useState } from 'react';
import Image from '../../assets/img/gallery/iot.png'

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
              <h1 className='text-left  font-bold text-lg mb-10'>{selectedItem.title}</h1>
              <img src={selectedItem.image} className=' lg:w-[16rem] w-full h-[50vh] flex justify-center mx-auto lg:h-[70vh]  object-cover'/>
            </div>
            <div>
              
              <p className='text-left mt-10'>{selectedItem.description}</p>
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