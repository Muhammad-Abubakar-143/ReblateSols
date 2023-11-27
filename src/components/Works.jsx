import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";

import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { HiOutlineLink } from "react-icons/hi";
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
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className="bg-black/10 p-5 rounded-2xl sm:w-[360px] group w-full relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[#14213d] translate-x-[100%] group-hover:translate-x-[0%] transition-transform duration-300" />
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl border-2 border-gray-400"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <HiOutlineLink />
            </div>
          </div>
        </div>

        <div className="mt-5 relative">
          <h3 className="text-black font-bold text-[24px] group-hover:text-[#fca311] z-10">{name}</h3>
          <p className="mt-2 text-gray-900 text-[14px] group-hover:text-white z-10">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 relative group-hover:z-10">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h1 className={`${styles.sectionHeadText} text-gray-700 text-center`}>
          Our Projects
        </h1>
      </motion.div>

      <div className="w-full flex justify-center text-center">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[14px] md:text-[17px] leading-[30px]"
        >
          Our portfolio includes a wide range of successful enterprises, each of
          which demonstrates our dedication to quality and originality. Our team
          has consistently provided extraordinary outcomes, from ground-breaking
          ECommerce to revolutionary websites. We are proud
          of our ability to transform concepts into practical, meaningful
          realities. Explore our remarkable projects to get a sense of what's
          possible when you work with us. Join us in influencing the
          technological future!
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
      <div className="mt-8 flex justify-center align-middle items-center">
        <h3 className={`${styles.sectionSubText} mr-5 `}>Want to see More ?</h3>
        <button className="bg-[#14213D] font-bold md:flex text-sm px-6 py-3 rounded-lg shadow-lg text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:text-black hover:scale-110 hover:bg-[#FCA311] duration-300">
          <Link to="/portfolio" className="md:text-[14px] text-[12px]">View More</Link>
        </button>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
