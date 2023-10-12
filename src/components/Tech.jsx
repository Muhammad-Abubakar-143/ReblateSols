import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn, } from "../utils/motion";
import Tilt from "react-tilt";
import { motion } from "framer-motion";



const ServiceCard = ({
  index,
  name,
  image,

}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className="cursor-pointer">
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-black/10 p-5 rounded-2xl  w-full flex items-center'
      >
        <div className='relative w-[50%]'>
          <img
            src={image}
            alt='project_image'
            className='w-[50%] object-contain rounded-2xl'
          />
        </div>

        <div className=''>
          <h3 className='text-black font-bold text-[20px] md:text-[15px]'>{name}</h3>
        </div>
        

        
      </Tilt>
    </motion.div>
  );
};




const Tech = () => {
  return (
    <>
    <div className="mb-8 text-center pt-3">
    <h1 className=" font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-[#14213d]">Our Services</h1>
 </div>
 <div className='flex-row flex-wrap justify-center gap-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
      {technologies.map((technology) => (
        <div className='w-[100%]' key={technology.name}>
          <ServiceCard key={technology} name={technology.name} image={technology.icon} {...technology}/>
        </div>
      ))}
    </div>
    
    </>
   
  );
};

export default SectionWrapper(Tech, ""); 
