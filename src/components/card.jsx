import { motion } from "framer-motion";

const SquishyCard = () => {
  return (
    
      <div className="text-neutral-100 bg-cover card pt-40 max-w-[35ch] rounded-[0.5rem] overflow-hidden ease-in delay-300 transition-all">
    <div className="card-content"> 
      <h2 className="card-title">Something Awesome</h2>
      <p className="card-body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa.
      </p>
      <a href="#" className="button">
        Learn More
      </a>
    </div>
  </div>
 
  );
};
export default SquishyCard;