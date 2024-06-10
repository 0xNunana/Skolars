'use client'
 
import { useFormStatus } from 'react-dom'
 
export function SubmitButton() {
  const { pending } = useFormStatus()
 
  return (
    <button disabled={pending} className='bg-gold font-semibold px-3 md:px-5 py-1 md:py-2 rounded-full text-nowrap' type='submit'>
                <p className='text-sm md:text-base'>Send Message</p>
              </button>
  )
}