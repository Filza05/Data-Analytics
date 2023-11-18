import React from 'react'
import Laptop from '../assets/laptop.jpg'

function Analytics() {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240] mx-auto grid md:grid-cols-2'>
      <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/'/>
      <div className='flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
        <h1 className='text-black font-bold  py-2 md:text-4xl sm:text-3xl text-2xl'>Manage Data Analytics Centrally</h1>
        <p className='font-semibold'>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.</p>
        <button className='bg-black text-[#00df9a] w-[200px] h-[50px] rounded-lg md:mx-0 mx-auto my-6 font-semibold hover:bg-gray-600'>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Analytics