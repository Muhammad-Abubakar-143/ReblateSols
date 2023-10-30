import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Tilt from "react-tilt";
import { fadeIn } from "../utils/motion";

const ContentMenu = ({ content }) => {
  return (
    <>
      {/* Search Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:mx-[130px] mx-0 lg:grid-cols-4 gap-5 mt-5 w-fit">
        {content.map((item) => (
        
            <Tilt
              options={{
                max: 45,
                scale: 1,
                speed: 450,
              }}
              className="bg-[#14213d] hover:bg-black/25 hover:text-black p-5 rounded-2xl w-full max-h-[500px]"
            >
              <Link to={item.link} target="_blank">
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-lg border-none object-cover w-full h-[250px]"
                />

                <Link className="rounded-xl shadow-lg cursor-pointer mb-10 sm:mb-0 bg-gray-100 ">
                  <div className="text-left px-4 py-6">
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
