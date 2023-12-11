import React from "react";
import { Link } from "react-router-dom";
import { ClutchBadge } from "react-clutch-badge";

const Partner = ({ clutchData }) => {
  return (
    <>
      <div className="mb-4 text-center pt-8">
        <h1 className=" font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-[#14213d]">
          Review Us
        </h1>
        <div className="flex flex-wrap py-4 mx-auto justify-center items-center">
          <Link
            to="https://www.sortlist.com/agency/reblate-solutions"
            className="inline-block w-[210px] h-[60px]"
            target="_blank"
          >
            <img
              src="https://core.sortlist.com//_/apps/core/images/badges-en/badge-flag-blue-light-xl.svg"
              alt="flag"
            />
          </Link>
          <div className="mt-1">
          <div className="trustpilot-widget flex items-center justify-center" 
          data-locale="en-US" 
          data-template-id="56278e9abfbbba0bdcd568bc" 
          data-businessunit-id="6557102980b53e0f703d1ddb" 
          data-style-height="52px" data-style-width="100%">   
          <a href="https://www.trustpilot.com/review/reblatesols.com" target="_blank" rel="noopener">
            Trustpilot
            </a> 
          </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Partner;

export const clutchData = [
  {
    url: "https://widget.clutch.co",
    style: "w-[9px] h-[90px]",
    clutchcompanyId: "2239597",
    data_nofollow: "true",
    data_expandifr: "true",
    data_shape: "round",
    data_scale: "100",
  },
];
