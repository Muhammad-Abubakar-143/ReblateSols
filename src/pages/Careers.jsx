import React from 'react'
import { Contact, StarsCanvas } from '../components'
import CareerForm from '../components/CareerForm'

const Careers = () => {
  return (
    <div className='relative z-0 bg-black top-[50px]'>
    <CareerForm/>
    <StarsCanvas />
  </div>
  )
}

export default Careers