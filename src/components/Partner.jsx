import React from "react";
import { Link } from "react-router-dom";
import { TrustPilot, Clutch } from "../assets";


const Partner = () => {
  return (
    <>
      <div className="mb-4 text-center pt-8">
        <h1 className="md:px-10 md:text-[40px] text-[30px] px-3 font-black mb-5 pb-5 strokeFill tracking-wider text-center">
        Review Us
        </h1>
        <div className="flex flex-wrap py-4 mx-auto justify-center items-center gap-3">
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
            className="inline-block md:w-[210px] w-[150px] md:h-[60px] mt-1 mr-6"
            target="_blank"
          >
            <img
              src={TrustPilot}
              alt="Trust Pilot "
            />
          </Link>
          <Link
            to="https://clutch.co/profile/reblate-solutions-service-providers?_gl=1*1rygx2o*_ga*MTM0NzQzMjIyMi4xNzAzNjc3MTQ3*_ga_D0WFGX8X3V*MTcwMzY3NzE0Ny4xLjEuMTcwMzY3NzIwNy42MC4wLjA.*_fplc*ajVoYmNXJTJGcyUyRlZhJTJGMzNVSjMxZVl2bFlsM1VjS3A0bllPMDEyZXdiN3QlMkZCb0JKWHdRUlRXeFFVSFY0MnJvWFV5JTJCc3llUHg3QkVHMU1QNHFvSFBqV0ZYWXYySGl3QUVDUmZDQmZEWDJzTVh3OExQUzVoSjdYVVBxQ1l5VTBZdyUzRCUzRA..#highlights"
          
            target="_blank"
          >
            <img
              src={Clutch}
              alt="Clutch"
            />
          </Link>
          
          
        </div>
      </div>
    </>
  );
};

export default Partner;

