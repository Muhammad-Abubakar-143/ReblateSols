import { SectionWrapper } from "../hoc";
import { technologies } from "../constants/tech";

import { Link } from "react-router-dom";

const ServiceCard = ({ id, title, image }) => {
  return (
    <Link to="/service-description" state={{ id: id }} onClick={() => {
      window.scrollTo(0, 0);
    }} className="bg-black/10 p-6 rounded-2xl w-full relative overflow-hidden group">

        <div className="absolute inset-[-2px] bg-[#14213d] translate-x-[100%] group-hover:translate-x-[0%] transition-transform duration-300" />
        <div className="w-full flex items-center justify-between">
          <div className="relative w-[45%] flex md:w-[50%] justify-center">
            <img
              src={image} loading="lazy"
              alt={title}
              className="w-[70%] object-contain rounded-full md:h-[50px] h-auto md:p-2 p-0 group-hover:bg-gray-100 z-10 "
            />
          </div>
          <div className="w-full flex justify-start">
            <h3 className="text-black font-bold md:text-[18px] text-[13px] group-hover:text-white z-10 text-start">
              {title}
            </h3>
          </div>
        </div>

    </Link>
  );
};

const Tech = () => {
  return (
    <>
      <div className="mb-8 text-center pt-3 w-full max-w-7xl mx-auto">
        <h1 className=" md:px-10 md:text-[60px] sm:text-[50px] text-[#14213d] xs:text-[40px] text-[30px] px-3 font-black pt-5 tracking-wider text-center">
          Our Services
        </h1>
        <p className="mt-3 md:lg:px-9 px-4 max-w-4xl mx-auto text-secondary text-[14px] md:text-[17px] text-center md:leading-[30px] leading-6">
        At Reblate Solutions, we are committed to delivering comprehensive and high-quality services to meet our clients' diverse needs. Our expertise covers graphic design, web development, and e-commerce solutions, helping your business to stand out in a competitive market. 
        </p>
      </div>
      <div className="flex-row flex-wrap justify-center max-w-5xl mx-auto items-center gap-5 grid grid-cols-1 md:grid-cols-3 pb-10 px-3">
        {technologies.map((technology) => (
          <ServiceCard
            id={technology.id}
            key={technology.title}
            title={technology.title}
            image={technology.icon}
            link={technology.link}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
