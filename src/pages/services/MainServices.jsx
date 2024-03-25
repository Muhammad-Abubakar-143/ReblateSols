import React from "react";
import { technologies } from "../../constants/tech";
import { Link } from "react-router-dom";
import { Services } from "../../constants/servicesMain";
import { useLocation } from 'react-router-dom';

const MainServices = () => {
  const location = useLocation();
  var id = 1;
  console.log(location.state)
  if (location.state !== null) {
    id = location.state.id;
  }
  return (
    <>
      <div className="pb-4 text-center pt-[130px] bg-white">
        <h1 className=" font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-[#14213d]">
          {Services[id].title}
        </h1>
      </div>
      {/* Intro Section */}
      <div className="px-9 grid grid-cols-1 md:grid-cols-2 gap-4 bg-white">
        <div key={Services[id].id} className="w-[90%] flex md:items-start items-center md:justify-start justify-center">
          <img
            src={Services[id].intro.image}
            alt={Services[id].title}
            className="md:w-[80%] w-full md:h-[80%] h-full object-contain"
          />
        </div>
        <div className="text-gray-500 tracking-wider">
          {Services[id].intro.para.map((desc) => (
            <p>{desc}</p>
          ))}
          <h1 className="text-[25px] text-[#14213d] tracking-wider">
            {Services[id].intro.header}
          </h1>
          <p className="tracking-wider">{Services[id].intro.desc}</p>
        </div>
      </div>
      {/* What we offer */}
      <div className="md:pb-8 pb-4 md:px-52 px-5 w-full bg-white">
        <h1 className=" font-black md:text-[60px] md:pl-24 pl-9 sm:text-[50px] xs:text-[40px] text-[30px] text-[#14213d]">
          What we Offer
        </h1>
        <div className="grid gird-cols-1 md:grid-cols-2 gap-2 text-gray-500 md:pl-24 pl-9 max-w-7xl mx-auto mt-4">
          {Services[id].offers.map((offer) => (
            <div key={offer.id} className="text-start w-[90%]">
              <h1 className="text-[25px] text-[#14213d]">{offer.title}</h1>
              <ul className="text-normal">
                {offer.desc.map((desc) => (
                  <li className="list-disc" key={offer.id}>
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {/* Bottom Section */}
      <div className="px-9 pb-10 grid grid-cols-1 md:grid-cols-2 gap-4 bg-white">
        <div className="text-gray-700 flex flex-col justify-center text-left">
          <h1 className="text-[25px] text-[#14213d]">{Services[id].detail.header}</h1>
          {Services[id].detail.para.map((desc) => (
            <p className="text-normal text-gray-500 tracking-wider">{desc}</p>
          ))}
        </div>
        <div className="md:w-[80%] w-full flex md:items-start items-center md:justify-end justify-center">
          <img
            src={Services[id].detail.image}
            alt={Services[id].title}
            className="md:w-[60%] w-full object-contain"
          />
        </div>
      </div>
      {/* Other Services */}
      <div className="pb-4 text-left px-9 bg-white">
        <h1 className=" font-black md:text-[40px] text-[30px] text-[#14213d]">
          Other Services
        </h1>
      </div>
      <div className="px-9 flex-row flex-wrap justify-center gap-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 pb-10 bg-white">
        {technologies.map((technology) => (
          <>
            <Link to="/service-description" key={technology.title}  state={{ id: technology.id }} onClick={() => {
              window.scrollTo(0, 0);
            }} className="bg-black/10 p-5 rounded-2xl w-full relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#14213d] translate-x-[100%] group-hover:translate-x-[0%] transition-transform duration-300" />
              <div className="w-full flex items-center justify-between ">
                <div className="relative w-[35%] flex md:w-[50%]">
                  <img
                    src={technology.icon}
                    alt="project_image"
                    className="w-[60%] object-contain rounded-full md:h-[50px] h-auto p-2 group-hover:bg-gray-100 z-10 "
                  />
                </div>
                <div className="w-full flex justify-start">
                  <h3 className="text-black font-bold md:text-[16px] text-[13px] group-hover:text-white z-10 text-start">
                    {technology.title}
                  </h3>
                </div>
              </div>
            </Link>
          </>
        ))}
      </div>
    </>
  );
};

export default MainServices;