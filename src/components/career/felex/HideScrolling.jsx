import React, { useState, useEffect } from 'react';

const ScrollRevealer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    // Jarak dari atas halaman (scrollTop) saat melakukan scroll
    const scrollY = window.scrollY;

    // Tentukan aturan di mana komponen harus ditampilkan (misalnya saat scroll lebih dari 100 piksel)
    if (scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    // Tambahkan event listener ke peristiwa scroll saat komponen pertama kali di-mount
    window.addEventListener('scroll', handleScroll);

    // Bersihkan event listener saat komponen dilepas
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <div style={{ position: 'fixed', top: '20px', right: '20px', backgroundColor: 'blue', padding: '10px' }}>
          <p>Contoh komponen yang muncul saat scrolling</p>
        </div>
      )}
      <div style={{ height: '150vh' }}>
        <p>Scroll ke bawah untuk melihat efeknya</p>
      </div>
    </div>
  );
};

export default ScrollRevealer;
