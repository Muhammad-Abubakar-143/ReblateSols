import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { textVariant } from "../utils/motion";
import ServicesSection from "../components/ServicesSection";




const Services = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="pt-[120px] mx-auto">
        <h2 className={`${styles.sectionHeadText} text-[#14213d] text-center`}>Services</h2>

      </motion.div>
      {services.map((service)=>(
        <ServicesSection key={service.id} main_title={service.main_title} card={service.card}/>
      ))}

      
    </>
  );
};

export default Services