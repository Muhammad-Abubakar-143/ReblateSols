import { Feedbacks, Tech, Works } from "../components";
import ShuffleHero from "../components/Hero";
import HoverDevCards from "../components/Values";

import Partner from "../components/Partner";
import Testimonial from "../components/Testimonial";


const Home = () => {
  return (
    <>
      <div className="bg-white pb-6">
        <ShuffleHero />
        <Tech />
        <HoverDevCards />
        <Testimonial />
      </div>
      <div className="bg-gray-100 pt-8 pb-5">
        <Works />
        <Partner />
        <Feedbacks />
      </div>
    </>
  );
};

export default Home;