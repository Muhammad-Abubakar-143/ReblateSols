import React, { useEffect, useState } from "react";
import { review } from "../constants/review";
import { MdLocationOn } from "react-icons/md";
import { FaStar } from "react-icons/fa6";

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 2000); // Adjust the interval as needed (in milliseconds)

    return () => clearInterval(intervalId); // Clear the interval on component unmount
  }, []);
  return (
    <>
      <div className="w-full text-center pt-5">
        <h1 className="font-black md:text-[60px] text-[#14213d] sm:text-[50px] xs:text-[40px] text-[30px]">
          Testimonial
        </h1>
      </div>
      <div className="overflow-hidden">
        <div
          className="flex testimonails-animation"
        >
          {review.map((testimonial) => (
            <div
              key={testimonial.id}
              className="max-w-3xl mx-2 border border-gray-300 h-[215px] md:h-auto p-5 rounded-lg overflow-hidden group relative min-w-[calc(100%/1)] md:min-w-[calc(100%/2)] lg:min-w-[calc(100%/3)]" 
            >
              <div className="absolute inset-[-2px] bg-[#14213d] translate-x-[100%] group-hover:translate-x-[0%] transition-transform duration-300" />
              <div className="flex mb-4 group-hover:z-20 z-10 relative">
                <img
                  className="w-10 h-10 me-4 rounded-full"
                  src={testimonial.img}
                  alt={testimonial.name}
                />
                <div className="font-medium dark:text-white ml-2">
                  <p className="text-black text-[15px] group-hover:text-white">
                    {testimonial.name}
                  </p>
                  <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
                    <FaStar size={15} className="text-[#FFDF00]" />
                    <FaStar size={15} className="text-[#FFDF00]" />
                    <FaStar size={15} className="text-[#FFDF00]" />
                    <FaStar size={15} className="text-[#FFDF00]" />
                    <FaStar size={15} className="text-[#FFDF00]" />
                  </div>
                </div>
                <div className="mb-1 border-l border-gray-500 ml-8 text-sm text-gray-500 dark:text-gray-400 relative group-hover:z-10 ">
                  <div className="flex items-center justify-center ml-2 align-middle md:text-base text-[20px] leading-4 pt-4 pb-4">
                    <MdLocationOn
                      className="mr-2 text-black group-hover:text-white"
                      size={20}
                    />
                    <p className="text-[12px] md:text-[15px] group-hover:text-gray-100">
                      {testimonial.from}
                    </p>
                  </div>
                </div>
              </div>
              <p className="mb-2 text-[15px] text-gray-500 relative group-hover:text-gray-100 group-hover:z-10">
                {testimonial.review}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
