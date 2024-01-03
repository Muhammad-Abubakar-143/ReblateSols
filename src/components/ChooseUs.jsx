import React from 'react'
import ChooseUsMenu from './ChooseUsMenu'


const ChooseUs = () => {
  
  return (
    <div className="pb-6 w-full relative">
         <div className="w-20 h-20 bg-[#14213d] rounded-full mr-5 absolute top-[-40px] left-[-50px] hidden md:flex" />
        <div className="md:mx-[100px] ml-2">
          <div className="flex relative p-5 border-b border-gray-300">
            <h1 className="mr-1 font-semibold md:text-[30px] sm:text-[50px] xs:text-[40px] text-[20px] text-[#14213d] ml-3 py-1">
              Why
            </h1>
            <span className="font-semibold md:text-[30px] sm:text-[50px] xs:text-[40px] text-[20px] text-white rounded-full px-[25px] py-[5px] bg-[#14213d]">
              Choose Us
            </span>
          </div>
          <div>
           <ChooseUsMenu/>
          </div>
         
        </div>
      </div>
  )
}

export default ChooseUs