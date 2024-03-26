import React from 'react'
import { Contact, StarsCanvas } from '../components'
import CareerForm from '../components/CareerForm'

const Hire = () => {
  return (
    <div className='relative z-0 bg-black top-[50px] pt-16 pb-32 px-4 xs:px-8 sm:px-16 md:px-32 lg:px-16'>
      <CareerForm />
      <StarsCanvas />
    </div>
  )
}

export default Hire