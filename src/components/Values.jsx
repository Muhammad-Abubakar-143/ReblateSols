import React from "react";
import { FiThumbsUp } from "react-icons/fi";
import {AiOutlineTeam} from 'react-icons/ai'
import {HiOutlineLink} from 'react-icons/hi'
import {PiHandshakeLight} from 'react-icons/pi'
const HoverDevCards = () => {
  return (
    <>
    <div className="mb-4 text-center pt-8">
    <h1 className=" font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-[#14213d]">Our Values</h1>
 </div>
    <div className="px-9 pb-10">
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-4 mx-auto">
        <Card
          title="Customer Centricity"
          subtitle="Our focus is on delivering exceptional values and services to our beloved customers"
          href="#"
          Icon={PiHandshakeLight}
        />
        <Card 
        title="Team Collaboration" 
        subtitle="We thrive on a culture of collaboration, valuing diverse perspectives and ideas" 
        href="#" 
        Icon={AiOutlineTeam} />
        <Card 
        title="Excellence" 
        subtitle="We relentlessly pursue excellence, setting high standards in all that we do" 
        href="#" 
        Icon={FiThumbsUp} />
        <Card
          title="Community Engagement"
          subtitle="We actively engage with and contribute to the communities where we operate"
          href="#"
          Icon={HiOutlineLink}
        />
      </div>
    </div>
    </>
    
  );
};

const Card = ({ title, subtitle, Icon, href }) => {
  return (
    <a
      href={href}
      className="w-full p-4 rounded-lg border-[1px] border-slate-300 relative overflow-hidden group bg-white"
    >
      <div className="absolute inset-0 bg-[#14213d] translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

      <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-slate-200 group-hover:text-[#fca311] group-hover:rotate-12 transition-transform duration-300" />
      <Icon className="mb-2 text-2xl text-[#14213d] group-hover:text-white transition-colors relative z-10 duration-300" />
      <h3 className="font-medium text-lg text-slate-950 group-hover:text-white relative z-10 duration-300">
        {title}
      </h3>
      <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300">
        {subtitle}
      </p>
    </a>
  );
};

export default HoverDevCards;