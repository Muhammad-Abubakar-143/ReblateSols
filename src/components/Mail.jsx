import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { fadeIn } from "../utils/motion";
import { Contact } from '../assets';

const Mail = () => {
  return (
    <div className='pb-10'>
      <MailFrom />
    </div>
  )
}
export default Mail

const MailFrom = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    tel: "",
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
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
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
            firstname: "",
            lastname: "",
            email: "",
            message: "",
            tel: "",
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
    <motion.div
      variants={fadeIn("left", "tween", 0.2, 1)}
      className={`flex flex-col-reverse lg:flex-row px-4 xs:px-6 lg:px-8 xl:px-32 gap-16 overflow-hidden justify-center items-center`}
    >
      <motion.div
        className='w-full bg-[#14213d]/10 text-white py-8 px-6 sm:px-8 rounded-2xl max-w-xl '
      >
        <h3 className="font-black md:text-[50px] sm:text-[40px] xs:text-[30px] text-[20px] text-[#14213d]">Contact Us</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='w-full mt-12 flex flex-col gap-8'
        >
          <label className='flex xl:flex-row flex-col'>
            <div className='flex flex-col gap-2'>
              <span className='text-[#14213d] font-medium'>First Name</span>
              <input
                type='text'
                name='firstname'
                value={form.firstname}
                onChange={handleChange}
                required
                placeholder="First Name"
                className='bg-gray-100 py-4 px-6 text-black rounded-lg outline-none border-none font-medium mb-6 md:mr-4'
              />
            </div>
            <div className='flex flex-col gap-2'>
              <span className='text-[#14213d] font-medium'>Last Name</span>
              <input
                type='text'
                name='lastname'
                value={form.lastname}
                onChange={handleChange}
                required
                placeholder="Last Name"
                className='bg-gray-100 py-4 px-6 text-black rounded-lg outline-none border-none font-medium'
              />
            </div>
          </label>
          <label className='flex flex-col gap-2'>
            <span className='text-[#14213d] font-medium'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              required
              placeholder="Email Address"
              className='bg-gray-100 py-4 px-6 text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col gap-2'>
            <span className='text-[#14213d] font-medium'>Phone Number</span>
            <input
              type='tel'
              name='tel'
              value={form.tel}
              onChange={handleChange}
              placeholder="Phone Number"
              className='bg-gray-100 py-4 px-6 text-black rounded-lg outline-none border-none font-medium'
            />
          </label>

          <label className='flex flex-col gap-2'>
            <span className='text-[#14213d] font-medium'>Your Message</span>
            <textarea
              rows={5}
              name='message'
              value={form.message}
              onChange={handleChange}
              required
              placeholder='What do you want us to do'
              className='bg-gray-100 py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium'
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
      <motion.div className='w-full' variants={fadeIn("left", "tween", 0.2, 1)}>
        <img src={Contact} alt="Contact us reblate" className='px-8 xs:px-16 sm:px-32 md:px-52 lg:px-0  object-contain w-full' />
      </motion.div>
    </motion.div>
  )
}