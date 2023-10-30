import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import { Link } from "react-router-dom";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
  link,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full shadow-lg mx-auto'
  >
    <p className='text-white font-black text-[48px] xs:text-center'>"</p>

    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {designation} of {company}
          </p>
        </div>
        <Link to={link} target="_blank">
        <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-10 h-10 rounded-full object-cover'
        />
        </Link>
        
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`bg-[#fca311] rounded-[20px] shadow-2xl`}>
      <div
        className={`bg-[#14213d] rounded-t-2xl  ${styles.padding} md:min-h-[330px] min-h-[600px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Our Teams</p>
          <h2 className={styles.sectionHeadText}>Message</h2>
        </motion.div>
      </div>
      <div className={`md:-mt-28 mt-[-450px] pb-14 ${styles.paddingX}  flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
