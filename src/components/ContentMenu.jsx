import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Tilt from "react-tilt";
import { fadeIn } from "../utils/motion";
import { portfolioback } from "../assets";

const ContentMenu = ({ content }) => {
  return (
    <>
      {/* Search Content */}
      <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:px-[130px] px-0  bg-cover bg-center bg-[image:var(--image-url)] lg:grid-cols-4 gap-5 pt-10 w-fit pb-[50px] backdrop-brightness-50 backdrop-blur-sm`}
      style={{'--image-url': `url(${portfolioback})`}}
      >
        {content.map((item) => (
        
            <Tilt
              options={{
                max: 45,
                scale: 1,
                speed: 450,
              }}
              className="border-4 border-[#fca311] hover:shadow-lg rounded-2xl w-full max-h-[500px] shadow-md shadow-gray-500"
            >
              <Link to={item.link} target="_blank">
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-[30px] border-none object-cover w-full h-[250px] mb-3 p-4"
                />

                <Link className="rounded-xl shadow-lg cursor-pointer mb-10 sm:mb-0 ">
                  <div className="text-left px-4 pb-6">
                    <p className="font-semibold text-xl text-[#fca311] mb-2">
                      {item.title}
                    </p>
                    <span className="font-sm text-[15px]">
                      {item.desc}
                    </span>
                  </div>
                </Link>
              </Link>
            </Tilt>
      
        ))}
      </div>
    </>
  );
};

export default ContentMenu;
