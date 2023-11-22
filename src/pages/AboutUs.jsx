import React from "react";
import { about } from "../constants/about";
import { Company } from "../assets";
import { Link } from "react-router-dom";
import Testimonial from "../components/Testimonial";
const AboutUs = () => {
  return (
    <>
      {/* <div className="mb-8 text-center w-full pt-[130px]">
        <h1 className=" font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-[#14213d]">
          Our Team
        </h1>
        <div className="mt-3 grid gird-cols-1 md:grid-col-2 lg:grid-cols-4 gap-4 mx-[20px] md:mx-[120px]">
          {about.map((item) => (
            <div
              key={item.id}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <img
                className="rounded-t-lg w-full"
                src={item.img}
                alt={item.title}
              />
              <div className="p-5">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-left">
                  {item.title}
                </h5>
                <p className="text-left mb-2 text-gray-500 md:text-sm text-xs">
                  {item.sub} - Reblate Solutions
                </p>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-left">
                  {item.desc}
                </p>
                <div className="flex items-center justify-start ">
                  {item.links.map((link) => (
                    <>
                      <Link key={link.head} to={link.url} target="_blank">
                        <button className="bg-[#14213D] font-bold hidden md:flex text-sm px-6 py-3 rounded-lg shadow-lg text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:text-black hover:scale-110 hover:bg-[#FCA311] duration-300 mr-3">
                          <link.icon size={20} />
                        </button>
                      </Link>
                    </>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}
      <div className="pb-8 text-center w-full pt-[130px] bg-gray-100">
        <h1 className=" font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-[#14213d]">
          About Us
        </h1>
        <p className="mt-3 md:mx-auto mx-[10px] text-secondary text-[12px] md:text-[17px] text-center md:leading-[30px] max-w-[1100px]">
          The firm was founded in 2020 with a mission to help every business and
          brands who are struggling to expand their business.{" "}
          <br className="hidden md:block" />
          Reblate Solutions is a digital ecommerce consulting and marketing
          agency that gives innovative and compelling online solutions to
          business owners worldwide. We believe in collectivism and openness
          therefore, we ensure that every single client gets the best matched
          services they want. Integrity, commitment, innovation, quality and
          teamwork are our core values. <br className="hidden md:block" />
          With years of experience our team provides great business
          opportunities to sellers globally to scale their business in
          marketplaces like Amazon, eBay, and Walmart. In the two years, our
          small team has boomed to a global workforce of 70+ ecommerce experts.
          Till now we have served more than 1000+ small & big businesses.{" "}
          <br className="hidde md:block" />
          What makes us different is our vision that is a bit aspirational from
          others; we want to be the first brick of your every dream and passion.
          Commitment, innovation and professionalism are our cement that will
          turn your dreams into reality. Our team works in multiple shifts
          around the clock.
        </p>
      </div>
      <div className="mb-8 text-center w-full mt-5">
        <h1 className=" font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-[#14213d]">
          Our Mission
        </h1>
        <p className="mt-3 md:mx-auto mx-[10px] text-secondary text-[12px] md:text-[17px] text-center md:leading-[30px] max-w-[1100px]">
          With years of experience, our team provides great business
          opportunities to sellers globally to scale their business in
          marketplaces like Amazon, eBay, and Walmart. In the two years, our
          small team has boomed to a global workforce of 70+ e-commerce experts.
          Till now, we have served more than 1000+ small & big businesses. What
          makes us different is our vision that is a bit aspirational from
          others; we want to be the first brick of your every dream and passion.
          Commitment, innovation, and professionalism are our cement that will
          turn your dreams into reality. Our team works in multiple shifts
          around the clock.
        </p>
      </div>

<div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-6">
        <div className="md:ml-[100px] ml-2">
          <h1 className=" font-black md:text-[30px] xs:text-[40px] text-[30px] text-[#14213d] text-center">
            Why Choose Us
          </h1>
          <p className="text-[12px] md:text-[13px] md:w-full text-gray-900 px-2">
          Reblate Solutions offers innovative solutions by utilizing creative ideas from various perspectives, ensuring a practical success roadmap for clients to achieve their goals.
          </p>
          <h2 className="font-bold text-[15px] text-[#14213d] text-left">
            A Plan for Success
          </h2>
          <p className="text-[12px] md:text-[13px] md:w-full text-gray-900 px-2">
            A business plan is crucial for success plans, focusing on customer
            psychographics and target market. It provides a clear vision,
            purpose, and goals, ensuring a well-structured approach to success.
          </p>
          <h2 className="font-bold text-[15px] text-[#14213d] text-left">
            Creativity
          </h2>
          <p className="text-[12px] md:text-[13px] md:w-full text-gray-900 px-2">
            Our diverse background in advertising, branding, public relations,
            research, and strategic planning enhances creativity and results in
            business operations.
          </p>
          <h2 className="font-bold text-[15px] text-[#14213d] text-left">
            Experts Only
          </h2>
          <p className="text-[12px] md:text-[13px] md:w-full text-gray-900 px-2">
            The business is managed by a skilled team with exceptional skills,
            ensuring desired results and exponential growth in any changing
            circumstances.
          </p>
          <h2 className="font-bold text-[15px] text-[#14213d] text-left">
            Pricing
          </h2>
          <p className="text-[12px] md:text-[13px] md:w-full text-gray-900 px-2">
          The surprise request was not made, and the client was treated with respect and fairness, ensuring a pleasant experience.
          </p>
          <h2 className="font-bold text-[15px] text-[#14213d] text-left">
          Focus on innovation
          </h2>
          <p className="text-[12px] md:text-[13px] md:w-full text-gray-900 px-2">
          Reblate Solutions offers innovative ideas to help businesses grow, focusing on new market trends and strategies to help businesses scale up and adapt to evolving needs.
          </p>
          <h2 className="font-bold text-[15px] text-[#14213d] text-left">
          Experience
          </h2>
          <p className="text-[12px] md:text-[13px] md:w-full text-gray-900 px-2">
          Registered in the UK, we offer innovative solutions to address e-commerce issues, backed by years of experience in various branches and international locations.
          </p>
          <h2 className="font-bold text-[15px] text-[#14213d] text-left">
          Award-Winning
          </h2>
          <p className="text-[12px] md:text-[13px] md:w-full text-gray-900 px-2">
          The Manifest and Clutch have both won the PPC Management Award 2021, recognizing our exceptional work in various industries, including logistics, internet marketing, branding, e-commerce, and Amazon Virtual Assistant, demonstrating our commitment to exceeding client expectations.
          </p>
        </div>
        <div className="w-full flex items-center">
          <img src={Company} className="rounded-lg" alt="Reblate Solutions" />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
