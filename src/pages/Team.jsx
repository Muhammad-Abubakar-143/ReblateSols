import React from "react";
import { MainTeam, team } from "../constants/team";
const Team = () => {
  return (
    <>
      <div className="pt-[120px] bg-gray-100 ">
        <div className="text-center pt-3">
          <h1 className=" font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-[#14213d]">
            Our Team
          </h1>
        </div>
      </div>
      <div className="md:px-9 px-0 flex items-center flex-col bg-gray-100 ">
      <div className="text-center pt-3 mt-10">
          <h1 className=" font-black md:text-[30px] text-[20px] text-[#14213d]">
           Directors
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mx-auto max-w-[1300px] group pb-5 border-b border-gray-300">
          {MainTeam.map((main) => (
            <>
              <div className="md:p-6 p-3 w-full border-gray-300 font-popins group-hover:blur-sm hover:!blur-none mb-20 md:mb-0 ">
                <div className="relative cursor-pointer hover:shadow-md rounded-xl p-5 bg-[#14213d]/10 transition ease-in-out delay-150 hover:scale-110 duration-300 border-4 border-gray-400  w-full  shadow-md shadow-gray-500">
                  <div className=" w-32 rounded-full mx-auto relative h-32 bg-white/50">
                    <img
                      src={main.image}
                      alt={main.title}
                      className="h-32 object-contain w-32 rounded-full"
                    />
                  </div>
                  <div className="relative mt-4">
                    <h1 className="font-bold text-lg text-[#14213d]">
                      {main.title}
                    </h1>
                    <p className="font-sm text-[12px] text-center text-gray-500 leading-7">
                      {main.jobType}
                    </p>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      <div className="md:px-9 px-0 flex items-center flex-col bg-gray-100">
      <div className="text-center pt-3 mt-10">
          <h1 className=" font-black md:text-[30px] text-[20px] text-[#14213d]">
            Our Team
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-10 max-w-[1300px] group">
          {team.map((main) => (
            <>
              <div className="md:p-6 p-3 w-full border-gray-300 font-popins group-hover:blur-sm hover:!blur-none mb-20 md:mb-0">
                <div className="relative cursor-pointer hover:shadow-md rounded-xl p-5 bg-[#14213d]/10 transition ease-in-out delay-150 hover:scale-110 duration-300 border-4 border-gray-400  w-full  shadow-md shadow-gray-500">
                  <div className=" w-32 rounded-full mx-auto relative h-32 bg-white/50">
                    <img
                      src={main.image}
                      alt={main.title}
                      className="h-32 object-contain w-32 rounded-full"
                    />
                  </div>
                  <div className="relative mt-4">
                    <h1 className="font-bold text-md text-[#14213d]">
                      {main.title}
                    </h1>
                    <p className="font-sm text-[12px] text-gray-500 leading-7">
                      {main.jobType}
                    </p>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Team;
