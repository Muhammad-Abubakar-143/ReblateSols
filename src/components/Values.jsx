import React from "react";
import { FiThumbsUp } from "react-icons/fi";
import { AiOutlineTeam } from "react-icons/ai";
import { HiOutlineLink } from "react-icons/hi";
import { PiHandshakeLight } from "react-icons/pi";
import { values } from "../assets";
const HoverDevCards = () => {
  return (
    <>
      <div className="mb-4 text-center pt-8">
        <h1 className=" font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-[#14213d]">
          Our Values
        </h1>
      </div>
      <div className="px-9 pb-10 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 mx-auto">
          <Card
            title="Customer Centricity"
            subtitle="Reblate Solutions prioritizes Customer Centricity, focusing on understanding unique customer needs and aspirations. They offer tailored solutions, ensuring a customer-centric approach in all aspects of operations. Their commitment to customer satisfaction forms the foundation of enduring partnerships, ensuring your success is ours."
            Icon={PiHandshakeLight}
          />
          <Card
            title="Team Collaboration"
            subtitle="Effective teamwork and collaboration are key to Reblates Solutions' success. The company culture fosters open communication, idea sharing, and mutual respect among its team members. This collaborative spirit extends beyond internal teams to clients and partners, ensuring a seamless experience for all stakeholders."
            Icon={AiOutlineTeam}
          />
          <Card
            title="Excellence"
            subtitle="The team at Reblate Solutions is dedicated to delivering excellence in every aspect of their business. Their unwavering commitment to excellence is evident in every interaction, product, and solution they provide, ensuring a culture of innovation and quality."
            Icon={FiThumbsUp}
          />
          <Card
            title="Community Engagement"
            subtitle="Reblate Solutions is dedicated to fostering a thriving community by recognizing its profound impact. Through partnerships, volunteer efforts, and outreach initiatives, they aim to create a positive, lasting impact on the lives of those around them, contributing to a stronger, more inclusive world."
            Icon={HiOutlineLink}
          />
        </div>
        <div className="w-full flex items-end bg-black/10 rounded-xl">
          <img src={values} alt="Reblate" />
        </div>
      </div>
    </>
  );
};

const Card = ({ title, subtitle, Icon }) => {
  return (
    <div className="w-full p-4 rounded-lg border-[1px] border-slate-300 relative overflow-hidden group bg-white">
      <div className="absolute inset-0 bg-[#14213d] translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

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
