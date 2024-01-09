// JobPosting.js

import React, { useState } from "react";
import JobApplicationForm from "./JobApplication";
import { Link } from "react-router-dom";
import { Web } from "../assets";
import { BsClockHistory, BsFillSuitcaseLgFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { career } from "../constants/career";

const JobPosting = ({ key, title, desc, experience,loc }) => {
  const [showModal, setShowModal] = useState(false);

  const handleApplyClick = () => {
    setShowModal(true);
  };

  return (
    <>
      <div className="text-center pt-[120px]">
        <h1 className=" font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-[#14213d]">
          Careers
        </h1>
      </div>
      <div className="p-5 flex flex-wrap">
        {career.map((job)=>(
        <div key={job.id} className="group mx-2 mt-10 grid max-w-screen-md space-x-8 overflow-hidden rounded-lg border py-8 text-gray-700 shadow transition hover:shadow-lg">
          <div className="col-span-11 flex flex-col pr-8 text-left sm:pl-4">
            <h1 className="mb-3 overflow-hidden pr-7 text-lg font-semibold sm:text-xl">
              {job.title}
            </h1>
            <p className="overflow-hidden pr-7 text-sm">
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
                {/* <span className="flex items-center gap-2 ml-2 mr-3 text-xs rounded-full bg-violet-100 px-2 py-1 text-violet-900">
                  <BsClockHistory size={15} />9 days ago
                </span> */}
              </div>
              <Link
                onClick={handleApplyClick}
                className="bg-[#14213D] font-semibold lg:flex text-xs px-4 py-2 rounded-lg shadow-lg text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:text-black hover:scale-110 hover:bg-[#FCA311] duration-300"
              >
                Apply Now
              </Link>
            </div>

            {showModal && (
              <JobApplicationForm closeModal={() => setShowModal(false)} />
            )}
          </div>
        </div>
        ))}
      </div>
    </>
  );
};

export default JobPosting;
