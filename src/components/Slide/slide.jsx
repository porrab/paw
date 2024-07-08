import React, { useEffect, useState } from 'react';

const Slide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://s359.kapook.com/pagebuilder/25d8d164-00e7-45ca-8968-70728a6ec384.jpg",
    "https://s359.kapook.com//pagebuilder/4aef4cfa-a015-4936-951a-7c28cfe51ed1.jpg",
    "https://s359.kapook.com//pagebuilder/ac6a6423-0ea6-4aa3-992d-9de96cb09004.jpg",
    "https://s359.kapook.com//pagebuilder/0cd759b6-53bd-4c36-957f-057cff5b6003.jpg",
    "https://s359.kapook.com//pagebuilder/712e1396-45fa-48a4-a2ab-7c5d62b3b05c.jpg",
    "https://s359.kapook.com//pagebuilder/d5b73868-b282-48a8-8cfe-af1cc4581905.jpg",
    "https://s359.kapook.com//pagebuilder/2f7a2e33-6311-4100-8a0e-01275d038228.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    
    <div className="carousel carousel-center bg-neutral rounded-box w-3/12 h-2/12 space-x-4 p-4">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img src={image} className="w-full h-full object-cover" alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slide;
