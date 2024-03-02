import "./Banner.css";
import Lottie from "lottie-react";
// import bannerAnimation from "../../../Json/Animation-banner.json";
import bannerAnimation from "../../../Json/Animation-banner2.json";

import { motion } from "framer-motion";
("react-router-dom");

import SecondaryButton from "../../../shared/SecondaryButton/SecondaryButton";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className=" h-screen overflow-hidden"

      style={{
        background: `url('https://i.ibb.co/LrMJbrv/bg.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        // height: "calc(100vh - 65px)",
        height: '100vh'
      }}
    >
      {/* Banner section */}
      <div className="area">
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
      </div>
      <div className=" container mx-auto h-screen flex flex-col-reverse md:flex-row gap-10 items-center  p-5 pb-28 ">
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

          <span className="flex justify-center">
            <p className="max-w-96 my-3 text-center leading-7 ">
              Swap manual hiring tasks for efficient recruiting software
              suitable for businesses of any size.
            </p>
          </span>

          <div className="flex justify-center relative gap-2">
            <Link to="/demoPage">
            
            <SecondaryButton buttonText="Request A Demo"></SecondaryButton>
            </Link>
            <Link to="/register">
            
            <SecondaryButton buttonText="Try it Free"></SecondaryButton>
            </Link>
          </div>

          <div className="flex justify-center items-center "></div>
        </div>
        <div className=" md:w-1/2 flex justify-center items-center w-64 ">
          <Lottie className="" animationData={bannerAnimation} />
        </div>
      </div>
    </div>
  );
};
export default Banner;
