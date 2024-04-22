import { Web } from "../assets";
import { MdLocationOn } from "react-icons/md";
import { BsFillSuitcaseLgFill, BsClockHistory } from "react-icons/bs";
import { useState} from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import MorphSteppedProgress from "./Morph";

const AvalCareer = () => {
  const [showModal, setShowModal] = useState(false);

  const handleApplyClick = () => {
    setShowModal(true);
  };
  // const [postedTime, setPostedTime] = useState(moment(jobDetails.postedAt).fromNow());

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setPostedTime(moment(jobDetails.postedAt).fromNow());
  //   }, 60000); // Update every minute

  //   return () => clearInterval(intervalId);
  // }, [jobDetails.postedAt]);
  return (
    <>
      <div className="text-center pt-[120px]">
        <h1 className=" font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-[#14213d]">
          Careers
        </h1>
      </div>
      <div className="p-5 h-screen">
        <div className="group mx-2 mt-10 grid max-w-screen-md grid-cols-12 space-x-8 overflow-hidden rounded-lg border py-8 text-gray-700 shadow transition hover:shadow-lg">
          <Link
            to="#"
            className="order-2 col-span-1 -ml-14 text-left text-gray-600 hover:text-gray-700 sm:-order-1 sm:ml-4"
          >
            <div className="group relative h-16 w-16 overflow-hidden rounded-lg">
              <img
                src={Web}
                alt=""
                className="h-full w-full object-cover text-gray-700"
              />
            </div>
          </Link>
          <div className="col-span-11 flex flex-col pr-8 text-left sm:pl-4">
          <h1
              className="mb-3 overflow-hidden pr-7 text-lg font-semibold sm:text-xl"
            >
              Sr. Frontend Engineer
            </h1>
            <p className="overflow-hidden pr-7 text-sm">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna .
            </p>
            <div className="mt-5 flex justify-between flex-col space-y-3 text-sm font-medium text-gray-500 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
              <div className="flex flex-wrap gap-2">
                <span className="ml-2 mr-3 rounded-full bg-green-100 px-2 py-0.5 text-green-900">
                  2 Years +
                </span>
                <span className="ml-2 mr-3 rounded-full bg-red-100 px-2 py-0.5 text-red-900">
                  React
                </span>
                <span className="ml-2 mr-3 rounded-full bg-blue-100 px-2 py-0.5 text-blue-900">
                  Laravel
                </span>
              </div>
            </div>
            <div className="mt-4 flex justify-between items-center md:flex-row flex-col gap-3 md:gap-0">
              <div className="flex flex-wrap gap-2 md:gap-0">
                <span className="flex items-center gap-2 ml-2 mr-3 text-xs rounded-full bg-[#fca311]/50 px-2 py-1 text-[#14213d]">
                  <MdLocationOn className="bg-gree-500" size={15} />
                  Jhelum,Punjab
                </span>
                <span className="flex items-center gap-2 ml-2 mr-3 text-xs rounded-full bg-orange-100 px-2 py-1 text-orange-900">
                  <BsFillSuitcaseLgFill size={15} />
                  On Site
                </span>
                <span className="flex items-center gap-2 ml-2 mr-3 text-xs rounded-full bg-violet-100 px-2 py-1 text-violet-900">
                  <BsClockHistory size={15} />9 days ago
                </span>
              </div>
      <Link onClick={handleApplyClick} className="bg-[#14213D] font-semibold lg:flex text-xs px-4 py-2 rounded-lg shadow-lg text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:text-black hover:scale-110 hover:bg-[#FCA311] duration-300">
        Apply Now
      </Link>
              </div>

      {/* {showModal && <JobApplicationForm closeModal={() => setShowModal(false)} />} */}
      </div>
    </div>
    </div>

      <MorphSteppedProgress />
    </>
    // <div className="pb-8 bg-white flex flex-wrap px-40 gap-5">
    //   <div className="py-8 max-w-3xl relative z-0 text-black px-7 bg-gray-500 rounded hover:shadow-2xl shadow-gray-500">
    //     <div className="flex justify-start items-center">
    //       <div className="w-10 h-10">
    //         <img src={Walmart} alt="walmart" className="object-contain" />
    //       </div>
    //       <div className="ml-4">
    //         <h1 className="font-bold text-2xl text-[#14213d]">
    //           Walmart ki job
    //         </h1>
    //         <p>Ais k liay apply kr do pagal</p>
    //       </div>
    //     </div>
    //     <div className="flex justify-between items-center gap-5">
    //         <ul className="flex flex-wrap gap-2 mt-5 max-w-[350px]">
    //             <li className="bg-gray-100 px-4 py-1 text-sm rounded-lg">Walmart</li>
    //             <li className="bg-gray-100 px-4 py-1 text-sm rounded-lg">Walmart</li>
    //             <li className="bg-gray-100 px-4 py-1 text-sm rounded-lg">Walmart</li>
    //         </ul>
    //         <div className="flex flex-wrap max-w-[350px] mt-5">
    //             <div className="flex items-center mr-4">
    //
    //                 <h1 className="ml-2 text-[10px]">Jhelum, Punjab</h1>
    //             </div>
    //             <div className="flex items-center mr-4">
    //                 <BsFillSuitcaseLgFill size={20}/>
    //                 <h1 className="ml-2 text-[10px]">On Site</h1>
    //             </div>
    //             <div className="flex items-center">
    //                 <BsClockHistory size={20}/>
    //                 <h1 className="ml-2 text-[10px]">9 days ago</h1>
    //             </div>
    //         </div>
    //     </div>
    //   </div>

    // </div>
  );
};

// AvalCareer.propTypes = {
//     jobDetails: PropTypes.shape({
//       imageUrl: PropTypes.string.isRequired,
//       title: PropTypes.string.isRequired,
//       skills: PropTypes.arrayOf(PropTypes.string).isRequired,
//       location: PropTypes.string.isRequired,
//       jobType: PropTypes.string.isRequired,
//       postedAt: PropTypes.string.isRequired,
//     }).isRequired,
//   };
export default AvalCareer;
