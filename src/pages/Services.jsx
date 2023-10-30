import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants/services";
import { textVariant } from "../utils/motion";
import ServicesSection from "../components/ServicesSection";
import { useState } from "react";




const Services = () => {
  const [service, setService] = useState(services);

  const FilterType = (main_title) => {
    if (main_title === "all") {
      setService(services);
    } else {
      const filtered = services.filter((item) => {
        return item.main_title === main_title;
      });
      setService(filtered);
    }
  };
  


  return (
    <>
      <motion.div variants={textVariant()} className="pt-[120px] mx-auto">
        <h2 className={`${styles.sectionHeadText} text-[#14213d] text-center`}>Services</h2>

      </motion.div>
      <div className="flex sm:lg:mx-[130px] border-b border-gray-200 pb-3 gap-2">
          {/* Options */}
          <select
            id="projects"
            className="font-medium px-6 py-2 border-1 border-gray-200 rounded-lg text-sm sm:text-md bg-indigo-50 text-black"
            onChange={(e) => FilterType(e.target.value)}
          >
            <option className="text-sm sm:text-md" value="all">
              All Projects
            </option>
            <option className="sm:text-md" value="Walmart">
            Walmart
            </option>
            <option className="sm:text-md" value="Amazon">
            Amazon
            </option>
            <option className="sm:text-md" value="Web Development">
            Web Development
            </option>
            <option className="sm:text-md" value="Search Engine Optimization">
            Search Engine Optimization
            </option>
            <option className="sm:text-md" value="Social Media Marketing">
            Social Media Marketing
            </option>
            <option className="sm:text-md" value="Graphic Designing">
            Graphic Designing
            </option>
          </select>
        </div>
      {service.map((service)=>(
        <ServicesSection key={service.id} main_title={service.main_title} card={service.card}/>
      ))}

      
    </>
  );
};

export default Services