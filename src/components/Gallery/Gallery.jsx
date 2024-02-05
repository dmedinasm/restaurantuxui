import React, { useState } from 'react'
import { SlArrowLeft } from "react-icons/sl"
import { SlArrowRight } from 'react-icons/sl';
const Gallery = ({images}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const handlePrevClick = () => {
    setCurrentImageIndex(
      (currentImageIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="flex items-center justify-between p-4">
      <button onClick={handlePrevClick}>  <SlArrowLeft className="text-slate-400 text-[100%]"/></button>
          <img src={images[currentImageIndex]} alt="gallery image" className="w-[50%] cursor-pointer hover:opacity-50 hover:scale-[130%] transition duration-500 ease-in-out delay-500 rounded-md"/>
      <button onClick={handleNextClick}> <SlArrowRight className="text-slate-400 text-[100%]"/></button>
    </div>
  );
}

export default Gallery