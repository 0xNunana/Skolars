import React from 'react';
import { urls } from '@/Data/Blogs';
import LinkPreview from '@/components/LinkPreviewer';

const Blogs = () => {
  return (
    <div className='mb-10'>
      <div className='flex overflow-x-scroll space-x-3 py-4'>
        {urls.map((url, index) => (
          <LinkPreview key={index} url={url} />
        ))}
      </div>
    </div>
  );
}

export default Blogs;
