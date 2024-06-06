import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-black/90 text-white py-10 bg-cover bg-no-repeat bg-dot '>
<div className='px-5 max-w-screen-2xl mx-auto'>
<Image src='/logo2.png' alt='footer logo' width={500} height={500} className='max-sm:w-[150px] w-[220px]'/>
 <div className='grid md:grid-cols-3'>
  <div className='flex justify-center items-center'>
  <Link  href='https://www.facebook.com/profile.php?id=100095508270894&mibextid=ZbWKwL' className="py-3 text-center">Facebook</Link>
  </div>
  <div className='flex justify-center items-center'>
  <Link href='http://instagram.com/skolars_ent' className="py-3 text-center">Instagram</Link>
  </div>
  <div className='flex justify-center items-center'>
  <Link href='http://twitter.com/skolars_ent' className="py-3 text-center">X</Link>
  </div>





 </div>
 <hr/>
<p className='text-center py-3'>&copy; 2024 Skolars Entertainment</p>
</div>
    </footer>
  )
}

export default Footer