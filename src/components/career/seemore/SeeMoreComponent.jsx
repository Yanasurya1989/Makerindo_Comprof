import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function SeeMoreComponent({ item, content, maxLength }) {
  const navigate = useNavigate()
  const [showFullContent, setShowFullContent] = useState(false);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  // console.log(items)
  function seemore(){
    localStorage.setItem('detilNews', JSON.stringify(item))
    navigate(`/detilnews/${item.id}`);
  }
  return (
    <div>
      {/* {items.map(item => ( */}
        <p className='text-left'>
        {showFullContent ? content : content.slice(0, maxLength)}
        {content.length > maxLength && !showFullContent && (
          <button onClick={seemore}>
            ... see more
          </button>
          // <a  href={`/detilnews/${item.id}`}  style={{ cursor: 'pointer', color: 'blue' }}>
          //   ... See More
          // </a>
        )}
        {content.length > maxLength && showFullContent && (
          <span onClick={toggleContent} style={{ cursor: 'pointer', color: 'blue' }}>
            ... See Less
          </span>
        )}
      </p>
      {/* ))}       */}
    </div>
  );
}

export default SeeMoreComponent;
