import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { review } from "../constants/review";
import { BiSolidQuoteRight } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
import { BsArrowRight, BsArrowLeftShort } from "react-icons/bs";
export default function Testimonial() {
  const visibleSlides = window.innerWidth < 768 ? 1 : 2;
  return (
    <>
    <div className="w-full text-center pt-5">
        <h1 className="font-black md:text-[60px] text-[#14213d] sm:text-[50px] xs:text-[40px] text-[30px]">
            Testimonial
        </h1>
    </div>
      <div className="xl:px-20 px-8 pt-12 pb-10 2xl:mx-auto 2xl:container relative z-0">
        <CarouselProvider
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={3}
          interval={100}
          infinite
        >
          <Slider>
            {review.map((item) => (
              <Slide tabIndex="null" key={item.id} visibleSlides={visibleSlides}>
                <div className="md:mt-14 flex">
                  <div className="relative w-[100px] xl:h-75 md:h-70 h-40">
                    <div className="w-20 flex items-center justify-center absolute top-0 -mr-16 md:-mt-14 mt-4 right-0 h-20 bg-[#14213d]/10 rounded-full">
                      <BiSolidQuoteRight className="text-[#14213d]" size={30} />
                    </div>
                  </div>
                  <div className="md:w-2/3 lg:w-2/3 xl:ml-32 md:ml-20 md:mt-0 mt-20 flex flex-col justify-start">
                    <p className="md:text-lg text-sm font-medium leading-6 mt-4 text-gray-600 max-w-lg">{`${item.review}`}</p>
                    <div className="md:mt-8 mt-8">
                      <div className="flex items-center align-middle md:text-base text-[13px] leading-4 mt-2 mb-4 text-gray-600">
                        <img
                          src={item.img}
                          alt={item.name}
                          className="w-10 h-10 object-fill rounded-full mr-3"
                        />
                        <p>{item.name}</p>
                      </div>
                      <div className="flex items-center align-middle md:text-base text-[13px] leading-4 mt-2 mb-4 text-gray-600">
                        <MdLocationOn className="mr-2" size={20} />
                        <p>{item.from}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Slide>
            ))}
          </Slider>
          <div className="flex items-center mt-8">
            <ButtonBack
              className="cursor-pointer border-[#14213d] rounded-full border p-1 hover:bg-[#fca311] duration-300 hover:border-[#fca311]"
              role="button"
              aria-label="previous slide"
            >
              <BsArrowLeftShort className="text-black" size={30} />
            </ButtonBack>

            <ButtonNext
              role="button"
              aria-label="next slide"
              className="cursor-pointer ml-2 border-[#14213d] rounded-full border p-2 hover:bg-[#fca311] duration-300 hover:border-[#fca311]"
            >
              <BsArrowRight className="text-black" size={30} />
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>
    </>
  );
}
