import React from "react";
import { FiThumbsUp } from "react-icons/fi";
import { AiOutlineTeam } from "react-icons/ai";
import { HiOutlineLink } from "react-icons/hi";
import { PiHandshakeLight } from "react-icons/pi";
import { values } from "../assets";
const HoverDevCards = () => {
  return (
    <>
      <div className="md:w-[70%] w-full flex justify-center items-end max-w-5xl mx-auto mt-10">
          <img src={values} alt="Reblate" className="w-[70%] object-contain" />
        </div>
      <div className="px-9 pb-10 mt-5 mx-auto">
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 mx-auto max-w-6xl">
          <Card
            title="Customer Centricity"
            subtitle="Reblate Solutions ensures unique solutions for their customers, focusing on their needs and aspirations, ensuring a customer-centric approach in all operations."
            Icon={PiHandshakeLight}
          />
          <Card
            title="Team Collaboration"
            subtitle="Effective teamwork among team members at Reblates Solutions' is a key factor in fostering idea sharing and ensuring a seamless experience for all stakeholders."
            Icon={AiOutlineTeam}
          />
          <Card
            title="Excellence"
            subtitle="Reblate Solutions is committed to delivering excellence in every aspect of their business, fostering a culture of innovation and quality in every interaction, product, and solution they offer."
            Icon={FiThumbsUp}
          />
          <Card
            title="Community Engagement"
            subtitle="Reblate Solutions is actively utilizing volunteer efforts to create a more inclusive world, demonstrating a profound impact on the lives of those around them."
            Icon={HiOutlineLink}
          />
        </div>
        
      </div>
    </>
  );
}; 

const Card = ({ title, subtitle, Icon }) => {
  return (
    <div className="w-full p-4 rounded-lg border-[1px] border-slate-300 relative overflow-hidden group bg-white">
      <div className="absolute inset-0 bg-[#14213d] translate-x-[100%] group-hover:translate-x-[0%] transition-transform duration-300" />

      <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-slate-200 group-hover:text-[#fca311] group-hover:rotate-12 transition-transform duration-300" />
      <Icon className="mb-2 text-2xl text-[#14213d] group-hover:text-white transition-colors relative z-10 duration-300" />
      <h3 className="font-medium text-sm lg:text-lg text-[#14213d] group-hover:text-white relative z-10 duration-300">
        {title}
      </h3>
      <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300">
        {subtitle}
      </p>
    </div>
  );
};

export default HoverDevCards;
