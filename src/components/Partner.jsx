import React from "react";
import { Link } from "react-router-dom";
import { ClutchBadge } from "react-clutch-badge";

const Partner = ({ clutchData }) => {
  return (
    <>
      <div className="mb-4 text-center pt-8">
        <h1 className=" font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-[#14213d]">
          Our Trusted Partners
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
          <ClutchBadge
            classNamePrefix="custom-big-clutch-badge bg-black ml-2 "
            variant="bigLogo"
            {...clutchData}
          />
          {/* <div dangerouslySetInnerHTML={{ __html: '<script type="text/javascript" src="https://widget.clutch.co/static/js/widget.js"></script> <div class="clutch-widget" data-url="https://widget.clutch.co" data-widget-type="2" data-height="45" data-nofollow="true" data-expandifr="true" data-scale="100" data-clutchcompany-id="2239597"></div>' }} /> */}
          <div className="flex items-center justify-center space-x-2">
            <script src="https://widget.clutch.co/static/js/widget.js" async />
            <div
              className="clutch-widget  inline-block max-w[100%]"
              data-url="https://widget.clutch.co"
              data-widget-type="2"
              data-height="45"
              data-nofollow="true"
              data-expandifr="true"
              data-scale="100"
              data-clutchcompany-id="2239597"
            />
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
