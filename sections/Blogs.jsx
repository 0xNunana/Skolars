import React from 'react'
import { urls } from '@/Data/Blogs'
import LinkPreview from '@/components/LinkPreviewer'
const Blogs = () => {
  return (
    <div className='mb-10'>
    
       <div className='    grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        <div className="border p-4 m-4 max-w-md rounded-lg shadow-lg bg-white flex justify-center items-center font-bold text-3xl">
          <p>Trending News</p>
        </div>
     
     {urls.map((url, index) => (
       <LinkPreview key={index} url={url} />
     ))}
 </div>
    </div>
 
  )
}

export default Blogs