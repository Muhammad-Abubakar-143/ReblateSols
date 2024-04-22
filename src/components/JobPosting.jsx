import { useState, useEffect } from "react";
// import JobApplicationForm from "./JobApplication";
import { careerBg } from "../assets";
import CareerMenu from "./CareerMenu";
import JobCard from "./panel/Careers/JobCard";
import {collection, getDocs, } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
import { db } from "../../firebase";
import NoCareer from "./NoCareer";


const JobPosting = () => {


  const [showModal, setShowModal] = useState(false);
  const [fetchedPosts, setFetchedPosts] = useState([]);
  
  const jobTitle = "Develop"
  const companyEmail = import.meta.env.CAREERS_EMAIL

  const handleApplyNowClick = () => {
    // const jobTitle= "Develop"
    // const companyEmail = import.meta.env.CAREERS_EMAIL
    // const subject = encodeURIComponent(`Application for ${jobTitle}`);
    // const mailtoLink = `mailto:${companyEmail}?subject=${subject}`;

    // window.location.href = mailtoLink;
    setShowModal(true);
  };

  const fetchPost = async () => {
    await getDocs(collection(db, "Careers"))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }));
        setFetchedPosts(newData);
      })
  }

  useEffect(() => {
    fetchPost();
  }, [])

  return (
    <>
      <div className="md:pt-[90px] pt-[80px]">
        <img loading="lazy" src={careerBg} alt="Career Background" className="w-full object-contain" />
        <div className="text-black text-left px-4 md:py-[90px] py-[40px] md:px-7 max-w-5xl mx-auto">
          <h1 className="font-bold md:text-[50px] text-[#14213d] text-[30px] strokeFill">Join Reblate Solutions</h1>
          <p className="font-normal text-[20px] md:text-[25px]">Where Your Career Takes Flight</p> 
          <p className="text-secondary text-[14px] md:text-[17px] leading-[30px]">Welcome to Reblate Solutions, a hub of innovation and growth in the E-Commerce realm. Join our global team and play a pivotal role in shaping the future of online business.</p>
          <h2 className="font-bold text-[#14213d] text-[25px] md:text-[35px]">Why Reblate Solutions?</h2>
          <CareerMenu />
        </div>
      </div>
      <div className="p-4 md:pl-7">
        <h1 className="font-bold md:text-[60px] text-[#14213d] text-[50px] strokeFill">Explore Opportunities</h1>
      </div>

      <div className="w-full flex flex-wrap align-center justify-start p-2 md:p-8 gap-8">
        
       {fetchedPosts ? (
        fetchedPosts.map((post)=>(
          <div className="w-vw">
            <JobCard
              key={post.id}
              {...post}
            />
          </div>
        ))
        
      ) : (
        <div className="w-vw">
          <NoCareer />
        </div>
      )}
      </div>
    </>
  );
};

export default JobPosting;
