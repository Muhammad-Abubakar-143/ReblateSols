import React from 'react'
import { motion } from "framer-motion";
import { fadeIn} from "../utils/motion";
import Tilt from "react-tilt";
import { Link } from 'react-router-dom';



const ServiceCard = ({ desc, title}) => (

            <Tilt
              options={{
                max: 45,
                scale: 1,
                speed: 450,
              }}
              className="border-4 border-[#fca311] p-5 rounded-2xl w-full max-h-[550px]"
            >

                <Link className="rounded-xl shadow-lg cursor-pointer mb-10 sm:mb-0 bg-gray-100 ">
                  <div className="text-left px-4 py-6">
                    <p className="font-semibold text-xl text-[#fca311] mb-2">
                      {title}
                    </p>
                    <ul className='text-white'>
                      {desc.map((desc)=>(
                        <li className='text-sm list-disc ml-2' key={desc}>
                      {desc}
                          </li>
                      ))}
                 
                    </ul>
                  </div>
                </Link>
           
            </Tilt>

);



const ServicesSection = ({main_title, card, background}) => {
  return (
    <>
    <div className={`bg-[image:var(--image-url)] bg-contain bg-center border-t-2 border-[#fca311] object-cover`}  style={{'--image-url': `url(${background})`}} >
    <div className='w-full h-full'>
    <motion.h1
        variants={fadeIn("", "", 0.1, 1)}
        className='pt-10 text-center text-[#fca311] font-bold text-[50px] leading-[30px]'>
      {main_title}
      </motion.h1>
      <div className='mt-10 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 md:px-[130px] px-0 mx-[20px] gap-6 md:mx-0 pb-10 border-b-2 border-[#fca311]'>
        {card.map((card_item) => (
          <ServiceCard key={card_item.title} title={card_item.title} desc={card_item.desc} />
        ))}
      </div>
      </div>
      </div>
    </>  
    )
}

export default ServicesSection