import { Button } from "flowbite-react";

import { CiSearch } from "react-icons/ci";
import Lottie from "lottie-react";

import bannerAnimation from "../../../../public/Json/Animation-banner.json";
import {motion} from 'framer-motion'
import TopBrands from "../TopBrands/TopBrands";
const Banner = () => {
  return (
    <div  className="" >
      {/* Banner section */}
      <div className="relative flex flex-col md:flex-row gap-10 items-center h-[70vh] w-full p-5 pb-28 ">
        
        <div className="md:w-1/2 ">
          <motion.h2 className=" justify-center text-center text-4xl md:text-5xl lg:text-7xl font-bold "
      
          animate={{x:[-1000,100,0]}}
          transition={{
            duration: 2,
            delay: 0.2
          }}
          whileHover={{opacity: 0.5}}
      
          >
            Elevate Your Hiring Journey with Easy Recruit!
          </motion.h2>
      
          <div className="flex relative items-center mt-10  lg:w-2/3 mx-auto">
            <CiSearch className="absolute top-2.5 left-2 text-3xl" />
            <input
              type="text"
              placeholder="search "
              className="rounded-full py-3 pl-10 flex-grow"
            />      
            <Button
              outline
              pill
              className="absolute top-1 right-2  text-black "
              gradientDuoTone="pinkToOrange"
            >
              Go
            </Button>
          </div>
        </div>
        <div className="  md:w-1/2 flex justify-center items-center">
          <Lottie className="max-w-md" animationData={bannerAnimation} />
        </div>
      </div>
     
          <TopBrands className="" />
         
    </div>
     
  );
};

export default Banner;
