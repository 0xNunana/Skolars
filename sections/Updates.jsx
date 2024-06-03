import Image from 'next/image'
import React from 'react'

const Updates = () => {
  return (
    <secion className=''>
    <div className='px-5 max-w-screen-2xl mx-auto py-[5%] '>
<div className='grid sm:grid-cols-5 md:grid-cols-7 gap-3'>
<div className=' col-span-1 sm:col-span-3 justify-center items-center flex w-full'>
    <div>
    <p className='font-semibold text-5xl'>Latest Updates</p>
    <button className='border-2 px-5 py-2 border-blue-200'>
        SEE MORE
    </button>
    </div>
 
</div>
<div className='col-span-1 sm:col-span-2 flex items-center justify-center relative '>
    <Image className='bg-gradient-to-b from-transparent via-transparent to-black/70 object-cover w-full h-full ' src='/logo.png' alt='update 1' width={300} height={300}/>
    <p className='absolute bottom-0 text-white py-2'>TOP HITS</p>
</div>
<div className='sm:row-span-2 sm:col-span-2 shadow-md flex items-center justify-center '>
    <Image className='w-full h-full' src='/art.webp' alt='update 1' width={300} height={300}/>
</div>
<div className='sm:col-span-3  flex items-center justify-center'>
    <Image className='' src='/logo.png' alt='update 1' width={300} height={300}/>
</div>
<div className='sm:col-span-2 flex items-center justify-center '>
    <Image className='' src='/logo.png' alt='update 1' width={300} height={300}/>
</div>

</div>
</div>
    </secion>
  )
}

export default Updates