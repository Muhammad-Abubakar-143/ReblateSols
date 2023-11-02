import React from "react";
import { about } from "../constants/about";
import { Company } from "../assets";
import { Link } from "react-router-dom";
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
      <div className="pt-[130px] grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-6">
        <div className="md:ml-[100px] ml-2">
        <h1 className=" font-black md:text-[40px] xs:text-[40px] text-[30px] text-[#14213d] text-center">
          About Us
        </h1>
          <p className="text-[12px] md:text-[15px] md:w-full text-gray-900 px-2">
            The firm was founded in 2020 with a mission to help every business
            and brands who are struggling to expand their business.{" "}
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
            small team has boomed to a global workforce of 70+ ecommerce
            experts. Till now we have served more than 1000+ small & big
            businesses. <br className="hidde md:block" />
            What makes us different is our vision that is a bit aspirational
            from others; we want to be the first brick of your every dream and
            passion. Commitment, innovation and professionalism are our cement
            that will turn your dreams into reality. Our team works in multiple
            shifts around the clock.
          </p>
          <h1 className=" font-black md:text-[40px] xs:text-[40px] text-[30px] text-[#14213d] text-center">
          Our Mission
        </h1>
          <p className="text-[12px] md:text-[15px] md:w-full text-gray-900 px-2">
            With years of experience, our team provides great business
            opportunities to sellers globally to scale their business in
            marketplaces like Amazon, eBay, and Walmart. In the two years, our
            small team has boomed to a global workforce of 70+ e-commerce
            experts. Till now, we have served more than 1000+ small & big
            businesses. What makes us different is our vision that is a bit
            aspirational from others; we want to be the first brick of your
            every dream and passion. Commitment, innovation, and professionalism
            are our cement that will turn your dreams into reality. Our team
            works in multiple shifts around the clock.
          </p>
        </div>
        <div className="max-w-[750px]">
        <h1 className=" font-black md:text-[40px] xs:text-[40px] text-[30px] text-[#14213d] text-center">
          Why Choose Us
        </h1>
          <p className="text-[12px] md:text-[15px] md:w-full text-gray-900 px-2">
            Reblate Solutions is always committed towards helping their clients
            in reaching their goals. Providing innovative and creative ideas
            from others makes us different. We examine your business from
            multiple perspectives to develop a practical success roadmap for
            you.
          </p>
          <h2 className="font-bold text-[18px] md:text-[25px] text-[#14213d] text-left">
            A Plan for Success
          </h2>
          <p className="text-[12px] md:text-[15px] md:w-full text-gray-900 px-2">
            When starting a business, you should have a clear vision, purpose
            and goal. The best way to do this is to make a business plan. You
            want results; we will make success plans for you. We do focus
            research on the company, competitors, target market and customer
            psychographics. After we fully understand, we will provide an
            organized layout for how you want your business to start, perform,
            excel and how we will do this.
          </p>
          <h2 className="font-bold text-[18px] md:text-[25px] text-[#14213d] text-left">
            Creativity
          </h2>
          <p className="text-[12px] md:text-[15px] md:w-full text-gray-900 px-2">
            Starting own business is quite stressful, especially when there are
            a lot of things to be done. To add creativity to your business, we
            bring our diverse background in advertising, designing, branding,
            public relations, research and strategic planning to work for your
            company. Not only will your materials will look great but they will
            result great.
          </p>
          <h2 className="font-bold text-[18px] md:text-[25px] text-[#14213d] text-left">Experts Only</h2>
          <p className="text-[12px] md:text-[15px] md:w-full text-gray-900 px-2">
            The first impression is the last impression; keeping that thing in
            mind, we assure you that you will get experts in every department.
            We have a team of highly skilled employees with great communication
            skills that will manage your business until you get your desired
            results. We ensure that your business gets exponential growth in any
            changing circumstances.
          </p>
          <h2 className="font-bold text-[18px] md:text-[25px] text-[#14213d] text-left">Pricing</h2>
          <p className="text-[12px] md:text-[15px] md:w-full text-gray-900 px-2">
            Our prices are competitive and fair. There will be no surprise
            request for any payment. If there will be any additional, it will be
            pre-approved by you first. That's how we like to be treated, and
            that's how we treat our clients.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
