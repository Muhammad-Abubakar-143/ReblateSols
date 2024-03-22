import React from "react";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { fadeIn} from "../utils/motion";

import { SlLocationPin } from "react-icons/sl";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
return (
   
      <motion.div
        variants={fadeIn("top", "tween", 0.2, 1)}
        className='flex-[0.75] pt-5 pb-8'
      >
        <div className="grid gap-4 grid-cols-1 md:grid-cols-3 mx-auto max-w-7xl justify-center">
          <Card
            title="Contact Phone Numbers"
            subtitle1="+1(646) 814-8076"
            subtitle2="+92 340 5929041"
            Icon={FaPhoneAlt}
          />
          <Card
            title="Our Email"
            subtitle1="info@reblatesols.com"
            subtitle2="support@reblatesols.com"
            Icon={MdOutlineAlternateEmail}
          />
          <Card
            title="Our Location"
            subtitle1="High End Plaza, MB1, Citi Housing,"
            subtitle2="Jhelum, Punjab 46900"
            Icon={SlLocationPin}
          />
         
        </div>
      </motion.div>
  
  );
};

const Card = ({ title, subtitle1, subtitle2, Icon }) => {
  return (
    <div className="w-full p-4 rounded-lg border-[1px] border-slate-300 relative overflow-hidden group bg-white">
      <div className="absolute inset-0 bg-[#14213d] translate-x-[100%] group-hover:translate-x-[0%] transition-transform duration-300" />

      <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-slate-200 group-hover:text-[#fca311] group-hover:rotate-12 transition-transform duration-300" />
      <Icon className="mb-2 text-2xl text-[#14213d] group-hover:text-white transition-colors relative z-10 duration-300" />
      <h3 className="font-medium text-sm lg:text-lg text-[#14213d] group-hover:text-white relative z-10 duration-300">
        {title}
      </h3>
      <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300">
        {subtitle1}
      </p>
      <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300">
        {subtitle2}
      </p>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
