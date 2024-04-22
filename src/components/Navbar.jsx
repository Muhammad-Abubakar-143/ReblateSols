import { useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants/nav";
import { reblate } from "../assets";
import StaggeredDropDown from "./Dropdowm";

const Navbar = () => {
  const [active, setActive] = useState(0);
  const [scrolled, setScrolled] = useState();

  const handleClick = (index) => {
    setActive(index);
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-white shadow-xl`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" onClick={()=> setActive(0)}>
          <img src={reblate} alt="Reblate Solutions & Service Providers" className="sm:w-[200px] w-36 xs:w-52 object-contain" />
        </Link>

        <ul className="list-none hidden lg:flex flex-row lg:gap-4 xl:gap-10 items-center mx-4">
          {navLinks.map((nav) => (
            <Link key={nav.key} to={nav.link} onClick={() => {
            window.scrollTo(0, 0);
            }}>
              <li
                className={`${nav.key === active
                    ? "text-[#14213d] underline underline-offset-8"
                    : "text-[#14213d]"
                  } hover:text-[#14213d] hover:underline hover:underline-offset-8 text-[16px] px-3 py-1 font-medium ease-in-out duration-300 cursor-pointer`}
                onClick={() => handleClick(nav.key)}
              >

                {nav.title}
              </li>
            </Link>
          ))}
        </ul>
        <Link to="https://calendly.com/reblate" target="_blank" className="bg-[#14213D] font-bold hidden lg:flex text-sm px-6 py-3 rounded-lg shadow-lg text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:text-black hover:scale-110 hover:bg-[#FCA311] duration-300">
          Book a meeting
        </Link>
      </div>


      <div className="lg:hidden flex flex-1 justify-end items-center ">
        <StaggeredDropDown />
      </div>
    </nav>
  );
};

export default Navbar;
