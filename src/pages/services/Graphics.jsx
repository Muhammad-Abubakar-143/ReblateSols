import React from "react";
import { technologies } from "../../constants/tech";
import { Link } from "react-router-dom";
import { GraphicOffer, GraphicgridBottom, GraphicgridTop } from "../../constants/graphics";
import { useState ,useEffect } from "react";

const Graphics = () => {
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
    <>
      <div className="pb-4 text-center pt-[130px] bg-white">
        <h1 className=" font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-[#14213d]">
          Graphic Designing
        </h1>
      </div>
      <div className="px-9 grid grid-cols-1 md:grid-cols-2 gap-4 bg-white">
        {GraphicgridTop.map((top)=>(
          <>
          <div key={top.id} className="w-[90%] flex md:items-start items-center justify-center">
          <img src={top.image} alt={top.title} className="md:w-[80%] w-full md:h-[75%] h-full object-contain" />
          </div>
          <div className="text-gray-500 tracking-wider">
            {top.para.map((desc)=>(
              <p>{desc.desc}</p>
            ))}
            <h1 className="text-[25px] text-[#14213d] tracking-wider">
            Crafting Design Masterpieces for Your Visionary Journey
          </h1>
          <p className="tracking-wider">
            Reblate Solutions is the premier destination for transformative
            design services. Their team of creative experts offers a diverse
            range of tailored offerings, including logo design, visual design,
            marketing design, arts and illustrations, print design, business
            card and stationary design, and packaging and label designs. They
            aim to turn your ideas into visually stunning realities, ensuring
            your satisfaction is our masterpiece.
          </p>
          </div>
          </>
        ))}
      </div>
      <div className="md:pb-8 pb-4 pt-3 md:px-52 px-5 w-full bg-white">
        <h1 className=" font-black md:text-[60px] md:pl-24 pl-9 sm:text-[50px] xs:text-[40px] text-[30px] text-[#14213d]">
          What we Offer
        </h1>
        <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 text-gray-500 md:pl-24 pl-9 max-w-7xl mx-auto mt-4">
          {GraphicOffer.map((offer) => (
            <div key={offer.id} className="text-start w-[90%]">
              <h1 className="text-[25px] text-[#14213d]">{offer.title}</h1>
              <ul className="text-normal">
                {offer.desc.map((desc) => (
                  <li className="list-disc" key={offer.id}>
                    {desc.list}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="px-9 pb-10 grid grid-cols-1 md:grid-cols-2 gap-4 bg-white">
        {GraphicgridBottom.map((bottom)=>(
          <>
          <div key={bottom.id} className="text-gray-500 flex justify-center flex-col tracking-wider">
            <h1 className="text-[25px] text-[#14213d]">{bottom.title}</h1>
            {bottom.para.map((desc)=>(
              <p>{desc.desc}</p>
            ))}
          </div>
          <div className="w-[100%] flex items-center justify-end">
          <img src={bottom.image} alt={bottom.title} className="w-[75%] h-full" />
          </div>
          </>
        ))}
      </div>
      <div className="pb-4 text-left px-9 bg-white">
        <h1 className=" font-black md:text-[40px] text-[30px] text-[#14213d]">
          Other Services
        </h1>
      </div>
      <div className="px-9 flex-row flex-wrap bg-white justify-center gap-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 pb-10">
        {technologies.map((technology) => (
          <>
            <Link to={technology.link} key={technology.title} onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }} className="bg-black/10 p-5 rounded-2xl w-full relative overflow-hidden group">
                <div className="absolute inset-0 bg-[#14213d] translate-x-[100%] group-hover:translate-x-[0%] transition-transform duration-300" />
                <div className="w-full flex items-center justify-between ">
                  <div className="relative w-[35%] flex md:w-[50%]">
                    <img
                      src={technology.icon}
                      alt="project_image"
                      className="w-[60%] object-contain rounded-full md:h-[50px] h-auto p-2 group-hover:bg-gray-100 z-10 "
                    />
                  </div>
                  <div className="w-full flex justify-start">
                    <h3 className="text-black font-bold md:text-[16px] text-[13px] group-hover:text-white z-10 text-start">
                      {technology.title}
                    </h3>
                  </div>
                </div>
   
            </Link>
          </>
        ))}
      </div>
    </>
  );
};

export default Graphics;
