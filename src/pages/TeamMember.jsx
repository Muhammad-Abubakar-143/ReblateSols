import Img from "../assets/team/download.webp";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";

const TeamMember = () => {

    return (
        <div className="bg-gray-100 w-full text-black px-8 sm:px-16 md:px-24 lg:px-32">
            <h1 className="pt-[120px] text-center font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-[#14213d]">
                Team Member
            </h1>
            <div className="py-16 flex flex-col lg:flex-row items-center gap-8 md:gap-24">
                <div className="border h-full border-gray-300 shadow bg-white rounded-lg overflow-hidden">
                    <img
                        src={Img}
                        alt="DP" loading="lazy"
                        className="object-cover w-[600px] h-[400px] border-b border-gray-300" />
                    {/* <div className="flex flex-col gap-4 py-4 text-center">
                        <div>
                            <h3 className="text-primary text-xl font-bold">Tom Holland</h3>
                            <p className="text-slate-500">Web Developer</p>
                        </div>
                        <ul className="flex align-center justify-center gap-4">
                            <li className="text-blue-600 hover:scale-150 duration-300"><FaFacebook size={28} /></li>
                            <li className="text-gray-800 hover:scale-150 duration-300"><FaGithub size={28} /></li>
                            <li className="text-cyan-700 hover:scale-150 duration-300"><FaLinkedin size={28} /></li>
                        </ul>
                    </div> */}
                    {/* <div className="w-full bg-primary text-center p-4 font-extrabold text-lg text-white shadow-lg shadow-red-600 z-40">Tom Holland</div> */}
                </div>
                <div className="w-full flex flex-col gap-5">
                    {/* <h2 className="text-center mb-2 font-black md:text-[30px] text-[20px] text-[#14213d]">
                        Details
                    </h2> */}
                    <div>
                        <h3 className="text-slate-600 text-xl">Web Developer</h3>
                        <h2 className="font-black md:text-[30px] text-[20px] text-[#14213d]">
                            Tom Holland
                        </h2>
                    </div>
                    <p className=" text-sm lg:text-lg text-slate-500">
                        Specializing in front-end and back-end development, I am proficient in a range of programming languages and frameworks including HTML5, CSS3, JavaScript, React.js, Node.js, and more. I have a strong foundation in responsive design, ensuring that every website I build is optimized for seamless performance across all devices and platforms.
                    </p>
                    <ul className="flex flex-col gap-2 text-sm lg:text-lg [&>li]:flex [&>li]:gap-4 [&>li>h3]:font-semibold [&>li>span]:text-slate-500">
                        {/* <li><h3>Position: </h3><span>Senior Developer</span></li> */}
                        <li><h3>Experience: </h3><span>3 Years</span></li>
                        <li><h3>Email: </h3><span>example@gmail.com</span></li>
                        {/* <li><h3>Expertise: </h3><span >Specializing in front-end and back-end development, I am proficient in a range of programming languages and frameworks including HTML5, CSS3, JavaScript, React.js, Node.js, and more. I have a strong foundation in responsive design, ensuring that every website I build is optimized for seamless performance across all devices and platforms.</span></li> */}
                        {/* <li><h3>Projects: </h3><span>Some of my notable projects include [Project 1], where I developed a custom e-commerce website with a seamless checkout process, resulting in a [X]% increase in sales conversion. Additionally, I spearheaded the development of [Project 2], a responsive web application that optimized workflow efficiency for [Client/Company].</span></li> */}
                        {/* <li><h3>About: </h3>I am a passionate web developer with a keen eye for detail and a knack for crafting immersive digital experiences. With [X] years of experience in the industry, I thrive on turning ideas into reality through clean, efficient code and intuitive user interfaces. My journey in web development began with a curiosity for technology and a drive to create meaningful connections between users and the digital world.<span>   </span></li> */}
                    </ul>
                </div>
            </div>
            <motion.div
                variants={fadeIn("top", "tween", 0.2, 1)}
                className='flex-[0.75] pt-5 pb-8'
            >
                <h2 className="text-center mb-4 font-black md:text-[30px] text-[20px] text-[#14213d]">
                    Skills
                </h2>
                {/* <div className="grid gap-4 grid-cols-1 md:grid-cols-4 mx-auto max-w-7xl justify-center"> */}
                <div className="grid gap-4 grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 mx-auto [&>*]:shadow justify-center">
                    <Card
                        title="React.js"
                        subtitle1="React.js is a powerful JavaScript library for building user interfaces. It allows developers to create reusable UI components and efficiently manage the state of their applications."
                        Icon={FaReact}
                    />
                    <Card
                        title="Firebase"
                        subtitle1="Description"
                        Icon={IoLogoFirebase}
                    />
                    <Card
                        title="Tailwind CSS"
                        subtitle1="Description"
                        Icon={SiTailwindcss}
                    />
                    <Card
                        title="Bootstrap"
                        subtitle1="Description"
                        Icon={FaBootstrap}
                    />
                </div>
            </motion.div>
        </div>
    );
}

const Card = ({ title, subtitle1, subtitle2, Icon }) => {
    return (
        <div className="w-full p-4 rounded-lg border-[1px] border-slate-300 relative overflow-hidden group bg-white">
            <div className="absolute inset-[-2px] bg-[#14213d] translate-x-[100%] group-hover:translate-x-[0%] transition-transform duration-300" />

            <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-slate-200 group-hover:text-[#fca311] group-hover:rotate-12 transition-transform duration-300" />
            <Icon className="mb-2 text-2xl text-[#14213d] group-hover:text-white transition-colors relative z-10 duration-300" />
            <h3 className="mb-2 font-medium text-sm lg:text-lg text-[#14213d] group-hover:text-white relative z-10 duration-300">
                {title}
            </h3>
            <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300">
                {subtitle1}
            </p>
            <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300">
                {subtitle2}
            </p>
        </div>
    );
};


export default TeamMember;