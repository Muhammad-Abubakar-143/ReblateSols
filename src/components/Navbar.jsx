import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close, reblate } from "../assets";
import StaggeredDropDown from "./Dropdowm";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

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
    <nav
      className={`${styles.paddingX} md:w-4/5 w-full md:ml-36 ml-0 mt-4 flex items-center py-5 fixed top-0 z-20 rounded-full bg-white shadow-2xl`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={reblate} alt="logo" className="w-[200px] object-contain" />
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <Link key={nav.key} to={nav.link}>
              <li
                className={`${
                  active === nav.title
                    ? "text-white bg-[#14213d] rounded-full"
                    : "text-[#14213d]"
                } hover:text-white hover:bg-[#14213d] rounded-full  text-[18px]  px-3 py-1 font-medium ease-in-out duration-300 cursor-pointer`}
                onClick={() => setActive(nav.title)}
              >
                {nav.title}
              </li>
            </Link>
          ))}
        </ul>
        <button className="bg-[#14213D] font-bold hidden md:flex text-sm px-6 py-3 rounded-lg shadow-lg text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:text-black hover:scale-110 hover:bg-[#FCA311] duration-300">
          Book a meeting
        </button>
      </div>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        

        <div className="md:hidden flex flex-1 justify-end items-center ">
          <StaggeredDropDown/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
