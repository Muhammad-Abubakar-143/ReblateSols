import React from "react";
import { FaPeopleRobbery } from "react-icons/fa6";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { PiHandshakeFill } from "react-icons/pi";
import { fadeIn } from "../utils/motion";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";

const Mission = () => {
  return (
    <div className="mb-8 p-8 w-full mt-5 px-0">
      <motion.div variants={fadeIn("left", "tween", 0.2, 1)}>
        <h1 className="md:px-10 px-3 font-black md:text-[100px] text-[40px] mb-5 pb-5 strokeFill tracking-wider">
          Our Mission
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center">
        <div className="md:w-[70%] w-full flex flex-wrap gap-6 items-center justify-center md:mx-auto mx-0">
          <div className="py-10 px-10  shadow-md bg-white flex justify-center items-center flex-col relative">
          <div className="w-10 h-10 bg-[#fca311] rounded-full mr-5 absolute top-[23%] left-[25%]" />
            <FaPeopleRobbery size={50} className="text-black relative z-10" />
            <h1 className="text-black font-semibold text-[20px] mt-10 tracking-wider">
              100+ Clients
            </h1>
          </div>
          <div className="py-10 px-12 shadow-md bg-white flex justify-center items-center flex-col relative">
          <div className="w-10 h-10 bg-[#fca311] rounded-full mr-5 absolute top-[23%] left-[25%]" />
            <HiOutlineOfficeBuilding size={50} className="text-black relative z-10" />
            <h1 className="text-black font-semibold text-[20px] mt-10 tracking-wider">
              4 Offices
            </h1>
          </div>
          <div className="py-10 px-12 shadow-md bg-white flex justify-center items-center flex-col relative">
          <div className="w-10 h-10 bg-[#fca311] rounded-full mr-5 absolute top-[23%] left-[25%]" />
            <PiHandshakeFill size={50} className="text-black relative z-10" />
            <h1 className="text-black font-semibold text-[20px] mt-10 tracking-wider">
              4+ Years
            </h1>
          </div>
        </div>
        <div className="md:pr-10 pr-0">
          <div className="flex relative p-5 border-b border-gray-300">
            <div className="w-5 h-5 bg-[#fca311] rounded-full mr-5 absolute top-[37px] left-0" />
            <h1 className="mr-1 font-semibold md:text-[30px] sm:text-[50px] xs:text-[40px] text-[20px] text-[#14213d] ml-3 py-1">
              Our
            </h1>
            <span className="font-semibold md:text-[30px] sm:text-[50px] xs:text-[40px] text-[20px] text-white rounded-full px-[25px] py-[5px] bg-[#14213d]">
              Mission
            </span>
          </div>
          <p className="mt-3 md:mx-auto mx-[10px] text-[#14213d] text-[12px] md:text-[17px] md:leading-[30px] max-w-[1100px]">
            At Reblate Solutions & Service Provider, our mission is to
            revolutionize e-commerce growth for businesses worldwide. We're
            dedicated to providing innovative digital strategies and
            cutting-edge solutions that propel brands toward unprecedented
            success in today's competitive online landscape.
            <br className="hidden md:block" />
            Driven by a commitment to integrity, innovation, and unwavering
            quality, we stand as a beacon of support for businesses aiming to
            expand their footprint across leading marketplaces such as Amazon,
            eBay, and Walmart.
            <br className="hidden md:block" />
            Our mission extends beyond conventional boundaries; we aspire to be
            the catalyst that ignites and nurtures the aspirations and dreams of
            every client. Through relentless dedication and a global team of
            over 25+ e-commerce experts, we ensure personalized, top-tier
            services that fuel business growth.
            <br className="hidden md:block" />
            Reblate Solutions & Service Provider thrives on the belief that collective success stems from tailored, client-centric strategies, fostering an environment of trust, growth, and remarkable achievements."
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Mission, "Mission");
