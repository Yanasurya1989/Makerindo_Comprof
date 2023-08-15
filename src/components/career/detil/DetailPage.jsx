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
          <div className='grid grid-cols-1 mx-auto flex justify-center'>
            <div>
              <img src={selectedItem.image} className='w-1/4 flex justify-center mx-auto'/>
            </div>
            <div>
              <h1 className='text-left'>{selectedItem.title}</h1>
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