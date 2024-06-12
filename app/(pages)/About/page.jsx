import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='min-h-screen dark:text-white text-black'>
        <div className='max-w-screen-2xl p-5 mx-auto space-y-5 text-xl '>

          <div className='grid md:grid-cols-2 gap-10 '>
            {/* images */}
            <div className='hidden md:block md:columns-2 space-y-5'>
            <Image src='/new2.jpg' height={100} width={500} alt='w-full' className='rounded-md'/>
<Image src='/file1.webp' height={100} width={500} alt='' className=' rounded-md '/>

<Image src='/file8.webp' height={100} width={500} alt='' className=' rounded-md '/>

<Image src='/file10.webp' height={100} width={500} alt='' className='rounded-md'/>

            </div>
            <div className='flex justify-center items-center'>
            <div className=''>
              <div className=' rounded-md p-5'>
                <div className='space-y-5'>
                  <Image src='/are.jpg' alt='check' width={100} height={100} className='w-full md:hidden h-40 object-cover rounded-lg'/>
                  <div className='md:pb-5'>
                <p className='text-lg md:text-2xl font-semibold md:text-center '>Who we are</p>
                <p className='text-sm md:text-base '>In the vast landscape of the music industry, finding a label that not only understands your artistic vision but also nurtures it with passion and dedication is like discovering a hidden treasure. Enter Skolars Entertainment,a beacon of creativity and authenticity in the ever-evolving world of music.

Established with a singular mission to champion talented artists and amplify their voices, Skolars Entertainment is more than just a label; it's a home where artists flourish and creativity thrives. Our commitment goes beyond mere distribution and promotion . We're here to build lasting relationships, support artistic growth, and celebrate diversity in music.
</p> 
                </div>

 
                </div>
              
              </div>
              <div className=' rounded-md p-5'>
                <div className='space-y-5'>
                <Image src='/do.jpg' alt='check' width={100} height={100} className='w-full md:hidden h-40 object-cover rounded-lg'/>
                <div className='md:pb-5'>
                <p className='text-lg md:text-2xl font-semibold md:text-center '>What we do</p>
                <p className='text-sm md:text-base '>
At Skolars Entertainment,we understand that success in the music industry isn't just about numbers; it's about impact. That's why we prioritize quality over quantity, focusing on nurturing a roster of artists who inspire and resonate with audiences worldwide. From heartfelt ballads to energetic anthems, our diverse catalog reflects the rich tapestry of human emotion and experience.

But our journey doesn't end with the music, it's just the beginning. Through strategic partnerships, innovative marketing initiatives, and a global network of industry connections, Skolars Entertainment is committed to helping our artists reach new heights of success and recognition.

Join us on this exhilarating journey as we redefine the boundaries of creativity and push the envelope of what's possible in music. Whether you're an artist seeking representation or a music lover in search of your next favorite song, Skolars Entertainment welcomes you with open arms. Together, let's create something extraordinary because, Skolars Entertainment at music isn't just what we do; it's who we are. 
</p>
                </div>


                </div>
        
              </div>
              <div className=' rounded-md p-5'>
                <div className='space-y-5'>
                <Image src='/award.jpg' alt='check' width={100} height={100} className='w-full md:hidden h-40 object-cover rounded-lg'/>
                <div className='md:pb-5'>
                <p className='text-lg md:text-2xl font-semibold md:text-center '>Who you can expect</p>
                <p className='text-sm md:text-base '>
What sets Skolars Entertainment apart is our unwavering dedication to artistic integrity. We believe that great music transcends trends and genres, and we're committed to empowering artists to stay true to their vision. Whether you're a budding songwriter or an established performer, Skolars Entertainment offers a supportive environment where your creativity can soar.
</p>
                </div>
   
                </div>
        
              </div>
            </div>
            </div>
       

          </div>


        </div>
    </div>
  )
}

export default page