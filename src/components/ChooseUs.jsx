import React from 'react'
import ChooseUsMenu from './ChooseUsMenu'

const ChooseUs = () => {

  return (
    <div className="pb-6 w-full relative">
      <div className="md:mx-[100px] ml-2">
        <div className="flex relative p-5 border-b border-gray-300">
          <h1 className="mr-1 font-black text-center md:text-[60px] text-[50px] text-[#14213d] strokeFill">
            Why Choose Us
          </h1>

        </div>
          <ChooseUsMenu />
      </div>
    </div>
  )
}

export default ChooseUs