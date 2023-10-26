import { motion } from "framer-motion";
import {useState } from "react";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";
import {RiMenu3Fill} from 'react-icons/ri'
  
  const StaggeredDropDown = () => {
    const [open, setOpen] = useState(false);
  
    return (
      <div className="flex items-center justify-center bg-white">
        <motion.div animate={open ? "open" : "closed"} className="relative">
          <button
            onClick={() => setOpen((pv) => !pv)}
            className="flex items-center gap-2 px-3 py-2 rounded-md text-indigo-50 bg-[#14213d] hover:bg-[#fca311] hover:text-black transition-colors duration-300 ease-in-out"
          >
           <RiMenu3Fill size={25} />
            
          </button>
  
          <motion.ul
            initial={wrapperVariants.closed}
            variants={wrapperVariants}
            style={{ originY: "top", translateX: "-50%" }}
            className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl absolute top-[120%] left-[-70%] w-48 overflow-hidden"
          >
             {navLinks.map((nav) => (
                <Link key={nav.key} to={nav.link}>
                 <Option setOpen={setOpen} Icon={nav.icon} text={nav.title} />
                 </Link>
              ))}
              <button className='bg-[#14213D] font-bold md:hidden text-xs px-3 py-2 rounded-lg shadow-lg text-white transition ease-in-out delay-150 hover:text-black hover:bg-[#FCA311] duration-300'>
                Book a meeting
            </button>
          </motion.ul>
        </motion.div>
      </div>
    );
  };
  
  const Option = ({ text, Icon, setOpen }) => {
    return (
      <motion.li
        variants={itemVariants}
        onClick={() => setOpen(false)}
        className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-colors cursor-pointer"
      >
        <motion.span variants={actionIconVariants}>
          <Icon />
        </motion.span>
        <span>{text}</span>
      </motion.li>
    );
  };
  
  export default StaggeredDropDown;
  
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