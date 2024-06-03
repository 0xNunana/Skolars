import Image from 'next/image'
import React from 'react'

const Videos = () => {
  return (
    <section className='my-10'>
        <div className='flex max-w-screen-2xl mx-auto px-5'>
<div className='flex-1 '>
  <div className='grid grid-cols-4 gap-3'>
<div className='col-span-4 border-2'>
<Image className='w-full' src='/logo.png' alt='update 1' width={300} height={300}/>
</div>
<div className='border-2'>b</div>
<div className='border-2'>c</div>
<div className='border-2'>d</div>
<div className='border-2'>e</div>
  </div>

</div>
<div className='flex items-center justify-center px-5'>
    <div className='space-y-5'>
    <p className='text-5xl flex-wrap'>Latest Videos</p>
    <div className='flex justify-center items-center'>
    <button className='border-2 px-5 py-2' >SEE MORE</button>
    </div>

    </div>

</div>
        </div>
    </section>
  )
}

export default Videos