import { useState } from "react";
import { whyChooseUs } from "../constants/whyChooseUs";

const ChooseUsMenu = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };
  return ( 
    <div className="mt-4 md:mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="text-black">
        {whyChooseUs.map((item, index) => (
          <div
            key={index}
            className={`p-5 border-b rounded-t-lg border-gray-500 hover:bg-[#14213d]/10 text-xl transition ease-in-out delay-150 duration-200 cursor-pointer ${
              index === activeIndex ? " font-medium bg-[#14213d]/10" : ""
            }`}
            onClick={() => handleClick(index)}
          >
            {item.title}
          </div>
        ))}
      </div>
      <div className="bg-[#14213d] shadow-2xl shadow-gray-400">
        <div className="h-full flex flex-col p-9 mt-4 md:mt-10 text-[#fca311]">
          <div className="p-4 rounded-full bg-white w-24 h-24 mb-10">
            <img
              src={whyChooseUs[activeIndex].pic}
              className="w-full object-contain" loading="lazy"
              alt={whyChooseUs[activeIndex].title}
            />
          </div>
          <h1 className="mb-10 text-[30px] tracking-wide font-medium">
            {whyChooseUs[activeIndex].title}
          </h1>
          <p className="mb-10 text-[20px] tracking-wide text-white">
            {whyChooseUs[activeIndex].para}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChooseUsMenu;
