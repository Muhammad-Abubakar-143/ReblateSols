import { technologies } from "../constants/tech";
import { Link,useLocation } from "react-router-dom";
import { Services } from "../constants/servicesMain";


const MainServices = () => {
  const location = useLocation();
  var id = 1;
  if (location.state !== null) {
    id = location.state.id;
  }
  return (
    <>
      <div className="pb-4 text-center pt-[130px] bg-white">
        <h1 className=" font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-[#14213d]">
          {Services[id].title}
        </h1>
      </div>
      {/* Intro Section */}
      <div className="px-16 md:px-32 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center justify-center align-center bg-white">
        <div key={Services[id].id} className="flex md:items-start items-center md:justify-start justify-center">
          <img
            src={Services[id].intro.image}
            alt={Services[id].title}
            className="w-full md:h-[80%] md:w-[80%] h-full object-contain mx-auto"
          />
        </div>
        <div className="text-gray-500 tracking-wider">
          {Services[id].intro.para.map((desc) => (
            <p>{desc}</p>
          ))}
          <h1 className="text-[25px] text-[#14213d] tracking-wider">
            {Services[id].intro.header}
          </h1>
          <p className="tracking-wider">{Services[id].intro.desc}</p>
        </div>
      </div>
      {/* What we offer */}
      <div className="md:pb-8 py-4 px-5 sm:px-16 md:px-24 lg:px-32 xl:px-52 w-full bg-white">
        <h1 className="text-center py-2 font-black md:text-[60px] md:pl-24 pl-9 sm:text-[50px] xs:text-[40px] text-[30px] text-[#14213d]">
          What we Offer
        </h1>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 mx-auto max-w-4xl">
          {Services[id].offers.map((offer) => (
            <Card
              title={offer.title}
              // Icon={Services[id].icon}
              subtitle={
                <ul className="text-normal">
                  {offer.desc.map((desc) => (
                    <li className="list-disc" key={offer.id}>
                      {desc}
                    </li>
                  ))}
                </ul>
              }
            />
          ))}
        </div>
      </div>
      {/* Bottom Section */}
      <div className="w-full gap-8 px-16 md:px-32 py-10 grid grid-cols-1 lg:grid-cols-2 justify-center items-center align-center bg-white">
        <div className="text-gray-700 flex flex-col justify-center text-left">
          <h1 className="text-[25px] text-[#14213d]">{Services[id].detail.header}</h1>
          {Services[id].detail.para.map((desc) => (
            <p className="text-normal text-gray-500 tracking-wider">{desc}</p>
          ))}
        </div>
        <div className="w-full">
          <img
            src={Services[id].detail.image}
            alt={Services[id].title}
            className="mx-auto w-full object-contain md:w-[70%]"
          />
        </div>
      </div>
      {/* Other Services */}
      <div className="pb-4 text-left px-9 bg-white">
        <h1 className="text-center font-black md:text-[40px] text-[30px] text-[#14213d]">
          Other Services
        </h1>
      </div>
      <div className="px-9 flex-row flex-wrap justify-center gap-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 pb-10 bg-white">
        {technologies.map((technology) => (
          <>
            <Link to="/service-description" key={technology.title} state={{ id: technology.id }} onClick={() => {
              window.scrollTo(0, 0);
            }} className="bg-black/10 p-5 rounded-2xl w-full relative overflow-hidden group">
              <div className="absolute inset-[-2px] bg-[#14213d] translate-x-[100%] group-hover:translate-x-[0%] transition-transform duration-300" />
              <div className="w-full flex items-center justify-between ">
                <div className="relative w-[35%] flex md:w-[50%]">
                  <img
                    src={technology.icon}
                    alt={technology.title}
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

const Card = ({ title, subtitle }) => {
  return (
    <div className="shadow w-full p-4 rounded-lg border-[1px] border-slate-300 relative overflow-hidden group bg-white">
      <h1 className="text-center mb-3 font-semibold text-[18px] lg:text-[22px] text-[#14213d] relative z-10 duration-300">
        {title}
      </h1>
      <p className="px-5 text-slate-500 relative z-10 duration-300">
        {subtitle}
      </p>
    </div>
  );
};

export default MainServices;