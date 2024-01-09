// MorphSteppedProgress.js
import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import { IoClose } from "react-icons/io5";
const MorphSteppedProgress = ({ closeModal}) => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [jobApplication, setJobApplication] = useState("");
  const [resume, setResume] = useState("");
  const [fitForRole, setFitForRole] = useState("");
  
const validateStep = () => {
      switch (step) {
        case 1:
          if (!name || !email) {
            alert("Please fill in all required fields.");
            return false;
          }
          break;
        case 2:
          if (!phoneNumber || !jobApplication) {
            alert("Please fill in all required fields.");
            return false;
          }
          break;
        case 3:
          if (!resume || !fitForRole) {
            alert("Please fill in all required fields.");
            return false;
          }
          break;
        default:
          break;
      }
      return true;
  };
const handleFileChange = (event) => {
      const selectedFile = event.target.files[0];
  
      if (
        selectedFile &&
        selectedFile.type === "application/pdf" &&
        selectedFile.size <= 5 * 1024 * 1024
      ) {
        setFile(selectedFile);
      } else {
        setFile(null);
      }
};
const handleNextStep = () => {
  if (validateStep()) {
    setStep((prevStep) => prevStep + 1);
  }
};

const handlePrevStep = () => {
  setStep((prevStep) => prevStep - 1);
};


const handleSubmit = (e) => {
  e.preventDefault();
  // Handle form submission logic here
  closeModal();
};






const renderStepContent = () => {
  if (submitted) {
    return (
      <div>
        <h2>Thank you for applying!</h2>
      </div>
    );
  }

  switch (step) {
    case 1:
      return (
        <div className="mt-5">
          <div className="flex flex-col gap-5">
            <label>
              <input
                className="p-4 w-full bg-white rounded-xl text-black"
                type="text"
                placeholder="Enter Your Name"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
            <label>
              <input
                className="p-4 w-full bg-white rounded-xl text-black"
                type="email"
                placeholder="Enter Your Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
          </div>
          <button
            className="bg-white/10 mt-5 font-semibold flex justify-end text-xs px-4 py-2 rounded-lg shadow-lg text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:text-black hover:scale-110 hover:bg-[#FCA311] duration-300"
            onClick={handleNextStep}
          >
            Next
          </button>
        </div>
      );
    case 2:
      return (
        <div className="mt-5">
          <div className="flex flex-col gap-5">
            <label>
              <input
                className="p-4 w-full bg-white rounded-xl text-black"
                type="tel"
                placeholder="Enter Your Phone Number"
                required
              />
            </label>
            <label>
              <select
                name=""
                id=""
                className="p-4 w-full bg-white rounded-xl text-black"
                onChange={(e) => setJobApplication(e.target.value)}
              >
                <option value="">Full Stack Developer</option>
                <option value="">Virtual Assistent</option>
                <option value="">Laravel Developer</option>
              </select>
            </label>
          </div>
          <div className="flex gap-3">
            <button
              className="bg-white/10 mt-5 font-semibold flex justify-end text-xs px-4 py-2 rounded-lg shadow-lg text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:text-black hover:scale-110 hover:bg-[#FCA311] duration-300"
              onClick={handlePrevStep}
            >
              Previous
            </button>
            <button
              className="bg-white/10 mt-5 font-semibold flex justify-end text-xs px-4 py-2 rounded-lg shadow-lg text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:text-black hover:scale-110 hover:bg-[#FCA311] duration-300"
              onClick={handleNextStep}
            >
              Next
            </button>
          </div>
        </div>
      );
    case 3:
      return (
        <div className="mt-5">
          <div className="flex flex-col gap-5">
            <label
              className="p-4 w-full bg-white rounded-xl text-black cursor-pointer"
              onChange={(e) => setResume(e.target.files[0])}
            >
              {" "}
              Upload a File
              <input
                type="file"
                id="fileInput"
                hidden
                accept=".pdf"
                onChange={handleFileChange}
                className={`border ${
                  file && file.size <= 5 * 1024 * 1024
                    ? "border-red-500"
                    : "border-none"
                } 
                `}
              />
              {file && file.size > 5 * 1024 * 1024 && (
                <p className="text-red-500 text-xs italic mt-2">
                  File size exceeds the limit (5 MB).
                </p>
              )}
            </label>
            <label>
              <textarea
                name=""
                value={fitForRole}
                id=""
                onChange={(e) => setFitForRole(e.target.value)}
                className="p-4 w-full bg-white rounded-xl text-black resize-none"
                placeholder="Why do you think you are a fit for the job?"
              ></textarea>
            </label>
          </div>
          <div className="flex gap-3">
            <button
              className="bg-white/10 mt-5 font-semibold flex justify-end text-xs px-4 py-2 rounded-lg shadow-lg text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:text-black hover:scale-110 hover:bg-[#FCA311] duration-300"
              onClick={handlePrevStep}
            >
              Previous
            </button>
            <button
              className="bg-white/10 mt-5 font-semibold flex justify-end text-xs px-4 py-2 rounded-lg shadow-lg text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:text-black hover:scale-110 hover:bg-[#FCA311] duration-300"
              onClick={handleSubmit}
            >
              Submit
            </button>
            
          </div>
        </div>
      );
    default:
      return null;
  }
};
  return (
    <div className="flex justify-center items-center overlay">
      <div className="w-1/2 bg-[#14213d] p-8 rounded-md relative">
      <IoClose size={20} className="text-white absolute top-3 right-3" onClick={closeModal}/>
      <div className="w-full text-center">
          <h1 className="font-bold text-[30px] md:text-[50px] text-[#fca311]">
            Apply Now
          </h1>
        </div>
        <form >
        {renderStepContent()}
          
        </form>
      </div>
    </div>
  );
};

export default MorphSteppedProgress;
