import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";

import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import {HiOutlineLink} from 'react-icons/hi'
import { Link } from "react-router-dom";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-[#14213d] p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <HiOutlineLink />
              
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-[#fca311] font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-gray-200 text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h1 className={`${styles.sectionHeadText} text-gray-700 text-center`}>Our Projects</h1>
      </motion.div>

      <div className='w-full flex justify-center text-center'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases our skills and experience through
          real-world examples of my work. It reflects our
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
      <div className="mt-8 flex justify-center align-middle items-center">
        <h3 className={`${styles.sectionSubText} mr-5`}>Want to see More ?</h3>
      <button className='bg-[#14213D] font-bold md:flex text-sm px-6 py-3 rounded-lg shadow-lg text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:text-black hover:scale-110 hover:bg-[#FCA311] duration-300'>
              <Link to="/portfolio">
              View More
              </Link>
            </button>
      </div> 
    </>
  );
};

export default SectionWrapper(Works, "");
