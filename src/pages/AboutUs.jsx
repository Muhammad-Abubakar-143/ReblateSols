import React from 'react'
import { Company } from '../assets'

const AboutUs = () => {
  return (
    <div className='pt-[100px] flex justify-between mx-[100px] w-full'>
      <div>
        <h1 className='text-black'>about us</h1>
      </div>
      <div className='max-w-[500px]'>
        <img src={Company} alt="Reblate " />
      </div>
      
  </div>

    
  )
}

export default AboutUs