import React from "react";
import { Company } from "../assets";
import { styles } from "../styles";

const AboutUs = () => {
  return (
    <div className="pt-[130px] grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-6">
      <div className="md:ml-[100px] ml-2">
        <div>
          <h1 className="font-bold text-[22px] md:text-[30px] text-[#14213d] text-left">
            About Us
          </h1>
          <p className="text-[15px] md:text-[15px] md:w-full text-gray-900 w-[480px]">
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
          <h1 className="font-bold text-[22px] md:text-[30px] text-[#14213d] text-left">
            Our Mission
          </h1>
          <p className="text-[15px] md:text-[15px] md:w-full text-gray-900 w-[480px]">
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
      </div>
      <div className="max-w-[700px]">
        <div className="w-full h-full object-cover">
          <img src={Company} alt="Reblate " />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
