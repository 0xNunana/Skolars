'use client'
 

import Maps from '@/components/Map'

import Link from 'next/link'
import React,{useState} from 'react'
import { useFormStatus } from 'react-dom'



const page = () => {
  const { pending } = useFormStatus()
  const [success,setSuccess]=useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    subject: '',
    message: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    setSuccess(result)
    setFormData('')
  
  };

  return (
    <div className='min-h-screen dark:text-black'>
        <div className='max-w-screen-2xl px-5 mx-auto  pt-20 '>
          <div className='grid md:grid-cols-3 gap-10 '>
            <div className='flex justify-center items-center'>
            <div className='space-y-5'>
              <p className='text-xl md:text-3xl pb-2 dark:text-white'>Ready to work with us?</p>
              <Link href='/Contact/#mail' className='pt-2'>
              < button className=' bg-gold font-semibold px-3 md:px-5 py-1 md:py-2 rounded-full text-nowrap '>
                 <p className='text-sm md:text-base'>Get In Touch </p>
              </button> 
               
              </Link>
              <div className='flex gap-5'>
<div>
  <Link href='https://www.facebook.com/profile.php?id=100095508270894&mibextid=ZbWKwL'>
  <svg  viewBox="0 0 24 24" fill="none" className='socials h-[50px] w-[50px] md:h-[80px] md:w-[80px]' >
<path d="M20 12.05C19.9813 10.5255 19.5273 9.03809 18.6915 7.76295C17.8557 6.48781 16.673 5.47804 15.2826
 4.85257C13.8921 4.2271 12.3519 4.01198 10.8433 4.23253C9.33473 4.45309 7.92057 5.10013 6.7674 6.09748C5.61422 7.09482 4.77005 8.40092 4.3343 9.86195C3.89856 11.323 3.88938 12.8781 4.30786 14.3442C4.72634 15.8103 5.55504 17.1262 6.69637 18.1371C7.83769 19.148 9.24412 19.8117 10.75 20.05V14.38H8.75001V12.05H10.75V10.28C10.7037 9.86846 10.7483 9.45175 10.8807 9.05931C11.0131 8.66687 11.23 8.30827 11.5161 8.00882C11.8022 7.70936 12.1505 7.47635 12.5365 7.32624C12.9225 7.17612 13.3368 7.11255 13.75 7.14003C14.3498 7.14824 14.9482 7.20173 15.54 7.30003V9.30003H14.54C14.3676 9.27828 14.1924 9.29556 14.0276 9.35059C13.8627 9.40562 13.7123 9.49699 
 13.5875 9.61795C13.4627 9.73891 13.3667 9.88637 13.3066 10.0494C13.2464 10.2125 13.2237 10.387 
 13.24 10.56V12.07H15.46L15.1 14.4H13.25V20C15.1399 19.7011 16.8601 18.7347 18.0985 17.2761C19.3369 15.8175 20.0115 13.9634 20 12.05Z" fill="#000000"/>
</svg>
  </Link>

</div>

<div className='flex justify-center items-center'>
  <Link href='http://twitter.com/skolars_ent'>
  <svg  viewBox="0 -2 20 20" version="1.1" className='socials h-[40px] w-[40px] md:h-[60px] md:w-[60px]' >
    
    <title>twitter [#154]</title>
    <desc>Created with Sketch.</desc>
    <defs>

</defs>
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Dribbble-Light-Preview" transform="translate(-60.000000, -7521.000000)" fill="#000000">
            <g id="icons" transform="translate(56.000000, 160.000000)">
                <path d="M10.29,7377 C17.837,7377 21.965,7370.84365 21.965,7365.50546 C21.965,7365.33021 21.965,7365.15595 21.953,7364.98267 C22.756,7364.41163 23.449,7363.70276 24,7362.8915 C23.252,7363.21837 22.457,7363.433 21.644,7363.52751 C22.5,7363.02244 23.141,7362.2289 23.448,7361.2926 C22.642,7361.76321 21.761,7362.095 20.842,7362.27321 C19.288,7360.64674 16.689,7360.56798 15.036,7362.09796 C13.971,7363.08447 13.518,7364.55538 13.849,7365.95835 C10.55,7365.79492 7.476,7364.261 5.392,7361.73762 C4.303,7363.58363 4.86,7365.94457 6.663,7367.12996 C6.01,7367.11125 5.371,7366.93797 4.8,7366.62489 L4.8,7366.67608 C4.801,7368.5989 6.178,7370.2549 8.092,7370.63591 C7.488,7370.79836 6.854,7370.82199 6.24,7370.70483 C6.777,7372.35099 8.318,7373.47829 10.073,7373.51078 C8.62,7374.63513 6.825,7375.24554 4.977,7375.24358 C4.651,7375.24259 4.325,7375.22388 4,7375.18549 C5.877,7376.37088 8.06,7377 10.29,7376.99705" id="twitter-[#154]">

</path>
            </g>
        </g>
    </g>
</svg>
  </Link>

</div>


<div>
  <Link href='http://instagram.com/skolars_ent'>
  <svg  viewBox="0 0 24 24" fill="none" className='socials h-[50px] w-[50px] md:h-[80px] md:w-[80px]' >
<path d="M12 7.90001C11.1891 7.90001 10.3964 8.14048 9.72218 8.59099C9.04794 9.0415 8.52243 9.68184 8.21211 10.431C7.90179 11.1802 7.8206 12.0046 7.9788 12.7999C8.13699 13.5952 8.52748 14.3258 9.10088 14.8992C9.67427 15.4725 10.4048 15.863 11.2001 16.0212C11.9955 16.1794 12.8198 16.0982 13.569 15.7879C14.3182 15.4776 14.9585 14.9521 15.409 14.2779C15.8596 13.6036 16.1 12.8109 16.1 12C16.1013 11.4612 15.9962 10.9275 15.7906 10.4295C15.585 9.93142 15.2831 9.47892 14.9021 9.09794C14.5211 8.71695 14.0686 8.415 13.5706 8.20942C13.0725 8.00385 12.5388 7.8987 12 7.90001ZM12 14.67C11.4719 14.67 10.9557 14.5134 10.5166 14.22C10.0776 13.9267 9.73534 13.5097 9.53326 13.0218C9.33117 12.5339 9.2783 11.9971 9.38132 11.4791C9.48434 10.9612 9.73863 10.4854 10.112 10.112C10.4854 9.73863 10.9612 9.48434 11.4791 9.38132C11.9971 9.2783 12.5339 9.33117 13.0218 9.53326C13.5097 9.73534 13.9267 10.0776 14.22 10.5166C14.5134 10.9557 14.67 11.4719 14.67 12C14.67 12.7081 14.3887 13.3873 13.888 13.888C13.3873 14.3887 12.7081 14.67 12 14.67ZM17.23 7.73001C17.23 7.9278 17.1714 8.12114 17.0615 8.28558C16.9516 8.45003 16.7954 8.57821 16.6127 8.65389C16.43 8.72958 16.2289 8.74938 16.0349 8.7108C15.8409 8.67221 15.6628 8.57697 15.5229 8.43712C15.3831 8.29727 15.2878 8.11909 15.2492 7.92511C15.2106 7.73112 15.2304 7.53006 15.3061 7.34733C15.3818 7.16461 15.51 7.00843 15.6744 6.89855C15.8389 6.78866 16.0322 6.73001 16.23 6.73001C16.4952 6.73001 16.7496 6.83537 16.9371 7.02291C17.1247 7.21044 17.23 7.4648 17.23 7.73001ZM19.94 8.73001C19.9691 7.48684 19.5054 6.28261 18.65 5.38001C17.7522 4.5137 16.5474 4.03897 15.3 4.06001C14 4.00001 10 4.00001 8.70001 4.06001C7.45722 4.0331 6.25379 4.49652 5.35001 5.35001C4.49465 6.25261 4.03093 7.45684 4.06001 8.70001C4.00001 10 4.00001 14 4.06001 15.3C4.03093 16.5432 4.49465 17.7474 5.35001 18.65C6.25379 19.5035 7.45722 19.9669 8.70001 19.94C10.02 20.02 13.98 20.02 15.3 19.94C16.5432 19.9691 17.7474 19.5054 18.65 18.65C19.5054 17.7474 19.9691 16.5432 19.94 15.3C20 14 20 10 19.94 8.70001V8.73001ZM18.24 16.73C18.1042 17.074 17.8993 17.3863 17.6378 17.6478C17.3763 17.9093 17.064 18.1142 16.72 18.25C15.1676 18.5639 13.5806 18.6715 12 18.57C10.4228 18.6716 8.83902 18.564 7.29001 18.25C6.94608 18.1142 6.63369 17.9093 6.37223 17.6478C6.11076 17.3863 5.90579 17.074 5.77001 16.73C5.35001 15.67 5.44001 13.17 5.44001 12.01C5.44001 10.85 5.35001 8.34001 5.77001 7.29001C5.90196 6.94268 6.10547 6.62698 6.36733 6.36339C6.62919 6.09981 6.94355 5.89423 7.29001 5.76001C8.83902 5.44599 10.4228 5.33839 12 5.44001C13.5806 5.33856 15.1676 5.44616 16.72 5.76001C17.064 5.89579 17.3763 6.10076 17.6378 6.36223C17.8993 6.62369 18.1042 6.93608 18.24 7.28001C18.66 8.34001 18.56 10.84 18.56 12C18.56 13.16 18.66 15.67 18.24 16.72V16.73Z" fill="#000000"/>
</svg>
  </Link>

</div>


{/* <div>
<svg fill="#000000" width="80px" height="80px" viewBox="-6.5 0 32 32" version="1.1" className='socials' >
<title>spotify</title>
<path d="M13.2 20.84c-0.2 0-0.4-0.080-0.56-0.2-1.84-1.6-5.8-1.12-7.2-0.84-0.44 0.12-0.92-0.2-1-0.64-0.12-0.44 0.2-0.88 0.64-1 0.24-0.040 5.8-1.24 8.64 1.2 0.36 0.32 0.4 0.84 0.080 1.2-0.12 0.16-0.36 0.28-0.6 0.28zM14.2 18.44c-0.16 0-0.32-0.040-0.48-0.16-3.36-2.4-8.48-1.080-8.52-1.080-0.44 0.12-0.92-0.16-1.040-0.6s0.16-0.92 0.6-1.040c0.24-0.080 5.92-1.56 9.96 1.32 0.36 0.28 0.48 0.8 0.2 1.16-0.2 0.28-0.44 0.4-0.72 0.4zM15.24 15.72c-0.16 0-0.32-0.040-0.48-0.16-4.44-2.96-10.040-1.040-10.12-1.040-0.44 0.16-0.88-0.080-1.040-0.52s0.080-0.92 0.52-1.080c0.28-0.080 6.48-2.2 11.6 1.24 0.4 0.24 0.48 0.76 0.24 1.16-0.2 0.24-0.48 0.4-0.72 0.4zM9.6 25.6c-5.28 0-9.6-4.32-9.6-9.6s4.32-9.6 9.6-9.6 9.6 4.32 9.6 9.6-4.32 9.6-9.6 9.6zM9.6 8.080c-4.36 0-7.92 3.56-7.92 7.92s3.56 7.92 7.92 7.92 7.92-3.56 7.92-7.92-3.56-7.92-7.92-7.92z"></path>
</svg>
</div> */}
              </div>
            </div>
            </div>
        


            <div className='md:col-span-2 gap-5  space-y-5'>
              <div className='grid md:grid-cols-2 gap-5 '>
              <div className='relative '>
              <div className='flex justify-center items-center'>
              <div className='flex justify-center items-center rounded-full bg-gold h-16 w-16'>
<svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.7 15C4.03377 15.6353 3 16.5205 3 17.4997C3 19.4329 7.02944 21 12 21C16.9706 21 21 19.4329 21 17.4997C21 16.5205 19.9662 15.6353 18.3 15M12 9H12.01M18 9C18 13.0637 13.5 15 12 18C10.5 15 
6 13.0637 6 9C6 5.68629 8.68629 3 12 3C15.3137 3 18 5.68629 18 9ZM13 9C13 9.55228 12.5523 10 12 10C11.4477 10 11 9.55228 11 9C11 8.44772 11.4477
 8 12 8C12.5523 8 13 8.44772 13 9Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
</div>
              </div>

<div className='border border-black -mt-5 bg-latest bg-[#eef4f2] p-5 flex justify-center items-center '>
  <div>
  <p className='font-bold text-center'>Our Location</p>
  <p className='text-center'>Oyarifa, Ghana</p>
  </div>

</div>
            </div>
            <div className='relative '>
              <div className='flex justify-center items-center'>
              <div className='flex justify-center items-center rounded-full bg-gold h-16 w-16'>
              <svg height="40px" width="40px" version="1.1" id="Layer_1"
	 viewBox="0 0 508 508" >
<circle style={{fill:'#3c90d8'}} cx="254" cy="254" r="254"/>
<path style={{fill:'#FFFFFF'}} d="M303.7,303.3c30.5-17.3,51-50.1,51-87.6c0-55.7-45.1-100.8-100.8-100.8S153.2,160,153.2,215.6
	c0,37.6,20.6,70.3,51,87.6C141,319.3,89.7,365,66,424.8c46.5,51.1,113.5,83.2,188,83.2s141.5-32.1,188-83.2
	C418.3,365,367,319.3,303.7,303.3z"/>
<path style={{fill:'#324A5E'}} d="M401.6,182.3h-15.8C370.9,123.4,317.5,79.6,254,79.6s-116.9,43.7-131.8,102.7h-15.8
	c-5.4,0-9.8,4.4-9.8,9.8V240c0,5.4,4.4,9.8,9.8,9.8h20c6.1,0,10.8-5.5,9.7-11.4c-2-10.4-2.7-21.3-1.8-32.5
	c4.8-59.3,53.6-106.9,113.1-110.1c69.2-3.8,126.8,51.5,126.8,119.9c0,7.8-0.8,15.3-2.2,22.7c-1.2,6,3.6,11.5,9.6,11.5h1.8
	c-4.2,13-14.9,37.2-38.3,50.2c-19.6,10.9-44.3,11.9-73.4,2.8c-1.5-6.7-8.9-14.6-16.5-18.3c-9.8-4.9-15.9-0.8-19.4,6.2
	s-3,14.3,6.7,19.2c8.6,4.3,21.6,5.2,27,0.5c13.9,4.3,26.9,6.5,39,6.5c15,0,28.5-3.3,40.4-10c27.5-15.3,38.8-43.7,42.8-57.2h9.9
	c5.4,0,9.8-4.4,9.8-9.8v-47.9C411.4,186.7,407,182.3,401.6,182.3z"/>
</svg>
</div>
              </div>

<div className='border border-black -mt-5 bg-latest bg-[#eef4f2] p-5 flex justify-center items-center '>
  <div>
  <p className='font-bold text-center'>24/7 Support</p>
  <Link href='tel:+233532712998' className='text-center'>+233532712998</Link>
  </div>

</div>
            </div>
              </div>
          
            <div className='relative '>
              <div className='flex justify-center items-center'>
              <div className='flex justify-center items-center rounded-full bg-gold h-16 w-16'>
              <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12ZM16 12V13.5C16 14.8807 17.1193 16 18.5 16V16C19.8807 16 21 14.8807 21 13.5V12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21H16"
 stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
</div>
              </div>

<div className='border border-black -mt-5 bg-latest bg-[#eef4f2] p-5 flex justify-center items-center '>
  <div>
  <p className='font-bold text-center'>Email Address</p>
  <Link href='mailto:Skolarsent@gmail.com' className='text-center'>Skolarsent@gmail.com</Link>
  </div>

</div>
            </div>
            </div>

           

          </div>

          {/* map */}
          <div className='grid md:grid-cols-2 py-40'>
            <div className='bg-latest bg-cover'>
              <Maps/>
            </div>
            <div className=' bg-[#eef4f2] ' id='mail'>
              <form onSubmit={handleSubmit}>
                <p className='p-5 font-semibold text-xl md:text-3xl'>Send Us A  Message</p>
              <div className='grid md:grid-cols-2 gap-5 px-5'>
              <div>
                  <label className='text-sm md:text-base'>Your Name</label>
                  <input value={formData.name} required onChange={handleChange}  type='text' placeholder='Genesis Artiste' className='block w-full p-2 rounded-md' name='name'/>
                </div>
                <div>
                  <label className='text-sm md:text-base'>Phone Number</label>
                  <input value={formData.number} onChange={handleChange} type='tel' placeholder='+233240000000' className='block w-full p-2 rounded-md' name='number'/>
                </div>
                <div>
                  <label className='text-sm md:text-base'>Email Address</label>
                  <input value={formData.email} required onChange={handleChange}  type='text' placeholder='john@example.com' className='block w-full p-2 rounded-md' name='email'/>
                </div>
                <div>
                  <label className='text-sm md:text-base'>Subject</label>
                  <input value={formData.subject} required onChange={handleChange}  type='text' placeholder='Branding' className='block w-full p-2 rounded-md' name='subject'/>
                </div>
              </div>
            
              <div className='p-5 col-span-2 '>
              <label className='text-sm md:text-base'>Message</label>
                <textarea value={formData.message} required onChange={handleChange} className='block w-full h-[30vh]' name='message'/>
              </div>
              <div className='p-5 flex justify-between items-center'>
              <button disabled={pending} className='bg-gold font-semibold px-3 md:px-5 py-1 md:py-2 rounded-full text-nowrap' type='submit'>
                <p className='text-sm md:text-base'>Send Message</p>
              </button>
              <p aria-live="polite" className="text-xs">
        {success?.message}
      </p>
              </div>
          
              </form>
            </div>

          </div>
          <div>

          </div>
        
        </div>
    </div>
  )
}

export default page