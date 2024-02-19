
// import './Banner.css'
import Lottie from "lottie-react";
import bannerAnimation from "../../../Json/Animation-banner.json";

import { motion } from "framer-motion";
"react-router-dom";
import PrimaryButton from "../../../shared/PrimaryButton/PrimaryButton";
import { Link } from "react-router-dom";

const Banner = () => {

  return (
    <div className="pt-10 area ">
      {/* Banner section */}
      <ul className="circles">
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
      <div className="container mx-auto flex flex-col-reverse md:flex-row gap-10 items-center h-[80vh] md:h-[70vh] w-full p-5 md:pb-28 ">
        <div className="md:w-1/2">
          <motion.h2
            className=" text-center text-4xl md:text-5xl lg:text-6xl font-bold text-wrap "
            animate={{ x: [-1000, 100, 0] }}
            transition={{
              duration: 2,
              delay: 0.2,
            }}
            whileHover={{ opacity: 0.5 }}
          >
            Drive Success <br />
            with Excellence
          </motion.h2>
          
          <span className="flex justify-center ">
            <p className="max-w-96 my-3 text-center leading-7 ">
              Swap manual hiring tasks for efficient recruiting software
              suitable for businesses of any size.
            </p>
          </span>

          <div className="flex justify-center">
            <Link to={"/demoPage"}>
              <PrimaryButton buttonText="Request A Demo"></PrimaryButton>
            </Link>          </div>

          <div className="flex justify-center items-center ">
    
          </div>
        </div>
        <div className=" md:w-1/2 flex justify-center items-center w-64 ">
          <Lottie className="" animationData={bannerAnimation} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
