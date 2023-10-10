import React from 'react'
import { Experience, Feedbacks, Hero, Navbar, Tech, Works } from '../components'

const Home = () => {
  return (
<>
<div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
     
          <Hero />
        </div>
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
</>
  )
}

export default Home