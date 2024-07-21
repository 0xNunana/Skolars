'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const LinkPreview = ({ url }) => {
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPreview = async () => {
      try {
        const res = await fetch(`/api/preview?url=${encodeURIComponent(url)}`);
        const data = await res.json();
        setPreview(data);
      } catch (error) {
        console.error('Error fetching preview:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPreview();
  }, [url]);

  if (loading) return (
    <div className="border p-4 m-4 max-w-md rounded-lg shadow-lg bg-white">
 <p>Loading ...</p>
    </div>
  );

  if (!preview) return <p>No preview available</p>;

  return (
    <div className="border p-4 m-4 max-w-md rounded-lg shadow-lg bg-white">
      {preview.image && <Image className="w-full h-40 mb-4 rounded" src={preview.image} alt="Preview image" width={500} height={500}/>}
      <h3 className="text-sm md:text-md md:font-bold mb-2">{preview.title}</h3>
      <div className='flex sm:flex-col lg:justify-between'>
      <p className="text-gray-500 text-sm mb-2">{preview.domain}</p>
      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        Read More ..
      </Link>
      </div>
    
      {/* <p className="text-gray-700 mb-4">{preview.description}</p> */}
  
    
    </div>
  );
};

export default LinkPreview;
