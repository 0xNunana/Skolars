import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-black/90 text-white py-10'>
<div className='px-5 max-w-screen-2xl mx-auto'>
<Image src='/logo2.png' alt='footer logo' width={500} height={500} className='max-sm:w-[150px] w-[220px]'/>
 <div className='grid md:grid-cols-4'>
  <p className="py-3 text-center">Facebook</p>
  <p className="py-3 text-center">Instagram</p>
  <p className="py-3 text-center">X</p>
  <p className="py-3 text-center">Spotify</p>

 </div>
 <hr/>
<p className='text-center py-3'>&copy; 2024 Skolars Entertainment</p>
</div>
    </footer>
  )
}

export default Footer