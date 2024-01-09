import React from "react";
import { Link } from "react-router-dom";

const ContentMenu = ({ content }) => {
  return (
    <>
      <div className="md:px-9 px-0 flex items-center flex-col">
        {content.map((item) => (
          <div className="md:p-6 p-3 w-full border-gray-300 border-b">
            <h1 className=" font-black text-[30px] text-[#14213d] mb-28 pb-5 md:pb-0">
              {item.mainTitle}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-4 max-w-[1300px] group ">
              {item.portfolio.map((port) => (
                <>
                  <Link
                    to={port.link}
                    target="_blank"
                    className="font-popins group-hover:blur-sm hover:!blur-none mb-20 md:mb-0"
                  >
                    <div className="cursor-pointer hover:shadow-md rounded-xl p-5 aspect-[5/7] bg-[#14213d]/10 bg-cover bg-center transition ease-in-out delay-150 hover:scale-110 duration-300 border-4 border-gray-400  w-full  shadow-md shadow-gray-500" style={{ backgroundImage: `url(${port.image})` }}>
                      
                      <div className="">
                        <h1 className="font-bold text-xl text-[#14213d] mb-2">
                          {port.title}
                        </h1>
                        <p className="font-sm text-[15px] text-gray-500 text-sm leading-7">
                          {port.desc}
                        </p>
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
