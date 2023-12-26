import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Link } from "react-router-dom";

const ProjectCard = ({ index, name, description, image, source_code_link }) => {
  const [scrolled, setScrolled] = useState();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className="mb-20">
      <Link
        to={source_code_link}
        target="_blank"
        className="font-popins group-hover:blur-sm hover:!blur-none"
      >
        <div className="relative cursor-pointer hover:shadow-md rounded-xl p-5 pb-0 bg-[#14213d]/10 transition ease-in-out delay-150 hover:scale-110 duration-300 border-4 border-gray-400  w-full  shadow-md shadow-gray-500">
        <div className="w-48 rounded-full mx-auto relative h-48 top-[-100px] bg-white/50">
                        <img
                          src={image}
                          alt={name}
                          className="h-48 object-contain w-48 rounded-full"
                        />
                      </div>
          <div className="relative top-[-50px]">
            <h1 className="font-semibold text-xl text-[#14213d] mb-2">
              {name}
            </h1>
            <p className="font-sm text-[15px] text-gray-500 text-sm leading-7">
              {description}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h1 className={`${styles.sectionHeadText} text-gray-700 text-center `}>
          Our Projects
        </h1>
      </motion.div>

      <div className="w-full flex justify-center text-center md:pb-10 pb-4 max-w-7xl mx-auto">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[14px] md:text-[17px] leading-[30px]"
        >
          Our portfolio includes a wide range of successful enterprises, each of
          which demonstrates our dedication to quality and originality. Our team
          has consistently provided extraordinary outcomes, from ground-breaking
          ECommerce to revolutionary websites. We are proud of our ability to
          transform concepts into practical, meaningful realities. Explore our
          remarkable projects to get a sense of what's possible when you work
          with us. Join us in influencing the technological future!
        </motion.p>
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-7 group max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
      <div className="mt-8 flex justify-center align-middle items-center pb-10">
        <h3 className="text-sm mr-5 text-gray-500">Want to see More ?</h3>
        <button className="bg-[#14213D] font-bold md:flex text-sm px-6 py-3 rounded-lg shadow-lg text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:text-black hover:scale-110 hover:bg-[#FCA311] duration-300">
          <Link to="/portfolio" className="md:text-[14px] text-[12px]" onClick={() => {
              setActive("");
              window.scrollTo(0, 0);}}>
            View More
          </Link>
        </button>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
