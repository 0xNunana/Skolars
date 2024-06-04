'use client'
import React, { useState, useEffect } from 'react';

const images = [
  '/file2.webp',
  '/file1.webp',
  '/stage.webp',

];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='relative w-full min-h-screen overflow-hidden'>
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover overflow-hidden ${index === currentImageIndex ? 'animate-hero' : 'opacity-0 scale-0'}`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
      <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center   px-4'>
        <div className='grid md:grid-cols-2 w-full '>
        <div className='p-6 rounded-lg   '>
          <h1 className='text-white text-4xl md:text-6xl lg:text-8xl font-bold mb-4'>
            Skulars Entertainment
          </h1>
          <div className='flex items-center gap-2'>
          <p className='text-[#D4AF37] text-lg md:text-xl mb-8 p-1 text-nowrap'>
        Where stars are made.
          </p>
          <div>
            
          </div>
          <div className='w-[80%] h-1 border-2 border-[#D4AF37]'/>
          </div>
        
        
        </div>
        <div className=' max-sm:w-full  flex items-center justify-center '>
        <button className='  '>

<svg  version="1.1" id="Capa_1 c"   className='w-[80px] h-[80px]  lg:w-[150px] xl:h-[200px]'
	 viewBox="0 0 58 58" >
<circle style={{fill:'#D4AF37'}} cx="29" cy="29" r="29"/>
<g>
	<polygon style={{fill:'#FFFFFF'}} points="44,29 22,44 22,29.273 22,14 	"/>
	<path style={{fill:'#FFFFFF'}} d="M22,45c-0.16,0-0.321-0.038-0.467-0.116C21.205,44.711,21,44.371,21,44V14
		c0-0.371,0.205-0.711,0.533-0.884c0.328-0.174,0.724-0.15,1.031,0.058l22,15C44.836,28.36,45,28.669,45,29s-0.164,0.64-0.437,0.826
		l-22,15C22.394,44.941,22.197,45,22,45z M23,15.893v26.215L42.225,29L23,15.893z"/>
</g>
</svg>
          </button>
        </div>

        </div>
       
      </div>
    </div>
  );
};

export default Hero;
