import React from "react";
import { Link } from "react-router-dom";
import SquishyCard from "./card";
import { ar3 } from "../assets";

const ContentMenu = ({ content }) => {
  return (
    <>
      {/* <SquishyCard/> */}

      <div className="md:px-9 px-0 flex items-center flex-col">
        {content.map((item) => (
          <div className="md:p-6 p-3 w-full border-gray-300 border-b">
            <h1 className=" font-black text-[30px] text-[#14213d] mb-20 pb-2 md:pb-0">
              {item.mainTitle}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-4 max-w-[1300px] group ">
              {item.portfolio.map((port) => (
                <>
                  <Link to={port.link} target="_blank" className="font-popins group-hover:blur-sm hover:!blur-none mb-20 md:mb-0">

                    <div className="relative cursor-pointer hover:shadow-md rounded-xl p-5 pb-0 bg-[#14213d]/10 transition ease-in-out delay-150 hover:scale-110 duration-300 border-4 border-gray-400  w-full  shadow-md shadow-gray-500">
                      <img
                        src={port.image}
                        alt={port.title}
                        className="w-40 rounded-full mx-auto relative h-40 top-[-90px] object-contain"
                      />
                      <div className="relative top-[-50px]">
                      <h1 className="font-semibold text-xl text-[#14213d] mb-2">{port.title}</h1>
                      <p className="font-sm text-[15px] text-gray-500 text-sm leading-7">
                        {port.desc}
                      </p>
                      </div>
                    </div>
                  </Link>
                  {/* <Link
                    to={port.link}
                    target="_blank"
                    className="relative overflow-hidden transition ease-in-out delay-150 hover:scale-110 duration-300 group-hover:blur-sm hover:!blur-none bg-[#14213d]/10 border-4 border-gray-400 hover:shadow-lg rounded-2xl w-full max-h-[500px] shadow-md shadow-gray-500"
                  >
                    <div className="absolute inset-0 bg-[#14213d] translate-x-[100%] group-hover:translate-x-[0%] transition-transform duration-300" />
                    <div className="relative cursor-pointer hover:shadow-md">
                      <img
                        src={port.image}
                        alt={port.title}
                        className="rounded-[30px] border-none object-cover w-full h-[250px] mb-3 p-4"
                      />
                    </div>
                    <div className="text-left px-4 pb-6 relative z-10 cursor-pointer mb-10 sm:mb-0 ">
                      <h1 className="font-semibold text-xl text-[#14213d] mb-2 group-hover:text-[#fca311]">
                        {port.title}
                      </h1>
                      <span className="font-sm text-[15px] text-slate-500 group-hover:text-violet-200">
                        {port.desc}
                      </span>
                    </div>
                  </Link> */}
                </>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ContentMenu;
