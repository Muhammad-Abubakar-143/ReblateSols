import { AiOutlineProfile } from "react-icons/ai";
import { BsPersonFillGear, BsTelephone } from "react-icons/bs";
import { TfiWrite } from "react-icons/tfi";

export const navLinks = [
    {
      key: "portfolio",
      title: "Portfolio",
      link:'/portfolio',
      icon:BsPersonFillGear,
    },
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
      key: "contact",
      title: "Contact",
      link:"/contact",
      icon: BsTelephone
    },
  ];