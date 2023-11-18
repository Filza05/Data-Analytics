import React from 'react'

function Newsletter() {
  return (
    <div className='w-full bg-black py-16 text-white'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-2'> 
        <div>
          <h1 className='font-bold md:text-4xl sm:text-3xl text-2xl'>Want Tips and Tricks to Optimize Your Flow?</h1>
          <p className='py-2 font-semibold'>Sign Up to Our Newsletter and Stay up to date.</p>
        </div>
        <div className='px-8'>
          <div className='flex flex-col sm:flex-row items-center justify-between'>
          <input type='email' placeholder='Enter Email' className='p-3 rounded-md flex w-10/12 text-black mr-3'></input>
          <button className='bg-[#00df9a] w-[200px] h-[50px] rounded-lg mx-auto my-6 font-semibold text-black hover:bg-gray-600'>Notify Me</button>
          </div>
          <p>We care about the protection of your data. Read our <a href='www.google.com' className='text-[#00df9a]'>privacy policy.</a></p>
        </div>
      </div>
    </div>
  )
}

export default Newsletter