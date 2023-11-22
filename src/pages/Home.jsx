import React from 'react'
import { Feedbacks, Tech, Works } from '../components'
import ShuffleHero from '../components/Hero'
import HoverDevCards from '../components/Values'
import Certificate from '../components/Certificate'
import Partner from '../components/Partner'
import Testimonial from '../components/Testimonial'

const Home = () => {
  return (
<>
<div className='bg-white '>
        
        <ShuffleHero />
        </div>
        <HoverDevCards/>
        <Tech />
        <div className='bg-gray-100'>
        <Testimonial/>
        </div>
        <Works />
        {/* <Certificate/> */}
        {/* <Partner/> */}
        <Feedbacks />
</>
  )
}

export default Home