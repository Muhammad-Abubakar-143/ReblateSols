import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const StarWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className="px-16 md:px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0"
      >
        

        <Component />
      </motion.section>
    );
  };

export default StarWrapper;
