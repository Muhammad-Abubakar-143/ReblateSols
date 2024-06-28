import {
  FaQuora,
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";

import { ReblateLogo, reblateWhite } from "../assets";
import { navLinks } from "../constants/nav";
import { Link } from "react-router-dom";
import Subscribe from "./Subscribe";
import { useEffect } from "react";
import { useState } from "react";

const Footer = () => {
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
    <>
      {/* <div className="px-6 mx-auto py-16 md:pl-[130px] pl-5 pr-5 grid lg:grid-cols-3 gap-8 text-white text-sm dark:bg-gray-800 bg-gray-900 relative overflow-hidden md:px-8 md:py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 relative z-10">
            <div className="">
              <Link to="/" onClick={() => {
                      setActive("");
                      window.scrollTo(0, 0);
                    }}>
              <img
                src={reblateWhite}
                alt="Reblate Logo" loading="lazy"
                className="w-[250px] object-contain"
              />
              </Link>
              <p className="py-4">
                We offer highly effective strategies that foster growth and
                fulfillment within your business Our expenses remain. Regular to
                domesticate purchaser accept as true with.
              </p>
              <div className="flex justify-between w-full md:w-[30%] my-6">
                <Link to="https://www.facebook.com/Reblatesols" target="_blank">
                  <FaFacebookF
                    size={15}
                    className="transition ease-in-out delay-150 hover:scale-110 hover:text-[#FCA311] duration-300 cursor-pointer"
                  />
                </Link>
                <Link
                  to="https://www.instagram.com/reblatesols/"
                  target="_blank"
                >
                  <BsInstagram
                    size={15}
                    className="transition ease-in-out delay-150 hover:scale-110 hover:text-[#FCA311] duration-300 cursor-pointer"
                  />
                </Link>
                <Link to="https://twitter.com/reblatesols" target="_blank">
                  <RiTwitterXLine
                    size={15}
                    className="transition ease-in-out delay-150 hover:scale-110 hover:text-[#FCA311] duration-300 cursor-pointer"
                  />
                </Link>
                <Link
                  to="https://www.linkedin.com/company/reblate-solutions/"
                  target="_blank"
                >
                  <FaLinkedinIn
                    size={15}
                    className="transition ease-in-out delay-150 hover:scale-110 hover:text-[#FCA311] duration-300 cursor-pointer"
                  />
                </Link>
                <Link
                  to="https://www.pinterest.com/Reblatesols/"
                  target="_blank"
                >
                  <FaPinterestP
                    size={15}
                    className="transition ease-in-out delay-150 hover:scale-110 hover:text-[#FCA311] duration-300 cursor-pointer"
                  />
                </Link>
                
                <Link
                  to="https://reblatesolutionsspace.quora.com"
                  target="_blank"
                >
                <FaQuora
                  size={15}
                  className="transition ease-in-out delay-150 hover:scale-110 hover:text-[#FCA311] duration-300 cursor-pointer"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="py-2 absolute top-[-170px] right-[-170px] w-96 h-96 md:flex hidden">
          <img src={ReblateLogo} alt="Reblate Solutions logo" className="w-full object-contain" />  
        </div>
        <div className="py-2 absolute bottom-[-200px] left-[-200px] w-96 h-96 md:flex hidden">
          <img src={ReblateLogo} alt="Reblate Solutions logo" className="w-full object-contain" />  
        </div>
        <div className="lg:col-span-2 md:flex justify-between mt-6 max-w-3xl grid grid-cols-1 relative z-20">
          <div className="mb-6 md:mb-0">
            <h6 className="font-medium text-[#FCA311] mb-2">Contact Us</h6>
            <ul>
              <li className="py-2 text-sm">
                High End Plaza, MB1, Citi Housing,{" "}
                <br className="md:block hidden" /> Jhelum, Punjab 46900
              </li>
              <li className="py-2 text-sm">info@reblatesols.com</li>
              <li className="py-2 text-sm">+1 (646) 814-8076 </li>
              <h6 className="font-medium text-[#FCA311] mb-2">For Support</h6>
              <li className="pb-2 text-sm">support@reblatesols.com</li>
            </ul>
          </div>
          <div className="mb-6 md:mb-0">
            <h6 className="font-medium text-[#FCA311] mb-2">Our Company</h6>
            <ul>
              {navLinks.map((link) => (
                <li
                  key={link.key}
                  className="mb-2 cursor-pointer transition ease-in-out delay-150  hover:text-[#FCA311] duration-300"
                >
                  <Link
                    to={link.link}
                    onClick={() => {
                      setActive("");
                      window.scrollTo(0, 0);
                    }}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-[#FCA311] mb-2">Useful Links</h6>
            <ul>
              <Link
                to="https://calendly.com/reblate"
                target="_blank"
              >
                <li className="pb-2 text-sm cursor-pointer hover:text-[#FCA311]">
                  Book A Meeting
                </li>
              </Link>
              <Link to="/hire-us">
                <li className="pb-2 text-sm cursor-pointer hover:text-[#FCA311]">
                  Hire Us
                </li>
              </Link>
              <Link onClick={() => {
                      setActive("");
                      window.scrollTo(0, 0);
                    }} to="/our-team">
                <li className="pb-2 text-sm cursor-pointer hover:text-[#FCA311]">
                  Our Team
                </li>
              </Link>
              <Link onClick={() => {
                      setActive("");
                      window.scrollTo(0, 0);
                    }}
                     to="/terms-and-condition">
                <li className="pb-2 text-sm cursor-pointer hover:text-[#FCA311]">
                  Terms and Conditions
                </li>
              </Link>
              <Link onClick={() => {
                      setActive("");
                      window.scrollTo(0, 0);
                    }}
                     to="/privacy-policy">
                <li className="pb-2 text-sm cursor-pointer hover:text-[#FCA311]">
                  Privacy Policy
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div> */}
    <div className="w-full bg-[#090325]">

      <div className="flex flex-col justify-center items-center max-w-4xl mx-auto py-16 px-6">
          <img src={reblateWhite} alt="Reblate Solutions" className="w-72 mb-10" />
          <p className="text-center text-gray-400 text-sm">We offer highly effective strategies that foster growth and fulfillment within your business Our expenses remain. Regular to domesticate purchaser accept as true with.</p>
          <ul className="flex flex-col xs:flex-row space-x-2 sm:space-x-4 mt-10 text-center ">
              
              <Link onClick={() => {
                      setActive("");
                      window.scrollTo(0, 0);
                    }} to="/our-team">
                <li className="pb-2 text-sm cursor-pointer hover:text-[#FCA311]">
                  Our Team 
                </li>
              </Link>
              <Link onClick={() => {
                      setActive("");
                      window.scrollTo(0, 0);
                    }}
                     to="/terms-and-condition">
                <li className='pb-2 text-sm cursor-pointer hover:text-[#FCA311] before:content-[""] before:pr-0 xs:before:content-["|"] xs:before:pr-6'>
                  Terms and Conditions
                </li>
              </Link>
              <Link onClick={() => {
                      setActive("");
                      window.scrollTo(0, 0);
                    }}
                     to="/privacy-policy">
                <li className='pb-2 text-sm cursor-pointer hover:text-[#FCA311] before:content-[""] before:pr-0 xs:before:content-["|"] xs:before:pr-6'>
                  Privacy Policy
                </li>
              </Link>
            </ul>
      </div>
    <div className="w-full border-t border-t-gray-800 px-6">

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center max-w-6xl mx-auto py-6">
        <p className="text-center sm:text-left my-6 sm:my-auto text-gray-400">©2024 Copyeright all reserved</p>
        <div className="flex justify-between space-x-6">
                <Link to="https://www.facebook.com/Reblatesols" target="_blank">
                  <FaFacebookF
                    size={15}
                    className="transition ease-in-out delay-150 hover:scale-110 hover:text-[#FCA311] duration-300 cursor-pointer"
                  />
                </Link>
                <Link
                  to="https://www.instagram.com/reblatesols/"
                  target="_blank"
                >
                  <BsInstagram
                    size={15}
                    className="transition ease-in-out delay-150 hover:scale-110 hover:text-[#FCA311] duration-300 cursor-pointer"
                  />
                </Link>
                <Link to="https://twitter.com/reblatesols" target="_blank">
                  <RiTwitterXLine
                    size={15}
                    className="transition ease-in-out delay-150 hover:scale-110 hover:text-[#FCA311] duration-300 cursor-pointer"
                  />
                </Link>
                <Link
                  to="https://www.linkedin.com/company/reblate-solutions/"
                  target="_blank"
                >
                  <FaLinkedinIn
                    size={15}
                    className="transition ease-in-out delay-150 hover:scale-110 hover:text-[#FCA311] duration-300 cursor-pointer"
                  />
                </Link>
                <Link
                  to="https://www.pinterest.com/Reblatesols/"
                  target="_blank"
                >
                  <FaPinterestP
                    size={15}
                    className="transition ease-in-out delay-150 hover:scale-110 hover:text-[#FCA311] duration-300 cursor-pointer"
                  />
                </Link>
                <Link
                  to="https://reblatesolutionsspace.quora.com"
                  target="_blank"
                >
                  <FaQuora
                    size={15}
                    className="transition ease-in-out delay-150 hover:scale-110 hover:text-[#FCA311] duration-300 cursor-pointer"
                  />
                </Link>
              </div>
      </div>
     
    </div>
    </div>
    </>
  );
};

export default Footer;
