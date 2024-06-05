import Image from 'next/image'
import React from 'react'

const Updates = () => {
  return (
    <secion className='bg-update bg-cover bg-no-repeat bg-[#D4AF37] rounded-tl-3xl md:rounded-tl-[5%] -mt-16 z-40'>
    <div className='px-5 max-w-screen-2xl mx-auto py-[5%] '>
<div className='grid sm:grid-cols-5 md:grid-cols-7 gap-3'>
<div className=' col-span-1 sm:col-span-3 justify-center items-center flex w-full border-2 border-[#3c90d8] bg-white rounded-tl-3xl sm:rounded-tl-[10%] rounded-md'>
    <div className='py-5 space-y-4'>
    <p className='font-semibold text-2xl sm:3xl md:4xl lg:text-5xl '>Latest Updates</p>
    <div className='flex justify-center items-center'>
    <button className='border-2 px-5 py-2 border-[#3c90d8] text-sm md:text-base hover:bg-[#3c90d8] hover:text-white transition-colors'>
        SEE MORE
    </button>
    </div>

    </div>
 
</div>
<div className='col-span-1 sm:col-span-2   relative group overflow-hidden transition-all max-sm:h-40'>
    <Image className='w-full object-cover group-hover:scale-105 group-hover:delay-100' src='/file4.jpg' alt='update 1' width={300} height={300}/>
    <div className='hidden group-hover:flex group-hover:absolute inset-0 bg-black/60  justify-center items-center'>
    <p className='  text-white py-2'>EVENTS</p>
    </div>

</div>
<div className='sm:row-span-2 sm:col-span-2 shadow-md flex items-center justify-center   relative group overflow-hidden transition-all max-sm:h-68'>
    <Image className='w-full h-full object-cover  group-hover:scale-105 group-hover:delay-100' src='/art.webp' alt='update 1' width={300} height={300}/>
    <div className='hidden group-hover:flex group-hover:absolute inset-0 bg-black/60  justify-center items-center'>
    <p className='  text-white py-2'>TOP HITS</p>
    </div>
</div>
<div className='sm:col-span-3 border flex items-center justify-center  relative group overflow-hidden transition-all max-sm:h-60'>
    <Image className='object-cover w-full ' src='/skulars.webp' alt='update 1' width={300} height={300} />
</div>
<div className='sm:col-span-2 flex items-center justify-center   relative group overflow-hidden transition-all max-sm:h-40'>
    <Image className='object-cover w-full h-full  group-hover:scale-105 group-hover:delay-100' src='/file3.jpg' alt='update 1' width={300} height={300}/>
    <div className='hidden group-hover:flex group-hover:absolute inset-0 bg-black/60  justify-center items-center'>
    <p className='  text-white py-2'>VIDEO SHOOTS</p>
    </div>
</div>

</div>
</div>
    </secion>
  )
}

export default Updates