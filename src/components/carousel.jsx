import React, { useState, useEffect } from 'react';

const CustomCarousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  // Function to advance to the next slide automatically
  const autoScroll = () => {
    nextImage();
  };

  // Start auto-scrolling when the component mounts
  useEffect(() => {
    const intervalId = setInterval(autoScroll, 3000); // Adjust the interval (in milliseconds) as needed
    return () => clearInterval(intervalId); // Clean up the interval when the component unmounts
  }, []); // Empty dependency array to ensure the effect runs only once

  return (
    <div className="carousel-container">
      <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex + 1}`}
      className='carousel-image '
      />
    </div>
  );
};

export default CustomCarousel;
