import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";

import { HandShakeGIF } from "../assets";

const CareerForm = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    category:"",
    message: "",
  });


  const [loading, setLoading] = useState(false);

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
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID ,
        {
          from_name: form.name,
          to_name: "Reblate Solutions",
          from_email: form.email,
          to_email: "info@reblatesols.com",
          category: form.category,
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY 
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. we will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            category:"",
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
    <motion.div  variants={fadeIn("left", "tween", 0.2, 1)} className={`w-full gap-16 flex flex-col-reverse lg:flex-row justify-center items-center overflow-hidden`}>
      <div
    
        className='w-full bg-[#14213d]/10 text-white py-8 px-6 sm:px-8 rounded-2xl max-w-xl '
        // className='flex-[0.75] bg-[#fca311]/10 text-white p-8 rounded-2xl'
      >
        <h3 className="font-black md:text-[50px] sm:text-[40px] xs:text-[30px] text-[20px] text-[#14213d] strokeFill">Hire Us</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='w-full mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-[#14213d] font-medium'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              required
              placeholder="What's your name?"
              className='bg-white text-primary py-4 px-6 rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-[#14213d] font-medium'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              required
              placeholder="What's your web address?"
              className='text-primary bg-white py-4 px-6 rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-[#14213d] font-medium'>Category</span>
            <select
              type='option'
              name='Category'
              // value={form.category}
              onChange={handleChange}
              required
              placeholder="Select Category for Work"
              className='bg-white py-4 px-6 placeholder:text-secondary text-primary rounded-lg outline-none border-none font-medium'
            >
                <option>Walmart</option>
                <option>Amazon</option>
                <option>Web development</option>
                <option>Graphic Designing</option>
                <option>Social Media Marketing</option>
                <option>Search Engine Optimization</option>
                </select>
          </label>
          <label className='flex flex-col'>
            <span className='text-[#14213d] font-medium'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              required
              placeholder='What do you want us to do'
              className='bg-white resize-none py-4 px-6 placeholder:text-secondary text-primary rounded-lg outline-none border-none font-medium'
            />
          </label>
          <button
            type='submit'
            className='py-3 px-8 rounded-xl outline-none w-fit text-white bg-[#14213d] font-bold shadow-lg shadow-gray-700 transition ease-in-out delay-150 hover:-translate-y-1 hover:text-black hover:scale-110 hover:bg-[#FCA311] duration-300'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
      <div
    
        className='w-[50%] h-[400px] sm:h-[500px] flex justify-center items-center'
      >
        <img src={HandShakeGIF} loading="lazy" className="w-[70%]"  alt="" />
      
      </div>
    </motion.div>
  );
};

export default SectionWrapper(CareerForm, "careerFrom");
