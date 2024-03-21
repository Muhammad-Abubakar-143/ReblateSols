import React from 'react'
import { Contact } from '../components'
import Mail from '../components/Mail'

const ContactUs = () => {
  return (
    <>
     <div className="text-center w-full pt-[130px] bg-white">
        <h1 className=" font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-[#14213d]">
          Contact Us
        </h1>
        <p
          className=" text-secondary text-[14px] md:text-[17px] leading-[30px]"
        >
         Feel free to Contact Us Anytime!
        </p>
        
      </div>
    <div className='relative bg-white'>
      <Contact/>
  <Mail/>
  </div>
    </>
  )
}

export default ContactUs