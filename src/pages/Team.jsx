import React from "react";
import { Directors, team } from "../constants/team";
import { Link } from "react-router-dom";

const Card = ({ title, jobType, image, link }) => {
  return (
    <Link to={link}>
      <div className="mx-auto w-full px-8 py-10 rounded-lg border-[1px] border-gray-300 relative overflow-hidden group bg-white shadow-lg">
        <div className="absolute inset-[-2px] bg-[#14213d] translate-x-[100%] group-hover:translate-x-[0%] transition-transform duration-300" />
        <div className="mx-auto md:lg:w-36 w-36 flex items-center justify-center md:lg:h-36 h-36 bg-[#14213d]/10 rounded-full group-hover:bg-gray-300 relative z-10">
          <img
            src={image}
            alt="DP"
            className="md:lg:w-32 rounded-full w-32 md:lg:h-32 h-32 object-cover bg-gray-200"
          />
        </div>
        <div className="text-center mt-6">
          <h3 className="font-bold text-lg lg:text-lg text-[#14213d] group-hover:text-white relative z-10 duration-300">
            {title}
          </h3>
          <p className="text-slate-400 md:text-md text-sm group-hover:text-violet-200 relative z-10 duration-300">
            {jobType}
            <Link to={link} className="text-[#14213d] text-sm font-bold relative z-10 group-hover:text-white "></Link>
          </p>
        </div>
      </div>
    </Link>

  );
};

const Team = () => {
  return (
    <div className="bg-gray-100">
      <h1 className="pt-[120px] text-center font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-[#14213d]">
        Our Team
      </h1>
      <h2 className="text-center py-4 mt-10 font-black md:text-[30px] text-[20px] text-[#14213d]">
        Directors
      </h2>
      <div className="sm:mx-36 md:mx-20 mx-12 pb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-x-16 gap-8 bg-gray-100">
        {Directors.map((director) => (
          <Card key={director.id} {...director} />
        ))}
      </div>
      <div className="mx-auto h-[1px] w-3/5 bg-gray-300 my-12"></div>
      <h2 className="text-center pb-4 mt-10 font-black md:text-[30px] text-[20px] text-[#14213d]">
        Our Team
      </h2>
      <div className="mx-12 md:mx-20 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-x-16 gap-8 bg-gray-100">
        {team.map((member) => (
          <Card key={member.id} {...member} />
        ))}
      </div>
    </div>
  );
};

export default Team;
