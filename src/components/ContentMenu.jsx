import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Tilt from "react-tilt";
import { fadeIn } from "../utils/motion";

const ContentMenu = ({ content }) => {
  return (
    <>
      {/* Search Content */}
      <div className="grid  grid-cols-1 gap-4 mx-auto sm:mx-auto sm:grid-cols-2 lg:grid-cols-4 mt-6 sm:gap-10 px-4">
        {content.map((item) => (
          <motion.div
            variants={fadeIn("up", "spring",)}
            key={item.id}
          >
            <Tilt
              options={{
                max: 45,
                scale: 1,
                speed: 450,
              }}
              className="bg-gray-200 p-5 rounded-2xl sm:w-[360px] w-full"
            >
              <Link to={item.link} target="_blank">
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-lg border-none object-cover w-full h-[250px]"
                />

                <Link className="rounded-xl shadow-lg cursor-pointer mb-10 sm:mb-0 bg-gray-100 ">
                  <div className="text-center px-4 py-6">
                    <p className="font-semibold text-xl text-black mb-2">
                      {item.title}
                    </p>
                    <span className="font-sm text-[15px] text-gray-500">
                      {item.desc}
                    </span>
                  </div>
                </Link>
              </Link>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default ContentMenu;
