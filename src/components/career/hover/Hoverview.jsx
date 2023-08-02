import React, { useState } from 'react';
import './Hoverstyle.css';

const Hoverview = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleHover = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div className="container">
      <div
        className="hoverable"
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      >
        Hover saya
      </div>
      {isHovering && <div className="hidden-content">Konten yang akan muncul saat di-hover</div>}
    </div>
  );
};

export default Hoverview;
