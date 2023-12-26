import React from 'react'
import { success } from '../assets'
import { whyChooseUs } from '../constants/whyChooseUs'


const ChooseUs = () => {
  
  return (
    <div className="mt-5  w-full mb-6 relative">
         <div className="w-20 h-20 bg-[#14213d] rounded-full mr-5 absolute top-[-70px] left-0" />
        <div className="md:mx-[100px] ml-2">
          <div className="flex relative p-5 border-b border-gray-300">
            <h1 className="mr-1 font-semibold md:text-[30px] sm:text-[50px] xs:text-[40px] text-[20px] text-[#14213d] ml-3 py-1">
              Why
            </h1>
            <span className="font-semibold md:text-[30px] sm:text-[50px] xs:text-[40px] text-[20px] text-white rounded-full px-[25px] py-[5px] bg-[#14213d]">
              Choose Us
            </span>
          </div>
          <div className='mt-4 md:mt-10 grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='text-black'>  
            {whyChooseUs.map((choose)=>(
              <>
              <div key={choose.id}>
              <div className='text-black'>
              <ul>
                <li className='p-5 border-b border-gray-500 hover:bg-[#14213d]/10 text-xl transition ease-in-out delay-150 duration-200'>{choose.title}</li>
              </ul>
            </div>
              </div>
              </>
            ))}
            </div>
            <div className='bg-[#14213d]  shadow-2xl shadow-gray-400'>
            <div className='p-6 mt-4 md:mt-10 text-[#fca311]'>
              <div className='p-4 rounded-full bg-white w-24 h-24 mb-10'>
              <img src={success} className='w-full object-contain' alt="success" />
              </div>
             <h1 className='mb-10 text-[30px] tracking-wide font-medium'>A Plan for Success</h1>
             <p className='mb-10 text-[20px] tracking-wide text-white'> A business plan is crucial for success plans, focusing on customer
            psychographics and target market. It provides a clear vision,
            purpose, and goals, ensuring a well-structured approach to success.</p>
            </div>
            </div>
          </div>
         
        </div>
      </div>
  )
}

export default ChooseUs