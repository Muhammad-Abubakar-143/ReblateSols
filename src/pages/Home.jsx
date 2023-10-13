import React from 'react'
import { Feedbacks, Tech, Works } from '../components'
import SquishyCard from '../components/Experience'
import ShuffleHero from '../components/Hero'
import HoverDevCards from '../components/Values'

const Home = () => {
  return (
<>
<div className='bg-black/10 pt-24 pb-24'>
        
        <ShuffleHero />
        </div>
        <HoverDevCards/>
        {/* <div className='bg-[#14213d] pt-10'>
        <SquishyCard />
        </div> */}
        <Tech />
        <Works />
        <Feedbacks />
</>
  )
}

export default Home