import { useEffect, useState } from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { Link } from "react-router-dom";

const ProjectCard = ({ name, image, source_code_link,logo, mainTitle }) => {
  const [scrolled, setScrolled] = useState();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
      <Link to={source_code_link} target="_blank" className="font-popins md:mb-0 ">
        <div className="cursor-pointer relative group hover:blurring bg-white/30 hover:border-[#fca311] hover:shadow-md rounded-xl aspect-[5/7] bg-cover bg-center transition ease-in-out delay-150 hover:scale-110 duration-300 border-4 border-gray-400  w-full  shadow-md shadow-gray-500">
          <img src={image} alt={name} loading="lazy" className="object-cover rounded-md w-full blur-none group-hover:blur-[3px]"/>
          <div className="absolute inset-x-0 top-0 p-2 rounded-md right-2 bg-white/50 w-fit bg-opacity-50 text-black transition duration-300 opacity-0 group-hover:opacity-100">
            <h1 className="text-xs">{mainTitle}</h1>
          </div>
          <div className="absolute inset-x-0 bottom-0 p-2 rounded-md bg-white/50 w-fit bg-opacity-50 text-black transition duration-300 opacity-0 group-hover:opacity-100">
            <h1>{name}</h1>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={logo}
              alt={name}
              className="w-52 h-52 bg-white/50 p-2 rounded-full transition duration-300 opacity-0 object-contain group-hover:opacity-100"
            />
          </div>
        </div>
      </Link>
 
  );
};

const Works = () => {
  return (
    <>
      <div >
        <h1 className={`${styles.sectionHeadText} text-[#14213d] text-center md:px-10 md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] px-3 font-black tracking-wider`}>
          Our Projects
        </h1>
      </div>

      <div className="w-full flex justify-center text-center pb-4 max-w-7xl mx-auto px-2 md:px-0">
        <p
          
          className="mt-3 max-w-4xl text-secondary text-[14px] md:text-[17px] md:leading-[30px] leading-6"
        >
          Our portfolio includes a wide range of successful enterprises, each of
          which demonstrates our dedication to quality and originality. Our team
          has consistently provided extraordinary outcomes, from ground-breaking
          ECommerce to revolutionary websites. We are proud of our ability to
          transform concepts into practical, meaningful realities. Explore our
          remarkable projects to get a sense of what's possible when you work
          with us. Join us in influencing the technological future!
        </p>
      </div>

      <div className="md:mt-15 mt-10 grid grid-cols-1 md:grid-cols-3 gap-7 max-w-5xl mx-auto md:lg:px-9 px-4 ">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
      <div className="mt-8 flex justify-center align-middle items-center pb-10">
        <h3 className="text-sm mr-5 text-gray-500">Want to see More ?</h3>
        <button className="bg-[#14213D] font-bold md:flex md:text-sm text-xs md:px-6 md:py-3 px-3 py-2 rounded-lg shadow-lg text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:text-black hover:scale-110 hover:bg-[#FCA311] duration-300">
          <Link
            to="/portfolio"
            className="md:text-[14px] text-[12px]"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            View More
          </Link>
        </button>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
