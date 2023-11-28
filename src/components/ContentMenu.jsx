import React from "react";
import { Link } from "react-router-dom";


const ContentMenu = ({ content }) => {
  return (
    <>
      {/* Search Content */}
      <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:px-[130px] px-0 lg:grid-cols-4 gap-5 w-fit pb-[50px] `}
      >
        {content.map((item) => (
        <Link to={item.link} target="_blank" className="relative overflow-hidden bg-white group border-4 border-gray-400 hover:shadow-lg rounded-2xl w-full max-h-[500px] shadow-md shadow-gray-500">
              <div className="absolute inset-0 bg-[#14213d] translate-x-[100%] group-hover:translate-x-[0%] transition-transform duration-300" />
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-[30px] border-none object-cover w-full h-[250px] mb-3 p-4 relative group-hover:z-10"
                />
                <Link className="rounded-xl shadow-lg cursor-pointer mb-10 sm:mb-0 ">
                  <div className="text-left px-4 pb-6 relative z-10">
                    <h1 className="font-semibold text-xl text-[#14213d] mb-2 group-hover:text-[#fca311]">
                      {item.title}
                    </h1>
                    <span className="font-sm text-[15px] text-slate-400 group-hover:text-violet-200">
                      {item.desc}
                    </span>
                  </div>
                </Link>
              </Link>
        ))}
      </div>
    </>
  );
};

export default ContentMenu;
