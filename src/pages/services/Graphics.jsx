import React from 'react'
import { Shopify1, graphic1, graphic2 } from '../../assets'
import { technologies } from '../../constants/tech'
import { Link } from 'react-router-dom';
import Tilt from "react-tilt";

const Graphics = () => {
  return (
    <>
    <div className="mb-4 text-center pt-[130px]">
        <h1 className=" font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-[#14213d]">
          Graphic Designing
        </h1>
      </div>
      <div className='px-9 pb-10 grid grid-cols-1 md:grid-cols-2 gap-4'>
    <div className='w-[90%] h-100vh flex'>
        <img src={graphic1} alt="shopify" />
      </div>
      <div className='text-black'>
        <div>
        <h1 className='text-[12px] md:text-[20px] font-bold tracking-wide'>Walmart 1</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nemo maiores fugit, delectus, quisquam dolores, enim architecto deleniti corrupti iure culpa laborum expedita neque illum blanditiis. Perferendis necessitatibus quo ullam!</p>
        </div>
        <div>
        <h1>Walmart 1</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nemo maiores fugit, delectus, quisquam dolores, enim architecto deleniti corrupti iure culpa laborum expedita neque illum blanditiis. Perferendis necessitatibus quo ullam!</p>
        </div>
        <div>
        <h1>Walmart 1</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nemo maiores fugit, delectus, quisquam dolores, enim architecto deleniti corrupti iure culpa laborum expedita neque illum blanditiis. Perferendis necessitatibus quo ullam!</p>
        </div>
        <div>
        <h1>Walmart 1</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nemo maiores fugit, delectus, quisquam dolores, enim architecto deleniti corrupti iure culpa laborum expedita neque illum blanditiis. Perferendis necessitatibus quo ullam!</p>
        </div>

      </div>

    </div>
    <div className="px-9 pb-10 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="text-black">
        <h1>What we Offer</h1>
        <p>
          <ul>
            <li>item 1</li>
            <li>item 1</li>
            <li>item 1</li>
            <li>item 1</li>
            <li>item 1</li>
            <li>item 1</li>
            <li>item 1</li>
            <li>item 1</li>
            <li>item 1</li>
            <li>item 1</li>
            <li>item 1</li>
          </ul>
        </p>
        </div>
        <div className="w-[100%] flex items-center justify-end">
          <img src={graphic2} alt="Walmart" className="w-[75%] h-full" />
        </div>
       
      </div>
      <div className="mb-4 text-left px-9">
        <h1 className=" font-black md:text-[40px] text-[30px] text-[#14213d]">
          Other Services
        </h1>
      </div>
      <div className="px-9 flex-row flex-wrap justify-center gap-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 pb-10">
        {technologies.map((technology) => (
          <>
          <Link to={technology.link} key={technology.title}>
        <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="bg-black/10 p-5 rounded-2xl w-full"
    >
      <div className="w-full flex items-center justify-between">
        <div className="relative w-[35%] flex md:w-[50%]">
          <img
            src={technology.icon}
            alt="project_image"
            className="w-[60%] object-contain rounded-2xl md:h-[40px] h-auto"
          />
        </div>
        <div className="w-full flex justify-start">
          <h3 className="text-black font-bold md:text-[14px] text-[13px] text-start">
            {technology.title}
          </h3>
        </div>
      </div>
    </Tilt>
    </Link>
          
          </>
          
          
        ))}
      </div>
    </>
  )
}

export default Graphics