import { Link } from "react-router-dom";
import { technologies } from "../../constants/tech";
import { gridBottom, gridTop, walmartOffer } from "../../constants/walmartgridtop";
import {React, useState ,useEffect } from "react";

const Walmart = () => {
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
      <div className="pb-4 bg-white text-center pt-[130px]">
        <h1 className=" font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-[#14213d]">
          Walmart
        </h1>
      </div>
      <div className="px-9 bg-white grid grid-cols-1 md:grid-cols-2 gap-4">
        {gridTop.map((top)=>(
          <>
           <div key={top.id} className="w-[100%] flex md:items-start items-center md:justify-start justify-center">
          <img
            src={top.image}
            alt={top.title}
            className="md:w-[80%] w-full md:h-[80%] h-full object-contain"
          />
        </div>
        <div>
          {top.para.map((desc)=>(
            <p className="text-gray-500 tracking-wider">
              {desc.desc}
            </p>
          ))}
          <h1 className="text-[25px] text-[#14213d] tracking-wider">
            Your righteous Market place
          </h1>
          <p className="text-gray-500 tracking-wider">
            Walmart Grocery Pickup and Delivery are important services that
            ensure consumer accessibility. Subscriptions such as Walmart+ and
            Delivery limitless provide limitless free delivery and member-only
            discounts. Express Delivery provides same-day delivery on a wide
            variety of products. Walmart MoneyCenters and Walmart Health
            additionally provide in-store pharmacy, financial services, and
            healthcare services. Walmart's e-commerce support services, notably
            Walmart Fulfillment Services, strengthen the company's position as a
            one-stop shopping destination.
          </p>
        </div>

          </>
          
        ))}
      
    
      </div>
      <div className="md:pb-8 py-4 md:px-52 px-5 bg-white w-full">
        <h1 className=" font-black md:text-[60px] md:pl-24 pl-9 sm:text-[50px] xs:text-[40px] text-[30px] text-[#14213d]">
          What we Offer
        </h1>
        <div className="grid gird-cols-1 md:grid-cols-2 gap-2 text-gray-500 md:pl-24 pl-9 max-w-7xl mx-auto mt-4">
          {walmartOffer.map((offer)=>(
            <div key={offer.id} className="text-start w-[90%]">
              <h1 className="text-[25px] text-[#14213d]">{offer.title}</h1>
              <ul className="text-normal">
                {offer.desc.map((desc)=>(
                  <li className="list-disc" key={offer.id}>
                    {desc.list}
                  </li>
                ))}

              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="px-9 bg-white pt-10 pb-10 grid grid-cols-1 md:grid-cols-2 gap-4">
        {gridBottom.map((bottom)=>(
          <>
          <div key={bottom.id} className="tracking-wider">
            {bottom.para.map((desc)=>(
              <p className="text-normal text-gray-500">
              {desc.desc}
            </p>
            ))}
              
          </div>
          <div className="md:w-[80%] w-full flex md:items-start items-center md:justify-end justify-center">
          <img
            src={bottom.image}
            alt={bottom.title}
            className="md:w-[60%] w-full object-contain"
          />
          </div>
          </>
        ))}
      </div>
      <div className="pb-4 bg-white text-left px-9">
        <h1 className=" font-black md:text-[40px] text-[30px] text-[#14213d]">
          Other Services
        </h1>
      </div>
      <div className="px-9 bg-white flex-row flex-wrap justify-center gap-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 pb-10">
        {technologies.map((technology) => (
          <>
            <Link to={technology.link} key={technology.title} onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
                className="bg-black/10 p-5 rounded-2xl w-full relative overflow-hidden group"
              >
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

export default Walmart;
