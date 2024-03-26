import React, { useState } from "react";
import JobApplicationForm from "./JobApplication";
import { Link } from "react-router-dom";
import { careerBg } from "../assets";
import { BsClockHistory, BsFillSuitcaseLgFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { career } from "../constants/career";
import CareerMenu from "./CareerMenu";

const JobPosting = ({ key, title, desc, experience,loc }) => {
  const [showModal, setShowModal] = useState(false);

  const jobTitle= "Develop"
  const companyEmail = import.meta.env.CAREERS_EMAIL
  const handleApplyNowClick = () => {
    const subject = encodeURIComponent(`Application for ${jobTitle}`);
    const mailtoLink = `mailto:${companyEmail}?subject=${subject}`;

    window.location.href = mailtoLink;
  };

  return (
    <>
      <div className="md:pt-[75px] pt-[90px]">
      <img src={careerBg} alt="Career Background" className="w-full object-contain" />
      <div className="text-black text-left px-4 md:py-[90px] py-[40px] md:px-7 max-w-5xl mx-auto">
          <h1 className="font-bold md:text-[40px] text-[#14213d] text-[30px]">Join Reblate Solutions <br /> <span className="font-normal text-[25px] md:text-[30px]">Where Your Career Takes Flight</span> </h1> 
          <p className="text-gray-700 text-[18px] md:text-[20px] mb-4">Welcome to Reblate Solutions, a hub of innovation and growth in the e-commerce realm. Join our global team and play a pivotal role in shaping the future of online business.</p> 
          <h2 className="font-bold text-[#14213d] text-[25px] md:text-[35px]">Why Reblate Solutions?</h2>   
            <CareerMenu/>
      </div>
      </div>
      <div className="p-4 md:pl-7">
        <h1 className="font-bold md:text-[40px] text-[#14213d] text-[30px]">Explore Opportunities</h1>
      </div>
      <div className="p-5 flex flex-wrap">
        {career.map((job)=>(
        <div key={job.id} className="group mx-2 mt-10 grid max-w-screen-md space-x-8 overflow-hidden rounded-lg border border-gray-300 py-8 text-gray-700 shadow transition hover:shadow-lg">
          <div className="col-span-11 flex flex-col px-8 text-left sm:pl-4">
            <h1 className="mb-3 overflow-hidden text-lg font-semibold sm:text-xl">
              {job.title}
            </h1>
            <p className="overflow-hidden text-sm">
              {job.desc}
            </p>
            <div className="mt-5 flex justify-between flex-col space-y-3 text-sm font-medium text-gray-500 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
              <div className="flex flex-wrap gap-2">
                {job.experience.map((experience)=>(
                  <>
                <span className="ml-2 mr-3 rounded-full bg-green-100 px-2 py-0.5 text-green-900">
                  {experience.years}
                </span>
                <span className="ml-2 mr-3 rounded-full bg-red-100 px-2 py-0.5 text-red-900">
                  {experience.teach}
                </span>
                </>
                ))}
              </div>
            </div>
            <div className="mt-4 flex justify-between items-center md:flex-row flex-col gap-3 md:gap-0">
              <div className="flex flex-wrap gap-2 md:gap-0">
                {job.loc.map((loc)=>(
                  <>
                <span className="flex items-center gap-2 ml-2 mr-3 text-xs rounded-full bg-[#fca311]/50 px-2 py-1 text-[#14213d]">
                  <MdLocationOn className="bg-gree-500" size={15} />
                  {loc.location}
                </span>
                <span className="flex items-center gap-2 ml-2 mr-3 text-xs rounded-full bg-orange-100 px-2 py-1 text-orange-900">
                  <BsFillSuitcaseLgFill size={15} />
                  {loc.site}
                </span>
                  
                  </>
                ))}
              </div>
              <Link
                onClick={handleApplyNowClick}
                className="bg-[#14213D] font-semibold lg:flex text-xs px-4 py-2 rounded-lg shadow-lg text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:text-black hover:scale-110 hover:bg-[#FCA311] duration-300"
              >
                Apply Now
              </Link>
            </div>

            {/* {showModal && (
              <JobApplicationForm closeModal={() => setShowModal(false)} jobTitle={job.title} companyEmail="careers@reblatesols.com" />
            )} */}
          </div>
        </div>
        ))}
      </div>
    </>
  );
};

export default JobPosting;
