import { fadeIn } from "../utils/motion";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { mission } from "../assets";

const Mission = () => {
  return (
    <div className="p-8 w-full px-0">
      <motion.div variants={fadeIn("left", "tween", 0.2, 1)}>
        <h1 className="md:px-10 md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] px-3 font-black mb-5 pb-5 strokeFill tracking-wider text-center">
          Our Mission
        </h1>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-center">
        <div className="md:w-[90%] w-full flex flex-wrap gap-6 items-center justify-center md:mx-auto mx-0">
          <img src={mission} alt="Reblate Solutions & Service Provider's Mission" />
        </div>
        <div className="md:pr-10 pr-0">
          
          <p className="mt-3 md:mx-auto mx-[10px] text-[#14213d] text-[12px] md:text-[17px] tracking-wider md:leading-[30px] max-w-[1100px]">
            At Reblate Solutions & Service Provider, our mission is to
            revolutionize e-commerce growth for businesses worldwide. We're
            dedicated to providing innovative digital strategies and
            cutting-edge solutions that propel brands toward unprecedented
            success in today's competitive online landscape.
            <br className="hidden md:block" />
            Driven by a commitment to integrity, innovation, and unwavering
            quality, we stand as a beacon of support for businesses aiming to
            expand their footprint across leading marketplaces such as Amazon,
            eBay, and Walmart.
            <br className="hidden md:block" />
            Our mission extends beyond conventional boundaries; we aspire to be
            the catalyst that ignites and nurtures the aspirations and dreams of
            every client. Through relentless dedication and a global team of
            over 25+ e-commerce experts, we ensure personalized, top-tier
            services that fuel business growth.
            <br className="hidden md:block" />
            Reblate Solutions & Service Provider thrives on the belief that collective success stems from tailored, client-centric strategies, fostering an environment of trust, growth, and remarkable achievements."
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Mission, "Mission");
