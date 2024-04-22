import { sad } from "../assets";
import { Link } from "react-router-dom";

const NoCareer = () => {
  return (
    <div className="flex h-screen">
      <div className="m-auto text-black text-center">
        <div className="flex justify-center items-center">
        <h1 className="md:px-10 md:text-[100px] text-[50px] px-3 font-black strokeFill tracking-wider text-center">
          Oops
        </h1>
        <img className="w-20 h-20 mt-4 object-contain" src={sad} alt="Sad Emoji" />

        </div>
        <p className="md:text-2xl text-xl text-gray-500 mt-4 mb-8">Looks like no job is available right now</p>
        <Link to="/" className="bg-[#14213d] text-white font-bold border border-[#14213d] hover:border-[#fca311] text-sm px-6 py-3 rounded-lg shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:text-black hover:scale-110 hover:bg-[#FCA311] duration-300">
          Go back
        </Link>
      </div>
    </div>
  );
}; 

export default NoCareer;
