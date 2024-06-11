'use client'
import React, { useState, useEffect } from 'react';
import MusicPlayer from './Music';
import Image from 'next/image';

const images = [

  '/file15.webp',
  '/file2.webp',

  '/file7.webp',

  '/file3.webp',
  '/file5.webp',
'/file8.webp',
  // '/logo.png'

];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

const name= ['S','k','o','l','a','r','s']
const name2=['E','n','t','e','r','t','a','i','n','m','e','n','t']


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
          className={`absolute inset-0 bg-cover bg-black/50 overflow-hidden ${index === currentImageIndex ? 'animate-hero' : 'opacity-0 scale-0'}`}
          style={{ backgroundImage: `url(${image})` }}
        >
          <Image
            src={image}
       priority
       height={100}
       width={100}
            alt=""
            style={{ display: 'none' }}
            onLoad={() => {
              const bgDiv = document.querySelector(`.image-bg-${index}`);
              if (bgDiv) {
                bgDiv.style.backgroundImage = `url(${image})`;
              }
            }}
            className={`image-bg-${index}`}
          />
        </div>
      ))}

      <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center   px-4'>
        <div className='grid   lg:grid-cols-3 w-full '>
        <div className='p-6 rounded-lg  lg:col-span-2 '>
         
          <h1 className='text-white text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4'>
          {name.map((char,i)=>( <span key={i} className='char' style={{ animationDelay: `${i * 0.1}s`,}}>
                   {char === '' ? '\u00A0' : char}
                </span>))}
          </h1>
           
          <h1 className='text-white text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4'>
          {name2.map((char,i)=>( <span key={i} className='char' style={{ animationDelay: ` ${(7+i) * 0.1}s`,}}>
                   {char === '' ? '\u00A0' : char}
                </span>))}
          </h1>
          <div className='flex items-center gap-2'>
          <p className='text-[#D4AF37] text-sm sm:text-lg md:text-xl mb-8 p-1 text-nowrap'>
        Where stars are made.
          </p>
          <div>
            
          </div>
          <div className='w-[80%] md:w-[65%] lg:w-[50%] h-0.5 border-2 border-[#D4AF37] border-b-0 border-x-0'/>
          </div>
        
        
        </div>
        <div className=' max-sm:w-full  flex items-center justify-center '>
       
          <MusicPlayer/>
        </div>

        </div>
       
      </div>
    </div>
  );
};

export default Hero;
