import React from 'react';
import SeeMoreComponent from './SeeMoreComponent';

function Seeview() {
  const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  
  return (
    <div>
      <h1>See More Example</h1>
      <SeeMoreComponent content={longText} maxLength={50} />
    </div>
  );
}

export default Seeview;
