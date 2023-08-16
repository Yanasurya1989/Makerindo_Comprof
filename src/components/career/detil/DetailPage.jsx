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
              <h1 className='text-left'>{selectedItem.title}</h1>
              <img src={selectedItem.image} className='w-full h-[50vh] flex justify-center mx-auto lg:h-[70vh]  object-cover lg:w-[50vw]'/>
            </div>
            <div>
              
              <p className='text-left'>{selectedItem.description}</p>
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