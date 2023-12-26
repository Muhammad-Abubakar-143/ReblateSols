import React from "react";
import { FaPeopleRobbery } from "react-icons/fa6";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { PiHandshakeFill } from "react-icons/pi";
import { fadeIn, textVariant, zoomIn } from "../utils/motion";
import {motion} from 'framer-motion'
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
            <div className="py-10 px-10  shadow-md bg-white flex justify-center items-center flex-col">
            <FaPeopleRobbery size={50} className="text-black" />
            <h1 className="text-black font-semibold text-[20px] mt-10 tracking-wider">100+ Clients</h1>
            </div>
            <div className="py-10 px-12 shadow-md bg-white flex justify-center items-center flex-col">
            <HiOutlineOfficeBuilding size={50} className="text-black" />
            <h1 className="text-black font-semibold text-[20px] mt-10 tracking-wider">4 Offices</h1>
            </div>
            <div className="py-10 px-12 shadow-md bg-white flex justify-center items-center flex-col">
            <PiHandshakeFill size={50} className="text-black" />
            <h1 className="text-black font-semibold text-[20px] mt-10 tracking-wider">4+ Years</h1>
            </div>      
        </div>
        <div>
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
            With years of experience, our team provides great business
            opportunities to sellers globally to scale their business in
            marketplaces like Amazon, eBay, and Walmart. In the two years, our
            small team has boomed to a global workforce of 70+ e-commerce
            experts. Till now, we have served more than 1000+ small & big
            businesses. What makes us different is our vision that is a bit
            aspirational from others; we want to be the first brick of your
            every dream and passion. Commitment, innovation, and professionalism
            are our cement that will turn your dreams into reality. Our team
            works in multiple shifts around the clock.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Mission, 'Mission');
