import React, { useState } from 'react'
import NoCareer from '../components/NoCareer'
import JobPosting from '../components/JobPosting'
import { career } from '../constants/career'
import JobApplicationForm from '../components/JobApplication'
const Careers = () => {
  const [jobsAvailable, setJobsAvailable] = useState(career.length > 0);
  return (
    <div className='bg-white'>

      <JobPosting/>
      {/* <JobApplicationForm/> */}
      {/* {jobsAvailable ? (
        career.map((job)=>(
          <JobPosting key={job.id} title={job.title} desc={job.desc} experience={job.experience} loc={job.loc}/>
        ))
        
      ) : (
        <NoCareer />
      )} */}
    </div>
  )
}

export default Careers