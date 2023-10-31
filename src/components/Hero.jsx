import { Link } from "react-router-dom";
import { ReblateLogo } from "../assets";
const ShuffleHero = () => {
  return (
    <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div className="md:w-[550px]">
      <p className="text-base md:text-lg text-gray-500 my-4 md:my-6 ">
       Welcome to
        </p>
        <h1 className="text-4xl md:text-6xl font-bold text-black ">
        Reblate Solutions
        </h1>
        <span className="text-4xl md:text-6xl font-bold text-black md:w-full flex justify-center sm:justify-items-start sm:flex"> &</span> 
        <h1 className="text-4xl md:text-6xl font-bold text-black ">Service Providers </h1>
        <p className="text-base md:text-lg text-gray-500 my-4 md:my-6 ">
        Reblate Solutions is a Company that offers E-Commerce, Online Business and Development Services.
        </p>
        <div className="flex justify-start">
        <button className='bg-white font-bold border border-[#14213d] hover:border-[#fca311] md:flex text-sm px-6 py-3 mr-4 rounded-lg shadow-lg text-black transition ease-in-out delay-150 hover:-translate-y-1 hover:text-black hover:scale-110 hover:bg-[#FCA311] duration-300'>
               <Link to="/hire-us">
                Hire Us
               </Link>
        </button>
        <button className='bg-white font-bold border border-[#14213d] hover:border-[#fca311] md:flex text-sm px-6 py-3 rounded-lg shadow-lg text-black transition ease-in-out delay-150 hover:-translate-y-1 hover:text-black hover:scale-110 hover:bg-[#FCA311] duration-300'>
                <Link to='/contact'>
                Contact Us
                </Link>
        </button>

        </div>
      </div>
      <ShuffleGrid />
    </section>
  );
};


const ShuffleGrid = () => {


  return (
    <div className="">
      <img src={ReblateLogo} alt="Reblate Logo" className="sm:w-[450px] md:w-full" />
    </div>
  );
};

export default ShuffleHero;