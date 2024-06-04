import Image from 'next/image'
import React from 'react'

const Videos = () => {
  return (
    <section classNameName='my-10'>
        <div classNameName='flex max-w-screen-2xl mx-auto px-5'>
<div classNameName='flex-1 '>
  <div classNameName='grid grid-cols-4 gap-3'>
<div classNameName='col-span-4 border-2'>
<Image classNameName='w-full' src='/logo.png' alt='update 1' width={300} height={300}/>
</div>
<div classNameName='border-2'>b</div>
<div classNameName='border-2'>c</div>
<div classNameName='border-2'>d</div>
<div classNameName='border-2'>e</div>
  </div>

</div>
<div classNameName='flex items-center justify-center px-5'>
    <div classNameName='space-y-5'>
    <p classNameName='text-5xl flex-wrap'>Latest Videos</p>
    <div classNameName='flex justify-center items-center'>
    <button classNameName='border-2 px-5 py-2' >SEE MORE</button>
    </div>

    </div>

</div>
        </div>
    </section>
  )
}

export default Videos