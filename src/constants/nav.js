import { AiOutlineProfile } from "react-icons/ai";
import { BsPersonFillGear, BsTelephone } from "react-icons/bs";
import { TfiWrite } from "react-icons/tfi";
import { BsFillSuitcaseLgFill } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";
import {SiBloglovin} from 'react-icons/si'

export const navLinks = [
   
    {
      key: "about",
      title: "About",
      link:"/about",
      icon:TfiWrite
    },
    {
      key: "services",
      title: "Services",
      link:"/services",
      icon: AiOutlineProfile
    },
    {
      key: "portfolio",
      title: "Portfolio",
      link:'/portfolio',
      icon:BsPersonFillGear,
    },
    // {
    //   key: "blogs",
    //   title: "Blogs",
    //   link:"/blogs",
    //   icon: SiBloglovin
    // },
    {
      key: "careers",
      title: "Careers",
      link:'/careers',
      icon:BsFillSuitcaseLgFill,
    },
    {
      key: "contact",
      title: "Contact",
      link:"/contact",
      icon: BsTelephone
    },
  ];