import React from "react";
import {
  FaDribbble,
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";
import {RiTwitterXLine} from 'react-icons/ri'
import {BsInstagram} from 'react-icons/bs'
 
import { reblate } from "../assets";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";
import Subscribe from "./Subscribe";

const Footer = () => {
  return (
    <>
        <div className="mx-auto py-16 px-10 grid  lg:grid-cols-3 gap-8 text-white bg-gray-900">
      <div>
        <img src={reblate} alt="Reblate Logo" className="w-[250px] object-contain" />
        <p className="py-4">
        We offer highly effective strategies that foster growth and fulfillment within your business Our expenses remain. Regular to domesticate purchaser accept as true with.
        </p>
        <div className="flex justify-between w-full md:w-[30%] my-6">
          <FaFacebookF size={15} className="transition ease-in-out delay-150 hover:scale-110 hover:text-[#FCA311] duration-300 cursor-pointer" />
          <BsInstagram size={15} className="transition ease-in-out delay-150 hover:scale-110 hover:text-[#FCA311] duration-300 cursor-pointer" />
          <RiTwitterXLine size={15} className="transition ease-in-out delay-150 hover:scale-110 hover:text-[#FCA311] duration-300 cursor-pointer" />
          <FaLinkedinIn size={15} className="transition ease-in-out delay-150 hover:scale-110 hover:text-[#FCA311] duration-300 cursor-pointer" />
          <FaPinterestP size={15} className="transition ease-in-out delay-150 hover:scale-110 hover:text-[#FCA311] duration-300 cursor-pointer" />
          <FaDribbble size={15} className="transition ease-in-out delay-150 hover:scale-110 hover:text-[#FCA311] duration-300 cursor-pointer" />
        </div>
      </div>
      <div className="lg:col-span-2 md:flex justify-between mt-6 max-w-3xl grid grid-cols-1 ">
        <div className="mb-6 md:mb-0">
          <h6 className="font-medium text-[#FCA311] mb-2">Contact Us</h6>
          <ul>
            <li className="py-2 text-sm">High End Plaza, MB1, Citi Housing, <br className="md:block hidden"/> Jhelum, Punjab 46900</li>
            <li className="py-2 text-sm">Monday to Friday</li>
            <li className="py-2 text-sm">Day Shift: <br className="hidden md:block"/> 
            10:00 AM - 06:00 PM</li>
            <li className="py-2 text-sm">Night Shift:<br className="hidden md:block"/> 
            08:00 PM - 05:00 AM</li>
  
          </ul>
        </div>
        <div className="mb-6 md:mb-0">
          <h6 className="font-medium text-[#FCA311] mb-2">Our Company</h6>
          <ul>
            {navLinks.map((link)=>(
              <li key={link.key} className="mb-2 cursor-pointer transition ease-in-out delay-150  hover:text-[#FCA311] duration-300">
                <Link to={link.link}>
                {link.title}
                </Link>  
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-[#FCA311] mb-2">Useful Links</h6>
          <ul>
            <li className="py-2 text-sm cursor-pointer hover:text-[#FCA311]">Book A Meeting</li>
            <li className="py-2 text-sm cursor-pointer hover:text-[#FCA311]">Contact Us</li>
            <li className="py-2 text-sm cursor-pointer hover:text-[#FCA311]">Careers</li>
            
          </ul>
        </div>
        
      </div>
    </div>
    <Subscribe/>
  </>
  );
};

export default Footer;
