'use client'
 
import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react';

const Pagename = () => {
    const pathname = usePathname();
    const [page, setPage] = useState('');

    useEffect(() => {
        if (pathname === '/About') {
            setPage('About us');
        }
        else if(pathname === '/Services') {
            setPage('Our Services');
        }
        else if(pathname === '/Blog') {
            setPage('Blogs');
        }
        else if(pathname === '/Contact') {
            setPage('Contact Us');
        }
    }, [pathname]);

    return (
        <div className="bg-menu bg-cover h-[15vh] md:h-[20vh] text-white flex justify-center items-center">
            <p className="text-center md:text-3xl lg:text-5xl"> {page}</p>
        </div>
    );
};

export default Pagename;
