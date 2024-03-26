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
        <h1 className={`pb-8 ${styles.sectionHeadText} text-[#14213d] text-center`}>
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

const Card = ({ id, title, desc, image, link }) => {
  return (
    <Link to="/service-description" state={{ id: id }} onClick={() => window.scrollTo(0, 0)}>
      <div className="flex flex-col gap-4 w-full p-6 rounded-lg border-[1px] border-gray-300 relative overflow-hidden group bg-white shadow hover:shadow-lg hover:scale-[102%] transition-all duration-300">
        <div className="absolute inset-[-1px] bg-[#14213d] translate-x-[100%] group-hover:translate-x-[0%] transition-transform duration-300" />
        <div className="md:lg:w-32 w-20 flex items-center justify-center md:lg:h-32 h-20 bg-[#14213d]/10 rounded-full group-hover:bg-gray-200 relative z-10">
          <img
            src={image}
            alt={title}
            className="md:lg:w-20 w-12 md:lg:h-20 h-12 object-contain"
          />
        </div>
        <div className="mb-2">
          <h3 className="font-medium text-lg lg:text-lg text-[#14213d] group-hover:text-white relative z-10 duration-300">
            {title}
          </h3>
          <p className="text-slate-400 md:text-md text-sm group-hover:text-violet-200 relative z-10 duration-300">
            {desc}
            <Link to={link} className="ml-2 text-[#14213d] text-sm font-bold relative z-10 group-hover:text-white ">Read More</Link>
          </p>
        </div>
      </div>
    </Link>
  );
};