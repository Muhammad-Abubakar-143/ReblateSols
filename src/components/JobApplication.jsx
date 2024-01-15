// JobApplicationForm.js

import React, { useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import PhoneInput from "react-phone-number-input";

import emailjs from "@emailjs/browser";

const JobApplicationForm = ({ closeModal }) => {
  const formRef = useRef();
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    tel: "",
    cv: "",
    message: "",
  });
  

  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (event) => {
    const file = event.target.files[0];

    // Check if a file is selected and it is a PDF
    if (file && file.type === 'application/pdf') {
      setSelectedFile(file);
    } else {
      // Clear selected file if not a PDF
      setSelectedFile(null);
      alert('Please select a valid PDF file.');
    }
  };

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.CAREERS_EMAILJS_SERVICE_ID || "service_supq06c",
        import.meta.env.CARRER_EMAILJS_TEMPLATE_ID || "template_xhlvgfp",
        {
          from_name: form.name,
          to_name: "Reblate Solutions",
          from_email: form.email,
          to_email: "careers@reblatesols.com",
          category: form.category,
          message: form.message,
        },
        import.meta.env.CAREER_EMAILJS_PUBLIC_KEY || "xPEVx5CWfltSligF0"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. we will get back to you as soon as possible.");

          setForm({
            firstname: "",
            lastname: "",
            email: "",
            tel: "",
            cv: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  // const renderStepContent = () => {
  //   if (submitted) {
  //     return (
  //       <div className='w-full text-center'>
  //         <h2 className="font-bold text-[20px] md:text-[30px] text-[#fca311]">Thank you for applying!</h2>
  //       </div>
  //     );
  //   }

  //   switch (step) {
  //     case 1:
  //       return (
  //         <div className="mt-5">
  //           <div className="flex flex-col gap-5">
  //             <label>
  //               <input
  //                 className="p-4 w-full bg-white rounded-xl text-black"
  //                 type="text"
  //                 placeholder="Your Name"
  //                 value={form.name}
  //                 onChange={handleChange}
  //                 required
  //               />
  //             </label>
  //             <label>
  //               <input
  //                 className="p-4 w-full bg-white rounded-xl text-black"
  //                 type='email'
  //                 placeholder="Email Address"
  //                 value={form.email}
  //             onChange={handleChange}
  //                 required
  //               />
  //             </label>
  //           </div>
  //           <button
  //             className="bg-white/10 mt-5 font-semibold flex justify-end text-xs px-4 py-2 rounded-lg shadow-lg text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:text-black hover:scale-110 hover:bg-[#FCA311] duration-300"
  //             onClick={handleNextStep}
  //           >
  //             Next
  //           </button>
  //         </div>
  //       );
  //     case 2:
  //       return (
  //         <div className="mt-5">
  //           <div className="flex flex-col gap-5">
  //             <label>
  //             {/* <PhoneInput defaultCountry='us' style={{ backgrounndColor:'white', borderRadius: '4px', padding: '8px', width:'100%' }} className='p-4 w-full bg-white rounded-xl text-black'
  //       placeholder="Enter phone number"
  //       value={value}
  //       onChange={setValue}
  //     /> */}
  //               <input
  //                 className="p-4 w-full bg-white rounded-xl text-black"
  //                 type="tel"
  //                 placeholder="Enter Your Phone Number"
  //                 value={form.tel}
  //             onChange={handleChange}
  //                 required
  //               />
  //             </label>
  //             <label>
  //               <select
  //                 name=""
  //                 id=""
  //                 className="p-4 w-full bg-white rounded-xl text-black"
  //                 value={form.option}
  //               >
  //                 <option value="">Full Stack Developer</option>
  //                 <option value="">Virtual Assistent Intern</option>
  //                 <option value="">Flutter Developer</option>
  //                 <option value="">SEO Specialist</option>
  //                 <option value="">Upwork Expert</option>
  //                 <option value="">Admin Manager</option>
  //               </select>
  //             </label>
  //           </div>
  //           <div className="flex gap-3">
  //             <button
  //               className="bg-white/10 mt-5 font-semibold flex justify-end text-xs px-4 py-2 rounded-lg shadow-lg text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:text-black hover:scale-110 hover:bg-[#FCA311] duration-300"
  //               onClick={handlePrevStep}
  //             >
  //               Previous
  //             </button>
  //             <button
  //               className="bg-white/10 mt-5 font-semibold flex justify-end text-xs px-4 py-2 rounded-lg shadow-lg text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:text-black hover:scale-110 hover:bg-[#FCA311] duration-300"
  //               onClick={handleNextStep}
  //             >
  //               Next
  //             </button>
  //           </div>
  //         </div>
  //       );
  //     case 3:
  //       return (
  //         <div className="mt-5">
  //           <div className="flex flex-col gap-5">
  //             <label className="p-4 w-full bg-white rounded-xl text-black cursor-pointer"
  //               onChange={(e) => setResume(e.target.files[0])}>
  //               Upload a File
  //               <input type="file" id="fileInput" hidden accept=".pdf"  value={form.cv}
  //                 className={`border ${file && file.size <= 5 * 1024 * 1024? "border-red-500": "border-none"} `}
  //               />
  //               {file && file.size > 5 * 1024 * 1024 && (
  //                 <p className="text-red-500 text-xs italic mt-2">
  //                   File size exceeds the limit (5 MB).
  //                 </p>
  //               )}
  //             </label>
  //             <label>
  //               <textarea
  //               rows={5}
  //                 name=""
  //                 value={form.message}
  //                 id=""
  //                 onChange={handleChange}
  //                 className="p-4 w-full bg-white rounded-xl text-black resize-none"
  //                 placeholder="Why do you think you are a fit for the job?"
  //               ></textarea>
  //             </label>
  //           </div>
  //           <div className="flex gap-3">
  //             <button
  //               className="bg-white/10 mt-5 font-semibold flex justify-end text-xs px-4 py-2 rounded-lg shadow-lg text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:text-black hover:scale-110 hover:bg-[#FCA311] duration-300"
  //               onClick={handlePrevStep}
  //             >
  //               Previous
  //             </button>
  //             <button
  //               className="bg-white/10 mt-5 font-semibold flex justify-end text-xs px-4 py-2 rounded-lg shadow-lg text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:text-black hover:scale-110 hover:bg-[#FCA311] duration-300"
  //               onClick={handleSubmit}
  //             >
  //               Submit
  //             </button>

  //           </div>
  //         </div>
  //       );
  //     default:
  //       return null;
  //   }
  // };

  return (
    <div className="flex justify-center items-center overlay  ">
      <div className="w-1/2 bg-[#14213d] p-8 rounded-md relative">
        <IoClose
          size={20}
          className="text-white absolute top-3 right-3"
          onClick={closeModal}
        />
        <div className="w-full text-center">
          <h1 className="font-bold text-[30px] md:text-[50px] text-[#fca311]">
            Apply Now
          </h1>
        </div>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-3"
        >
          <label className="flex gap-2 flex-wrap ">
            <input
              type="text"
              name="firstname"
              value={form.firstname}
              onChange={handleChange}
              required
              placeholder="First Name"
              className="p-4 w-[49.2%] bg-white rounded-xl text-black"
            />

            <input
              type="text"
              name="lastname"
              value={form.lastname}
              onChange={handleChange}
              required
              placeholder="Last Name"
              className="p-4 w-[49.2%] bg-white rounded-xl text-black"
            />
          </label>
          <label className="flex flex-col">
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="Email Address"
              className="bg-gray-100 py-4 px-6 text-black rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <input
              type="tel"
              name="tel"
              value={form.tel}
              onChange={handleChange}
              placeholder="Phone Number"
              className="bg-gray-100 py-4 px-6 text-black rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label
            className="p-4 w-full bg-white rounded-xl text-black cursor-pointer"
            // onChange={(e) => setResume(e.target.files[0])}
          >
          
            {selectedFile ? selectedFile.name : 'Upload'}
            <input
             onChange={handleFileChange}
              type="file"
              id="fileInput"
              value={form.cv}
              hidden
              accept=".pdf"
              // onChange={handleFileChange}
              // className={`border ${
              //   file && file.size <= 5 * 1024 * 1024
              //     ? "border-red-500"
              //     : "border-none"
              // }
              // `}
            />
            <p className="text-red-500 text-xs italic mt-2">
              File size do not exceeds the limit (5 MB).
            </p>
            {/* {file && file.size > 5 * 1024 * 1024 && (
              )} */}
          </label>

          <label className="flex flex-col">
            <textarea
              rows={4}
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              placeholder="Why do you fit for this job?"
              className="bg-gray-100 py-4 px-6 resize-none placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-white/10 py-3 px-8 rounded-xl outline-none w-fit text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:text-black hover:scale-110 hover:bg-[#FCA311] duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobApplicationForm;
