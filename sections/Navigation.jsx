'use client'
import Image from 'next/image'
import Link from 'next/link'
import React,{useState} from 'react'

const Navigation = () => {
  const [ismenuOpen,setIsMenuOpen]=useState(false)

  return (
    <nav className='sticky top-0  backdrop-blur-md z-50 bg-[#d4af37]'>
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
  
    <button>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.5 14H14.71L14.43 13.73C15.4439 12.554 16.0011 11.0527 16 9.5C16 8.21442 15.6188 6.95772 14.9046 5.8888C14.1903 4.81988 13.1752 3.98676 11.9874 3.49479C10.7997 3.00282 9.49279 2.87409 8.23192 
3.1249C6.97104 3.3757 5.81285 3.99477 4.90381 4.90381C3.99477 5.81285 3.3757 
6.97104 3.1249 8.23192C2.87409 9.49279 3.00282 10.7997 3.49479 11.9874C3.98676
 13.1752 4.81988 14.1903 5.8888 14.9046C6.95772 15.6188 8.21442 16 9.5 16C11.11
  16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01
   14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" fill="black"/>
</svg>
    </button>
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
          </>) :(<>  <button>
 
            <svg width="100px" height="100px" viewBox="0 0 24 24" fill="none" className='w-8 h-8' onClick={()=>setIsMenuOpen(true)}>
<g id="Menu / Menu_Alt_02">
<path id="Vector" d="M11 17H19M5 12H19M11 7H19" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>
          </button></>)
        
}
{ismenuOpen && (
    <div className='  bg-[#d4af37] fixed inset-0 h-screen top-[60px] p-4 bottom-0 w-full sm:w-[50%] right-0 md:hidden '>

    <div className='m-10 p-10 animate-slideDown bg-white rounded-sm '>
   
        <div className='grid gap-6 '>
          <ul className='space-y-5 '>
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
                
              </div>
              </div>
              </div>)}
                
</div>

    </div>
    </nav>

  )
}

export default Navigation