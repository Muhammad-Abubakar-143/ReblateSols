import React, { useEffect, useState } from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants/tech";

import { Link } from "react-router-dom";

const ServiceCard = ({ title, image, link }) => {
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
    <Link to={link} onClick={() => {
      setActive("");
      window.scrollTo(0, 0);
    }} className="bg-black/10 p-5 rounded-2xl w-full relative overflow-hidden group">

        <div className="absolute inset-0 bg-[#14213d] translate-x-[100%] group-hover:translate-x-[0%] transition-transform duration-300" />
        <div className="w-full flex items-center justify-between">
          <div className="relative w-[45%] flex md:w-[50%] justify-center">
            <img
              src={image}
              alt="project_image"
              className="w-[60%] object-contain rounded-full md:h-[50px] h-auto p-2 group-hover:bg-gray-100 z-10 "
            />
          </div>
          <div className="w-full flex justify-start">
            <h3 className="text-black font-bold md:text-[16px] text-[13px] group-hover:text-white z-10 text-start">
              {title}
            </h3>
          </div>
        </div>

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
      <div className="flex-row flex-wrap justify-center max-w-5xl mx-auto items-center gap-5 grid grid-cols-1 md:grid-cols-3">
        {technologies.map((technology) => (
          <ServiceCard
            key={technology.title}
            title={technology.title}
            image={technology.icon}
            link={technology.link}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
