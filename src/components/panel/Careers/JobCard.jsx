import React from 'react'
import { MdLocationOn } from "react-icons/md";
import { BsFillSuitcaseLgFill } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const JobCard = ({
    id,
    title = "Developer",
    desc = "Expertise in MERN Stack",
    exp = 5,
    role = 'Senior',
    location = 'Jhelum',
    type = 'On-Site',
    change = false,
    deletePost,
}) => {
    return (
        <div className="text-black w-full h-full p-5 bg-white border border-gray-400 shadow-sm rounded">
            <div className="flex flex-col text-left">
                <h1 className="flex justify-between mb-3 overflow-hidden text-lg font-semibold sm:text-xl">
                    {title}
                    {change ? <span className='flex gap-1 align-center justify-center items-center'>
                        {/* <MdEdit className="text-orange-500 hover:bg-orange-200 active:scale-[101%] active:bg-orange-100 p-2 w-full h-full border border-orange-300" /> */}
                        <MdDelete onClick={() => deletePost(id)} className="rounded text-red-500 hover:bg-red-200 active:scale-[101%] active:bg-red-100 p-2 w-full h-full border border-red-300" />
                    </span> : null}

                </h1>
                <p className="overflow-hidden text-sm">{desc}</p>
                <div className="text-center flex gap-2 my-2 mt-6 text-sm font-medium text-gray-500">
                    <span className="rounded-full bg-green-100 px-3 py-1 text-green-900 border border-green-500">
                        {exp} Years
                    </span>
                    <span className="text-center rounded-full bg-red-100 px-3 py-1 text-red-900 border border-red-400">
                        {role}
                    </span>
                </div>
                <div className="flex gap-2 my-2">
                    <span className="text-center flex items-center gap-2 text-xs rounded-full bg-[#fca311]/50 px-3 py-1 text-[#14213d] border border-[#fca311]">
                        <MdLocationOn className="bg-gree-500" size={15} />
                        {location}
                    </span>
                    <span className="text-center flex items-center gap-2 text-xs rounded-full bg-orange-100 px-3 py-1 text-orange-900 border border-orange-500">
                        <BsFillSuitcaseLgFill size={15} />
                        {type}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default JobCard