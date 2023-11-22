import React from 'react'
import { Contact} from '../components'
import Hire from './Careers'
import Mail from '../components/Mail'

const ContactUs = () => {
  return (
    <>
     <div className="mb-8 text-center w-full pt-[130px]">
        <h1 className=" font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-[#14213d]">
          Contact Us
        </h1>
        
      </div>
    <div className='relative'>
      <Contact/>
  </div>
  <Mail/>

    </>
  )
}

export default ContactUs