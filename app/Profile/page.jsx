import { profiles } from '@/Data/ProfileList'
import { teams } from '@/Data/TeamList'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='min-h-screen space-y-5 mb-5'>
       <div className='flex gap-5 '>
    
    {profiles.map((team,i)=>(
       <div key={i} className=' flex justify-center items-center group relative '>
       <Link href={`/Profile/${team.link}`}  className=' h-full'>
        <Image alt={team.name} src={team.image} height={300} width={300} className='h-full w-full rounded-md shadow-md  object-cover'/>
       </Link>
       <div className='hidden group-hover:block group-hover:absolute right-0 bottom-0 
         w-full py-2 blur-xl h-[50%] bg-black/70 overflow-hidden'>
         
      
       </div>
       <div className='hidden group-hover:flex group-hover:absolute right-0 bottom-0 overflow-hidden
         w-full py-2  h-[50%]  justify-center items-center'>
          <div className=''>
      
          <p className='text-white text-center'>{team.name}</p>
          </div>
      
       </div>
      
      
       </div>
    ))}
     


  </div>
      <div className='flex flex-wrap gap-5'>
    
        {teams.map((team,i)=>(
          <div key={i} className=' flex justify-center items-center group relative '>
 <Link href={`/Profile/${team.link}`}  className=' h-full'>
  <Image alt={team.name} src={team.image} height={300} width={300} className='h-full w-full rounded-md shadow-md  object-cover'/>
 </Link>
 <div className='hidden group-hover:block group-hover:absolute right-0 bottom-0 
   w-full py-2 blur-xl h-[50%] bg-black/70 overflow-hidden'>
   

 </div>
 <div className='hidden group-hover:flex group-hover:absolute right-0 bottom-0 overflow-hidden
   w-full py-2  h-[50%]  justify-center items-center'>
    <div className='space-y-2'>
    <p className='text-white text-xs text-center'>{team.position}</p>
    <p className='text-white text-center'>{team.name}</p>
    </div>

 </div>


 </div>
        ))}
         


      </div>
    </div>
  )
}

export default page