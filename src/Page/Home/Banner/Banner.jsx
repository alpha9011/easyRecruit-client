import { Button } from "flowbite-react";

import Lottie from "lottie-react";

import bannerAnimation from "../../../Json/Animation-banner.json";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PrimaryButton from "../../../shared/PrimaryButton/PrimaryButton";

const Banner = () => {

  return (
    <div className="pt-10 ">
      {/* Banner section */}
      <div className="container mx-auto flex flex-col-reverse md:flex-row gap-10 items-center h-[80vh] md:h-[70vh] w-full p-5 md:pb-28 ">
        <div className="md:w-1/2">
          <motion.h2
            className=" text-center text-4xl md:text-5xl lg:text-6xl font-bold text-wrap"
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
            <p className="max-w-96 my-3 text-center leading-7">
              Swap manual hiring tasks for efficient recruiting software
              suitable for businesses of any size.
            </p>
          </span>

          <div className="flex justify-center">
            <PrimaryButton buttonText="Request A Demo"></PrimaryButton>
          </div>

          <div className="flex justify-center items-center ">
            {/* <Link>
              <p className="text-center mt-3 border-b-2 w-48  hover:bg-gray-100 ">
                Try EasyRecruit free
              </p>
            </Link> */}

           
            <div className="border"></div>
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
