import React from "react";
import { Feedbacks, Tech, Works } from "../components";
import ShuffleHero from "../components/Hero";
import HoverDevCards from "../components/Values";

import Partner from "../components/Partner";
import Testimonial from "../components/Testimonial";


const Home = () => {
  return (
    <>
      <div className="bg-white ">
        <ShuffleHero />
      </div>
      <HoverDevCards />
      <Tech />

      <div className=" pb-6">
        <Testimonial />
      </div>
      <div className="bg-gray-100">
      <Works />
      </div>
      <Partner />
      <Feedbacks />
    </>
  );
};

export default Home;
