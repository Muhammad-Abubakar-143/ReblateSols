import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { pic1,pic2,pic3,pic4,pic5,
  pic6,pic7,pic8,pic9,pic10,pic11,pic12, pic13,pic14,pic15,pic16, } from "../assets";
const ShuffleHero = () => {
  return (
    <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-black ">
        Changing The World Through Digital Experience
        </h1>
        <p className="text-base md:text-lg text-gray-500 my-4 md:my-6 ">
        Great experiences have the power to inspire, transform and move the world forward and creativity 
        is at the heart of every great experience
        </p>
        <div className="flex justify-start mr-10">
        <button className='bg-white font-bold md:flex text-sm px-6 py-3 mr-4 rounded-lg shadow-lg text-black transition ease-in-out delay-150 hover:-translate-y-1 hover:text-black hover:scale-110 hover:bg-[#FCA311] duration-300'>
               <Link to="/careers">
                Hire Us
               </Link>
        </button>
        <button className='bg-white font-bold md:flex text-sm px-6 py-3 rounded-lg shadow-lg text-black transition ease-in-out delay-150 hover:-translate-y-1 hover:text-black hover:scale-110 hover:bg-[#FCA311] duration-300'>
                <Link to='/contact'>
                Contact Us
                </Link>
        </button>

        </div>
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: pic1,
  },
  {
    id: 2,
    src: pic2,
  },
  {
    id: 3,
    src: pic3,
  },
  {
    id: 4,
    src: pic4,
  },
  {
    id: 5,
    src: pic5,
  },
  {
    id: 6,
    src: pic6,
  },
  {
    id: 7,
    src: pic7,
  },
  {
    id: 8,
    src: pic8,
  },
  {
    id: 9,
    src: pic9,
  },
  {
    id: 10,
    src: pic10,
  },
  {
    id: 11,
    src: pic11,
  },
  {
    id: 12,
    src: pic12,
  },
  {
    id: 13,
    src: pic13,
  },
  {
    id: 14,
    src: pic14,
  },
  {
    id: 15,
    src: pic15,
  },
  {
    id: 16,
    src: pic16,
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;