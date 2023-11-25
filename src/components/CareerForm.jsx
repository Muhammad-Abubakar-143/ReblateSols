import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { EarthCanvas } from "./canvas";

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
    <div
      className={` gap-10 xl:mt-12 flex xl:flex-row justify-center items-center flex-col-reverse mx-auto overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-[#fca311]/10 text-white p-8 rounded-2xl'
      >
        <h3 className={styles.sectionHeadText}>Hire Us</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              required
              placeholder="What's your name?"
              className='bg-[#14213d] py-4 px-6 text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              required
              placeholder="What's your web address?"
              className='bg-[#14213d] py-4 px-6 text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Category</span>
            <select
              type='option'
              name='Category'
              value={form.category}
              onChange={handleChange}
              required
              placeholder="Select Category for Work"
              className='bg-[#14213d] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            >
                <option className="text-white" >Walmart</option>
                <option className="text-white" >Amazon</option>
                <option className="text-white" >Web development</option>
                <option className="text-white" >Graphic Designing</option>
                <option className="text-white" >Social Media Marketing</option>
                <option className="text-white" >Search Engine Optimization</option>
                </select>
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              required
              placeholder='What do you want us to do'
              className='bg-[#14213d] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
         


          <button
            type='submit'
            className='bg-[#14213d] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary transition ease-in-out delay-150 hover:-translate-y-1 hover:text-black hover:scale-110 hover:bg-[#FCA311] duration-300'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 md:h-[750px] h-[450px] justify-center flex items-center'
      >
        <EarthCanvas />
      </motion.div>

    </div>
  );
};

export default SectionWrapper(CareerForm, "careerFrom");
