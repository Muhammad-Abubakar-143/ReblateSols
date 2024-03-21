import React from 'react'
import { Contact, StarsCanvas } from '../components'
import CareerForm from '../components/CareerForm'

const Hire = () => {
  return (
    <div className='relative z-0 bg-black top-[50px] md:px-9 px-4 md:pb-20 pb-14'>
      <CareerForm />
      <StarsCanvas />
    </div>
  )
}

export default Hire