import React from 'react'
import { Feedbacks, Tech, Works } from '../components'
import ShuffleHero from '../components/Hero'
import HoverDevCards from '../components/Values'
import Certificate from '../components/Certificate'
import Partner from '../components/Partner'

const Home = () => {
  return (
<>
<div className='bg-white pt-32 pb-24'>
        
        <ShuffleHero />
        </div>
        <HoverDevCards/>
        <Tech />
        <Works />
        {/* <Certificate/> */}
        {/* <Partner/> */}
        <Feedbacks />
</>
  )
}

export default Home