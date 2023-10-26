import React from 'react'
import { motion } from "framer-motion";
import { fadeIn} from "../utils/motion";
import Tilt from "react-tilt";
import { Link } from 'react-router-dom';
import {BsDot} from 'react-icons/bs'


const ServiceCard = ({ desc, title}) => (
   <div>
            <Tilt
              options={{
                max: 45,
                scale: 1,
                speed: 450,
              }}
              className="bg-gray-200 p-5 rounded-2xl w-full max-h-[550px]"
            >

                <Link className="rounded-xl shadow-lg cursor-pointer mb-10 sm:mb-0 bg-gray-100 ">
                  <div className="text-left px-4 py-6">
                    <p className="font-semibold text-xl text-black mb-2">
                      {title}
                    </p>
                    <ul className='text-black'>
                      {desc.map((desc)=>(
                        <li className='text-sm list-disc ml-2' key={desc}>
                      {desc}
                          </li>
                      ))}
                 
                    </ul>
                  </div>
                </Link>
           
            </Tilt>
      </div>
);



const ServicesSection = ({main_title, card}) => {
  return (
    <>
    <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-center text-[#fca311] font-bold text-[30px] leading-[30px]'>
      {main_title}
      </motion.p>
      <div className='mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 mx-[50px] pb-10'>
        {card.map((card_item) => (
          <ServiceCard key={card_item.title} title={card_item.title} desc={card_item.desc} />
        ))}
      </div>
      <hr className='mx-auto max-w-[1024px]' />
    </>  
    )
}

export default ServicesSection