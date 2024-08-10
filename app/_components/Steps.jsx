import Image from 'next/image'
import React from 'react'

const Steps = () => {
  return (
    <div className='flex items-center flex-col justify-center mt-20'>
         <h1 className='text-center font-bold text-xl p-4  md:text-2xl lg:text-4xl'>Simple steps to create a great cover letter:</h1>
  
   <div className='flex items-center'>
    <Image width={700} height={700} src="/steps.png" alt="" className='h' />
   </div>

    </div>
  )
}

export default Steps