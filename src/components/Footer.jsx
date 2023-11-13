import React from "react";
import {
  FaQuora,
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP
} from "react-icons/fa";
import {RiTwitterXLine} from 'react-icons/ri'
import {BsInstagram} from 'react-icons/bs'
 
import { reblateWhite } from "../assets";
import { navLinks } from "../constants/nav";
import { Link } from "react-router-dom";
import Subscribe from "./Subscribe";
import { useEffect } from "react";

const Footer = () => {

  
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
        <div className="mx-auto py-16 md:pl-[130px] pl-5 pr-5 grid  lg:grid-cols-3 gap-8 text-white bg-gray-900">
      <div>
        <img src={reblateWhite} alt="Reblate Logo" className="w-[250px] object-contain" />
        <p className="py-4">
        We offer highly effective strategies that foster growth and fulfillment within your business Our expenses remain. Regular to domesticate purchaser accept as true with.
        </p>
        <div className="flex justify-between w-full md:w-[30%] my-6">
          <Link to="https://www.facebook.com/Reblatesols" target="_blank">
          <FaFacebookF size={15} className="transition ease-in-out delay-150 hover:scale-110 hover:text-[#FCA311] duration-300 cursor-pointer" />
          </Link>
          <Link to='https://www.instagram.com/reblatesols/' target="_blank">
          <BsInstagram size={15} className="transition ease-in-out delay-150 hover:scale-110 hover:text-[#FCA311] duration-300 cursor-pointer" />
          </Link>
          <Link to='https://twitter.com/reblatesols' target="_blank">
          <RiTwitterXLine size={15} className="transition ease-in-out delay-150 hover:scale-110 hover:text-[#FCA311] duration-300 cursor-pointer" />
          </Link>
          <Link to="https://www.linkedin.com/company/reblate-solutions/" target="_blank">
          <FaLinkedinIn size={15} className="transition ease-in-out delay-150 hover:scale-110 hover:text-[#FCA311] duration-300 cursor-pointer" />
          </Link>
          <Link to='https://www.pinterest.com/Reblatesols/' target="_blank">
          <FaPinterestP size={15} className="transition ease-in-out delay-150 hover:scale-110 hover:text-[#FCA311] duration-300 cursor-pointer" />
          </Link>
          <FaQuora size={15} className="transition ease-in-out delay-150 hover:scale-110 hover:text-[#FCA311] duration-300 cursor-pointer" />
        </div>
      </div>
      <div className="lg:col-span-2 md:flex justify-between mt-6 max-w-3xl grid grid-cols-1 ">
        <div className="mb-6 md:mb-0">
          <h6 className="font-medium text-[#FCA311] mb-2">Contact Us</h6>
          <ul>
            <li className="py-2 text-sm">High End Plaza, MB1, Citi Housing, <br className="md:block hidden"/> Jhelum, Punjab 46900</li>
            <li className="py-2 text-sm">info@reblatesols.com</li>
            <li className="py-2 text-sm">+1 (646) 814-8076 </li>
            <h6 className="font-medium text-[#FCA311] mb-2">For Support</h6>
            <li className="pb-2 text-sm">support@reblatesols.com</li>
            
  
          </ul>
        </div>
        <div className="mb-6 md:mb-0">
          <h6 className="font-medium text-[#FCA311] mb-2">Our Company</h6>
          <ul>
            {navLinks.map((link)=>(
              <li key={link.key} className="mb-2 cursor-pointer transition ease-in-out delay-150  hover:text-[#FCA311] duration-300">
                <Link to={link.link}  onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}>
                {link.title}
                </Link>  
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-[#FCA311] mb-2">Useful Links</h6>
          <ul>
            <Link to="https://calendly.com/support-mbo/appointment" target="_blank">
            <li className="py-2 text-sm cursor-pointer hover:text-[#FCA311]">Book A Meeting</li>
            </Link>
            <Link to="/hire-us">
            <li className="py-2 text-sm cursor-pointer hover:text-[#FCA311]">Careers</li>
            </Link>
            <Link to='/terms-and-condition'>
            <li className="py-2 text-sm cursor-pointer hover:text-[#FCA311]">Terms and Conditions</li>
            </Link>
            <Link to='/privacy-policy'>
            <li className="py-2 text-sm cursor-pointer hover:text-[#FCA311]">Privacy Policy</li>
            </Link>
            
          </ul>
        </div>
        
      </div>
    </div>
    <Subscribe/>
  </>
  );
};

export default Footer;
