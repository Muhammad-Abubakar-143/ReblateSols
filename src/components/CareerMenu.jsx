import { useState } from 'react'
import { careerMenu } from '../constants/careerMenu';
const CareerMenu = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (index) => {
      setActiveIndex(index);
    };
  return (
    <div className="mt-4 md:mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="text-black">
        {careerMenu.map((item, index) => (
          <div
            key={index}
            className={`p-5 border-b border-gray-500 rounded-t-lg hover:bg-[#14213d]/10 text-xl transition ease-in-out delay-150 duration-200 cursor-pointer ${
              index === activeIndex ? "font-medium bg-[#14213d]/10" : ""
            }`}
            onClick={() => handleClick(index)}
          >
            {item.title}
          </div>
        ))}
      </div>
      <div className="bg-[#14213d] rounded-lg shadow-2xl shadow-gray-400">
        <div className="p-6 text-[#fca311]">
          <div className="p-4 rounded-full bg-white w-24 h-24 my-5">
            <img
              src={careerMenu[activeIndex].pic}
              className="w-full object-contain"
              alt={careerMenu[activeIndex].title} loading='lazy'
            />
          </div>
          <h1 className="text-[30px] tracking-wide font-medium">
            {careerMenu[activeIndex].title}
          </h1>
          <p className="text-[20px] tracking-wide text-white">
            {careerMenu[activeIndex].para}
          </p>
        </div>
      </div>
    </div>
  )
}

export default CareerMenu