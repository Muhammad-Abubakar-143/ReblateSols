import { Link } from "react-router-dom";
import { Reblate3D, ReblateLogo } from "../assets";
import Typed from 'react-typed';


const ShuffleHero = () => {

  return (
    <section className="w-full px-8 grid grid-cols-1 lg:grid-cols-2 items-center gap-8 max-w-6xl mx-auto border-b-2 border-gray-100 py-[100px]">
      <div className="md:w-[550px]">
      <p className="text-sm md:text-lg text-gray-500 my-4 md:my-6 ">
       Welcome to
        </p>
        <h1 className="text-3xl md:text-6xl font-bold text-[#14213d] "> Reblate <span className="text-[#fca311]">Solutions</span> </h1>
        <p className="text-sm md:text-lg text-gray-500 my-4 md:my-6 ">
        We specialize in developing attractive designs while using an environmentally responsible approach. Let's make something awesome in combination.
        </p>
        <h2 className="text-xl md:text-2xl font-bold text-[#14213d] mb-5">
        We offer top-notch services of <br />  <Typed className="text-[#fca311]"
                    strings={['Walmart','Amazon','E-Commerce', 'Web Developmemt', 'Graphic Designing', 'Digital Marketing']}
                    typeSpeed={300} loop
                />
        </h2>
        
        <div className="flex justify-start">
               <Link to="/hire-us">
        <button className='bg-white font-bold border border-[#14213d] hover:border-[#fca311] md:flex text-xs md:text-sm md:px-6 md:py-3 px-3 py-2 mr-4 rounded-lg shadow-lg text-black transition ease-in-out delay-150 hover:-translate-y-1 hover:text-black hover:scale-110 hover:bg-[#FCA311] duration-300'>
                Hire Us
        </button>
               </Link>

        </div>
      </div>
      <div className=" max-w-full md:max-w-lg mx-auto hidden md:block">
      <img src={ReblateLogo} loading="lazy" alt="Reblate Solutions & Service Providers Logo" className="sm:w-[450px] md:w-full object-contain" /> 
    </div>
      <div className=" max-w-full md:max-w-lg mx-auto block md:hidden">
      <img src={Reblate3D} loading="lazy" alt="Reblate Solutions & Service Providers Logo" className="sm:w-[450px] md:w-full object-contain" /> 
    </div>
    </section>
  );
};
export default ShuffleHero;