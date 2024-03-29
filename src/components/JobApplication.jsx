import React, { useState } from 'react';
import { IoClose } from "react-icons/io5";
import emailjs from 'emailjs-com';

const JobApplicationForm = ({ closeModal }) => {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    tel: "",
    cv: null,
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setForm({ ...form, cv: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
  
    // Convert form data to a simple object
    const formData = {
      ...form,
      cv: form.cv ? form.cv.name : '', // Include the file name of the CV in the form data
    };
  
    emailjs
      .send(
        import.meta.env.CAREERS_EMAILJS_SERVICE_ID || "service_supq06c",
        import.meta.env.CARRER_EMAILJS_TEMPLATE_ID || "template_xhlvgfp",
        formData,
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
  

  return (
    <div className="flex justify-center items-center overlay">
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
          <label
            className="p-4 w-full bg-white rounded-xl text-black cursor-pointer"
            onChange={handleFileChange}
          >
            {form.cv ? form.cv.name : 'Upload'}
            <input
              type="file"
              name="cv"
              hidden
              accept=".pdf"
              className="border-none"
            />
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
