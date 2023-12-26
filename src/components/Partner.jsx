import React from "react";
import { Link } from "react-router-dom";
import { TrustPilot } from "../assets";


const Partner = () => {
  return (
    <>
      <div className="mb-4 text-center pt-8">
        <h1 className="font-black md:text-[30px] sm:text-[50px]  text-[30px] text-[#14213d]">
        Review Us
        </h1>
        <div className="flex flex-wrap py-4 mx-auto justify-center items-center">
          <Link
            to="https://www.sortlist.com/agency/reblate-solutions"
            className="inline-block md:w-[210px] w-[150px] md:h-[60px] mr-6"
            target="_blank"
          >
            <img
              src="https://core.sortlist.com//_/apps/core/images/badges-en/badge-flag-blue-light-xl.svg"
              alt="flag"
            />
          </Link>
          <Link
            to="https://www.trustpilot.com/review/reblatesols.com"
            className="inline-block md:w-[210px] w-[150px] md:h-[60px] mt-1"
            target="_blank"
          >
            <img
              src={TrustPilot}
              alt="Trust Pilot "
            />
          </Link>
          
          
        </div>
      </div>
    </>
  );
};

export default Partner;

