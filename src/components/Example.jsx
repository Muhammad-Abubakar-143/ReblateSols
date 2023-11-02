import React, { useEffect, useState } from "react";
import { FiCheckSquare, FiX } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

const SlideInNotifications = () => {
  const [notifications, setNotifications] = useState([]);

  const removeNotif = (id) => {
    setNotifications((pv) => pv.filter((n) => n.id !== id));
  };

  return (
    <>
      <button
        onClick={() => {
          setNotifications((pv) => [generateRandomNotif(), ...pv]);
        }}
        className="bg-[#14213d] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary transition ease-in-out delay-150 hover:-translate-y-1 hover:text-black hover:scale-110 hover:bg-[#FCA311] duration-300"
      >
        Add notification
      </button>
      <div className="flex flex-col gap-1 w-72 fixed top-2 right-2 z-50 pointer-events-none">
        <AnimatePresence>
          {notifications.map((n) => (
            <Notification removeNotif={removeNotif} {...n} key={n.id} />
          ))}
        </AnimatePresence>
      </div>
    </>
  );
};

const NOTIFICATION_TTL = 5000;

const Notification = ({ text, id, removeNotif }) => {
  useEffect(() => {
    const timeoutRef = setTimeout(() => {
      removeNotif(id);
    }, NOTIFICATION_TTL);

    return () => clearTimeout(timeoutRef);
  }, []);

  return (
    <motion.div
      layout
      initial={{ y: -15, scale: 0.95 }}
      animate={{ y: 0, scale: 1 }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="p-2 flex items-start rounded gap-2 text-xs font-medium shadow-lg text-white bg-indigo-500 pointer-events-auto"
    >
      <FiCheckSquare className=" mt-0.5" />
      <span>{text}</span>
      <button onClick={() => removeNotif(id)} className="ml-auto mt-0.5">
        <FiX />
      </button>
    </motion.div>
  );
};

export default SlideInNotifications;

const generateRandomNotif = () => {
 

 

  const data = {
    text: `Thank you. we will get back to you as soon as possible.`,
  };

  return data;
};