import React from "react";
import { motion } from "framer-motion";
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
        <motion.div
          variants={fadeIn("tween", "left", 0.2, 1)}
          className="md:w-20 w-10 h-10 md:h-20 bg-[#fca311] rounded-full absolute left-0 md:bottom-[-40px] bottom-[-20px] ml-5"
        />
        <div className="md:w-20 w-10 h-10 md:h-20 bg-[#fca311] rounded-full absolute right-0 md:top-[40px] top-[70px] mr-5" />
        <h1 className=" font-black text-center md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-[#14213d]">
          About Us
        </h1>
        <p className="mt-3 md:mx-auto mx-[10px] text-[#14213d] text-[12px] md:text-[17px] md:leading-[30px] max-w-[1100px] tracking-wide">
          Established in 2020, Reblate Solutions & Service Provider strides with
          a mission to empower struggling businesses and brands for robust
          expansion in the digital sphere.
          <br className="hidden md:block" />
          With years of industry expertise, our adept team specializes in
          unlocking unparalleled business opportunities for sellers across
          global marketplaces. Leveraging our experience, we've facilitated
          growth on platforms like Amazon, eBay, and notably, Walmart
          Fulfillment Services.
          <br className="hidden md:block" />
          Our proficiency in Walmart Fulfillment Services has been refined, and
          we've sharpened our expertise in Walmart Fulfillment Services,
          enabling sellers to maximize their reach and efficiency within this
          robust platform. Leveraging years of industry experience, our team of
          25+ e-commerce experts ensures every client receives personalized,
          cutting-edge solutions. To date, we've served over 1000+ businesses,
          both large and small, with a vision that transcends traditional norms.
          By supporting dreams of our dedication to professionalism and creative
          approaches, we hope to be the foundation of each client's ambitions.
          <br className="hidden md:block" />
          What sets us apart is our visionary approach, which often transcends conventional boundaries. We aspire to be the cornerstone of your aspirations and ambitions. Firmly anchored in commitment, innovation, and professionalism, we are the catalysts that transform your dreams into tangible realities. Our dedicated team operates round the clock, across multiple shifts, ensuring seamless support and service.

        </p>
      </div>
      <div className="bg-white pb-6">
        <Partner />
      </div>
      <div className="bg-gray-100 ">
        <Mission />
      </div>
      <div className="bg-white">

      <ChooseUs />
      </div>

    </>
  );
};

export default SectionWrapper(AboutUs, "AboutUs");
