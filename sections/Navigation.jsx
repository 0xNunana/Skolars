'use client'
import Image from 'next/image'
import Link from 'next/link'
import React,{useState} from 'react'

const Navigation = () => {
  const [ismenuOpen,setIsMenuOpen]=useState(false)

  return (
    <nav className='sticky top-0  backdrop-blur-md z-50 bg-gold/50 text-black'>
    <div className='px-5 py-2 max-w-screen-2xl mx-auto flex justify-between '>
      <Link href='/'>
      <Image src='/logo.png' alt='Skulars logo' width={500} height={500} className='max-sm:w-[150px] w-[220px]'/>
      </Link>

<ul className='hidden sm:flex gap-4 items-center  text-xs md:text-base '>
  <Link href='/'>
  <li>Home</li>
  </Link>
  
    <Link href='/About'>
    <li>About Us</li>
  </Link>

    <Link href='/Services'>
    <li>Our Services</li>
  </Link>

  
    
    <Link href='/Contact'>
    <li>Contact</li>
  </Link>
  

</ul>

{/* moblie screen */}
<div className=' sm:hidden flex items-center justify-center'>
{
          ismenuOpen ? (<>
            <button className=''>
         
          <svg className='w-8 h-8' onClick={()=>setIsMenuOpen(false)} fill="black" height="100px" width="100px" version="1.1" id="Layer_1"  
	 viewBox="0 0 1792 1792" >
<path d="M1082.2,896.6l410.2-410c51.5-51.5,51.5-134.6,0-186.1s-134.6-51.5-186.1,0l-410.2,410L486,300.4
	c-51.5-51.5-134.6-51.5-186.1,0s-51.5,134.6,0,186.1l410.2,410l-410.2,410c-51.5,51.5-51.5,134.6,0,186.1
	c51.6,51.5,135,51.5,186.1,0l410.2-410l410.2,410c51.5,51.5,134.6,51.5,186.1,0c51.1-51.5,51.1-134.6-0.5-186.2L1082.2,896.6z"/>
</svg>
        </button>
          </>) :
          (<>  <button>
 
            <svg width="100px" height="100px" viewBox="0 0 24 24" fill="none" className='w-8 h-8' onClick={()=>setIsMenuOpen(true)}>
<g id="Menu / Menu_Alt_02">
<path id="Vector" d="M11 17H19M5 12H19M11 7H19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
</svg>
          </button></>)
        
}
{ismenuOpen && (
    <div className='  bg-gold fixed inset-0 h-screen top-[60px] p-4 bottom-0 w-full sm:w-[50%] right-0 md:hidden '>

    <div className='m-10 p-10 animate-slideDown bg-white rounded-sm '>
   
        <div className='grid gap-6 '>
          <ul className='space-y-5 '>
          <Link href='/' onClick={()=>setIsMenuOpen(false)}>
  <li>Home</li>
  </Link>
  
    <Link href='/About' onClick={()=>setIsMenuOpen(false)}>
    <li>About Us</li>
  </Link>

    <Link href='/Services' onClick={()=>setIsMenuOpen(false)}>
    <li>Our Services</li>
  </Link>

   
  
    
    <Link href='/Contact' onClick={()=>setIsMenuOpen(false)}>
    <li>Contact</li>
  </Link>
  
              </ul>
                
              </div>
              </div>
              </div>)}
                
</div>

    </div>
    </nav>

  )
}

export default Navigation