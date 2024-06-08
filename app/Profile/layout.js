import React from 'react'
import Sidenav from '@/components/Sidenav'

const layout = ({children}) => {
  return (
    <div className='flex md:overflow-hidden min-h-screen'>
      <div className=' flex-none border-0 border-r border-r-[#8A91A5] w-[100px] md:w-[259px] overflow-hidden'>
    <Sidenav/>
      </div>
 




    <div className='flex-grow md:overflow-y-auto px-3 md:pt-10'>{children}</div>



    
    </div>

  )
}






export default layout