import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { profiles } from '@/Data/ProfileList'
import { teams } from '@/Data/TeamList'
const Sidenav = () => {
  return (
    <div className="flex  flex-col p-3  md:px-5 border-0 space-y-4  ">
   
   <Link href='/Profile 'className='bg-white font-bold md:text-2xl p-2 dark:text-black'>
        Profile Board
      </Link>


    <div className=" flex-row  space-x-2 md:flex-col md:space-x-0 md:space-y-1 md:pt-5 ">

    
        <h1 className='font-semibold'>Artistes</h1>
    
      <ul className='space-y-3 max-h-[500px] overflow-y-scroll '>

        {profiles.map((item,i)=>(
            <Link href={`/Profile/${item.link}`} key={i} className='flex items-center gap-3 md:bg-slate-300 p-2 w-full'>
         <Image src={item.image} alt='Prince' width={1000} height={1000} className='w-12 md:w-14 rounded-md'/>
               <li className='hidden md:flex text-wrap dark:text-black'>{item.name}</li>
            </Link>
         
        ))}
       
    
      </ul>
  

      

    </div>

    <div className=" flex-row  space-x-2 md:flex-col md:space-x-0 md:space-y-1 md:pt-5 ">

    
        <h1 className='font-semibold'>Team</h1>
    
      <ul className='space-y-3 max-h-[500px] overflow-y-scroll '>

        {teams.map((item,i)=>(
            <Link href={`/Profile/${item.link}`} key={i} className='flex items-center gap-3 md:bg-slate-300 p-2 w-full'>
         <Image src={item.image} alt='Prince' width={1000} height={1000} className='w-12 md:w-14 rounded-md'/>
               <li className='hidden md:flex text-wrap dark:text-black'>{item.name}</li>
            </Link>
         
        ))}
       
    
      </ul>
  

      

    </div>

  </div>
  )
}

export default Sidenav