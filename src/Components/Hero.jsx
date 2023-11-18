import React from 'react'
import Typed from 'react-typed'

function Hero() {
  return (
    <div className='text-white'>
        <div className=' max-w-[800px] mt-[-96px] w-full h-screen text-center flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
            <h1 className='md:text-7xl sm:text-4xl text-4xl font-bold md:py-6'>Grow With Data</h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Fast, Flexible Financing For </p>
                <Typed className='md:text-5xl sm:text-4xl text-xl font-bold text-gray-600 md:pl-4 pl-2'
                strings={['BTB','AFC','SASS']}
                typeSpeed={120}
                backSpeed={140}
                loop/>
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-500 mx-1'>Monitor your data analytics to increase revenue for BTB, AFC and SASS platforms.</p>
            <button className='bg-[#00df9a] w-[200px] h-[50px] rounded-lg mx-auto my-6 font-semibold text-black hover:bg-gray-600'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero