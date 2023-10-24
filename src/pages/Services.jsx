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

      <ServicesSection title="Walmart" services={services}/>
      
    </>
  );
};

export default Services