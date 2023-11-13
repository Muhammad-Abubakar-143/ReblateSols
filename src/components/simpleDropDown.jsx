import {FiChevronDown,} from "react-icons/fi";
  import { motion } from "framer-motion";
  import { useState } from "react";
import { Link } from "react-router-dom";

  
  const SimpleDropDown = () => {
    const [open, setOpen] = useState(false);
  
    return (
      <div className="flex">
        <motion.div animate={open ? "open" : "closed"} className="relative">
          <button
            onClick={() => setOpen((pv) => !pv)}
            className="flex items-center"
          >
            <span className="hover:text-[#14213d] hover:underline hover:underline-offset-8 text-[18px] px-3 py-1 font-medium ease-in-out duration-300 cursor-pointer">Services</span>
            <motion.span variants={iconVariants}>
              <FiChevronDown />
            </motion.span>
          </button>
  
          <motion.ul
            initial={wrapperVariants.closed}
            variants={wrapperVariants}
            style={{ originY: "top", translateX: "-50%" }}
            className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl absolute top-[120%] left-[50%] w-48 overflow-hidden"
          >
            <Link to='/services/walmart'>
            <Option setOpen={setOpen} text="Walmart"/>
            </Link>
            <Link to="/services/amazon">  
            <Option setOpen={setOpen} text="Amazon"/>
            </Link>
            <Link to="/services/shopify">
            <Option setOpen={setOpen} text="Shopify"/>
            </Link>
            <Link to="/services/web-development">
            <Option setOpen={setOpen} text="Web Development"/>
            </Link>
            <Link to="/services/graphic-designing">
            <Option setOpen={setOpen} text="Graphic Designing"/>
            </Link>
            <Link to="/services/seo">
            <Option setOpen={setOpen} text="SEO"/>
            </Link>
            <Link to="/services/marketing">
            <Option setOpen={setOpen} text="Social Media Marketing"/>
            </Link>
          
          </motion.ul>
        </motion.div>
      </div>
    );
  };
  
  const Option = ({ text,  setOpen }) => {
    return (
      <motion.li
      variants={itemVariants}
        onClick={() => setOpen(false)}
        className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-[#14213d]/10 text-slate-700 hover:text-[#14213d] transition-colors cursor-pointer"
      >
       
        <span variants={actionIconVariants}>{text}</span>
      </motion.li>
    );
  };
  
  export default SimpleDropDown;
  
  const wrapperVariants = {
    open: {
      scaleY: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    closed: {
      scaleY: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.1,
      },
    },
  };
  
  const iconVariants = {
    open: { rotate: 180 },
    closed: { rotate: 0 },
  };
  
  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
      },
    },
    closed: {
      opacity: 0,
      y: -15,
      transition: {
        when: "afterChildren",
      },
    },
  };
  
  const actionIconVariants = {
    open: { scale: 1, y: 0 },
    closed: { scale: 0, y: -7 },
  };