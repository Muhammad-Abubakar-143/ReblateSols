import React from "react";
import { Link } from "react-router-dom";

const ContentMenu = ({ content }) => {
  return (
    <>
      <div className="md:px-9 px-0 flex items-center flex-col">
        {content.map((item) => (
          <div className="md:p-6 p-3 w-full border-gray-300 border-b">
            <h1 className="font-black text-[30px] text-[#14213d] md:mb-14 mb-0 pb-5 md:pb-0">
              {item.mainTitle}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-4 max-w-[1300px]">
              {item.portfolio.map((port) => (
                <>
                  <Link
                    to={port.link}
                    target="_blank"
                    className="font-popins mb-20 md:mb-0 "
                  >
                    <div className="cursor-pointer relative group hover:blurring bg-white/30 hover:border-[#fca311] hover:shadow-md rounded-xl aspect-[5/7] bg-cover bg-center transition ease-in-out delay-150 hover:scale-105 duration-300 border-4 border-gray-400 w-full shadow-md shadow-gray-500">
                      <img
                        src={port.image}
                        alt={port.title}
                        className="object-cover rounded-md w-full blur-none group-hover:blur-[3px]"
                      />

                      {/* Text at the bottom */}
                      <div className="absolute inset-x-0 top-0 p-2 rounded-md right-2 bg-white/50 w-fit bg-opacity-50 text-black transition duration-300 opacity-0 group-hover:opacity-100">
                        <h1 className="text-xs">{port.mainTitle}</h1>
                      </div>
                      <div className="absolute inset-x-0 bottom-0 p-2 rounded-md bg-white/50 w-fit bg-opacity-50 text-black transition duration-300 opacity-0 group-hover:opacity-100">
                        <h1>{port.title}</h1>
                      </div>
                      
                      {/* Logo in the center */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <img
                          src={port.logo}
                          alt="Card Logo"
                          className="w-52 h-52 bg-white/50 p-2 rounded-full transition duration-300 opacity-0 object-contain group-hover:opacity-100"
                        />
                      </div>
                    </div>
                  </Link>
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