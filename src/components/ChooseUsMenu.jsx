import React from 'react'
import { success } from '../assets'

const ChooseUsMenu = ({content}) => {
  return (
    <div className='bg-[#14213d]  shadow-2xl shadow-gray-400'>
        {content.map((content)=>(
            <div className='p-6 mt-4 md:mt-10 text-[#fca311]'>
              <div className='p-4 rounded-full bg-white w-24 h-24 mb-10'>
              <img src={content.image} className='w-full object-contain' alt="success" />
              </div>
             <h1 className='mb-10 text-[30px] tracking-wide font-medium'>{content.title}</h1>
             <p className='mb-10 text-[20px] tracking-wide text-white'>{content.para}</p>
            </div>
        ))}
            
            </div>
  )
}

export default ChooseUsMenu