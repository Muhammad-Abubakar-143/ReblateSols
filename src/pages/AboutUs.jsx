import React from "react";
import {motion} from 'framer-motion'
import Partner from "../components/Partner";
import Mission from "../components/Mission";
import ChooseUs from "../components/ChooseUs";
import { banner } from "../assets";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";
const AboutUs = () => {
  return (
    <>
      <div
        className="pb-8 w-full pt-[130px] bg-gray-100 relative bg-[image:var(--image-url)] bg-cover bg-center"
        style={{ "--image-url": `url(${banner})` }}
      >
        <motion.div variants={fadeIn("tween", "left", 0.2, 1)} className="md:w-20 w-10 h-10 md:h-20 bg-[#fca311] rounded-full absolute left-0 md:bottom-[-40px] bottom-[-20px] ml-5" />
        <div className="md:w-20 w-10 h-10 md:h-20 bg-[#fca311] rounded-full absolute right-0 md:top-[40px] top-[70px] mr-5" />
        <h1 className=" font-black text-center md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-[#14213d]">
          About Us
        </h1>
        <p className="mt-3 md:mx-auto mx-[10px] text-[#14213d] text-[12px] md:text-[17px] md:leading-[30px] max-w-[1100px] tracking-wide">
          The firm was founded in 2020 with a mission to help every business and
          brands who are struggling to expand their business.{" "}
          <br className="hidden md:block" />
          Reblate Solutions is a digital ecommerce consulting and marketing
          agency that gives innovative and compelling online solutions to
          business owners worldwide. We believe in collectivism and openness
          therefore, we ensure that every single client gets the best matched
          services they want. Integrity, commitment, innovation, quality and
          teamwork are our core values. <br className="hidden md:block" />
          With years of experience our team provides great business
          opportunities to sellers globally to scale their business in
          marketplaces like Amazon, eBay, and Walmart. In the four years, our
          small team has boomed to a global workforce of 50+ ecommerce experts.
          Till now we have served more than 1000+ small & big businesses.{" "}
          <br className="hidde md:block" />
          What makes us different is our vision that is a bit aspirational from
          others; we want to be the first brick of your every dream and passion.
          Commitment, innovation and professionalism are our cement that will
          turn your dreams into reality. Our team works in multiple shifts
          around the clock.
        </p>
      </div>
      <div className=" pb-6">
        <Partner />
      </div>
      <div className="bg-gray-100 ">

       <Mission />
      </div>
      <ChooseUs />
    </>
  );
};

export default SectionWrapper(AboutUs, 'AboutUs');
