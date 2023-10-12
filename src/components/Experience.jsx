import { motion } from "framer-motion";
import { experiences } from "../constants";
const SquishyCard = () => {
  return (
    <section className="px-4 py-12">
      <div className="mx-auto w-fit">
        <Card />
      </div>
    </section>
  );
};

const Card = () => {
  return (
 <>
 <div className="mb-8 text-center pt-3">
    <h1 className=" font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-gray-500">Services</h1>
 </div>
   <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto">
    {experiences.map((experience)=>(
       <motion.div key={experience.title}
       whileHover="hover"
       transition={{
         duration: 1,
         ease: "backInOut",
       }}
       variants={{
         hover: {
           scale: 1.05,
         },
       }}
       className="relative h-96 w-80 shrink-0 overflow-hidden rounded-xl bg-gray-500 p-8"
     >
       <div className="relative z-10 text-white">
        <div className="mb-3 w-[100px] h-[100px] mx-auto rounded-full bg-white/30 px-3 py-0.5 flex items-center">
         <img src={experience.icon} className=" w-full"/>
        </div>
         <motion.span
           initial={{ scale: 0.85 }}
           variants={{
             hover: {
               scale: 1,
             },
           }}
           transition={{
             duration: 1,
             ease: "backInOut",
           }}
           className="my-2 block origin-top-left font-mono text-2xl font-black leading-[1.2]"
         >
           {experience.title}
         </motion.span>
         <p className="font-light text-sm">
           {experience.points}
         </p>
       </div>
       
       <Background />
     </motion.div>
    ))}
   </div>
 
 </>
    
   
  );
};

const Background = () => {
  return (
    <motion.svg
      width="320"
      height="384"
      viewBox="0 0 320 384"
      fill="none"
      
      className="absolute inset-0 z-0"
      variants={{
        hover: {
          scale: 1.5,
        },
      }}
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
    >
      <motion.circle
        variants={{
          hover: {
            scaleY: 0.5,
            y: -25,
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0.2,
        }}
        cx="160.5"
        cy="114.5"
        r="101.5"
        fill="#14213d"
      />
      <motion.ellipse
        variants={{
          hover: {
            scaleY: 2.25,
            y: -25,
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0.2,
        }}
        cx="160.5"
        cy="265.5"
        rx="101.5"
        ry="43.5"
        fill="#14213d"
      />
    </motion.svg>
  );
};

export default SquishyCard;