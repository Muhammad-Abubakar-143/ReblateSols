import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants/tech";
import { fadeIn } from "../utils/motion";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { Link } from "react-router-dom";

const ServiceCard = ({ title, image, link }) => {
  return (
    <Link to={link}>
        <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="bg-black/10 p-5 rounded-2xl w-full"
    >
      <div className="w-full flex items-center justify-between">
        <div className="relative w-[35%] flex md:w-[50%]">
          <img
            src={image}
            alt="project_image"
            className="w-[60%] object-contain rounded-2xl md:h-[40px] h-auto"
          />
        </div>
        <div className="w-full flex justify-start">
          <h3 className="text-black font-bold md:text-[14px] text-[13px] text-start">
            {title}
          </h3>
        </div>
      </div>
    </Tilt>
    </Link>

  );
};

const Tech = () => {
  return (
    <>
      <div className="mb-8 text-center pt-3 w-full">
        <h1 className=" font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-[#14213d]">
          Our Services
        </h1>
        <p className="mt-3 text-secondary text-[14px] md:text-[17px] text-center leading-[30px]">
          Staying ahead of the curve is essential in today's fast-paced
          corporate world. Our broad suite of services are carefully designed to
          improve your brand, increase productivity, and propel success. Whether
          you need creative solutions in ECommerce, Web Development, or Graphic
          Designing, our team of seasoned specialists is committed to exceeding
          your expectations. Join us as we start on a path of unmatched
          development and success. Improve your business today!
        </p>
      </div>
      <div className="flex-row flex-wrap justify-center gap-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {technologies.map((technology) => (
          <ServiceCard
            key={technology}
            title={technology.title}
            image={technology.icon}
            {...technology}
          />
        ))}
      </div>
      
    </>
  );
};

export default SectionWrapper(Tech, "");
