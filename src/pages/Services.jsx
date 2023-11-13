import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants/services";
import { textVariant } from "../utils/motion";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        className="pt-[130px] mx-auto bg-gray-100"
      >
        <h1 className={`${styles.sectionHeadText} text-[#14213d] text-center`}>
          Services
        </h1>
      </motion.div>

      <div className="px-9 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-gray-100">
        {services.map((service) => (
          <Card key={service.id} {...service} />
        ))}
      </div>
    </>
  );
};

export default Services;

const Card = ({ title, desc, image, link }) => {
  return (
    <div className="w-full p-4 rounded-lg border-[1px] border-gray-100 relative overflow-hidden group bg-white">
      <div className="absolute inset-0 bg-[#14213d] translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

      <div className="w-32 flex items-center justify-center h-32 bg-[#14213d]/10 rounded-full group-hover:bg-gray-200 relative z-10">
          <img
            src={image}
            alt="walamart"
            className="w-20 h-20 object-contain"
          />
      </div>
      <div className="mb-2">
        <h3 className="font-medium text-sm lg:text-lg text-[#14213d] group-hover:text-white relative z-10 duration-300">
          {title}
        </h3>
        <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300">
          {desc}
        </p>
      </div>
      <div className="relative z-10 bg-none bottom-0">
          <Link to={link}>
            <button className="group-hover:bg-white/30 bg-[#14213d] relative z-10 font-bold md:flex text-sm px-6 py-3 rounded-lg drop-shadow-lg text-white">
              Read More
            </button>
          </Link>
        </div>
    </div>
  );
};

