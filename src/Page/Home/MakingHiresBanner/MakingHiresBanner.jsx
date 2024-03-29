
import hireBannerImg from "../../../../public/Image/makingHireBanner.jpg";
import { Link } from "react-router-dom";
import PrimaryButton from "../../../shared/PrimaryButton/PrimaryButton";

const MakingHiresBanner = () => {


  return (
    <div className="relative ">
      <div className="absolute w-full md:w-1/2 grid justify-center items-center top-0 bottom-0 p-5">
        <div className="lg:w-1/2 mx-auto space-y-5 grid-flow-col text-center z-10 mb-20">
          <h3 className="text-3xl font-semibold text-white">
            Start Making Great Hires Today
          </h3>
          <p className="leading-7 text-wrap text-white font-bold">
            Try EasyRecruit for free — no credit card required. Begin
            streamlining your recruiting process and hiring top candidates
            faster.
          </p>
          <div className="flex justify-center gap-5 items-center">
           
            <PrimaryButton  buttonText={'Watch Demo'} textColor={'text-white'} font={'font-bold'} hoverTextColor={'text-black'} hover={'hover:text-black'}> </PrimaryButton>
            <Link className="text-white hover:border-b">
                 Try EasyRecruit Free
            </Link>
          </div>
        </div>
      </div>

      <img
        className="h-[60vh] w-full object-cover object-top md:object-left lg:object-top  z-0 " 
       
        src={hireBannerImg}
        alt="EasyATSBanner"
      />
      <div className="absolute inset-0  bg-gradient-to-l from-transparent to-blue-500 "></div>

      <div className="flex flex-col md:flex-row justify-center items-center bg-sky-500 p-5 ">
        <h4 className="md:w-4/5 text-white font-semibold text-xl md:text-3xl z-10">
          Learn how to recruit employees quickly with EasyRecruit applicant
          tracking software.
        </h4>
       

        {/* <PrimaryButton className="text-white " buttonText={'Request A Demo'}></PrimaryButton> */}
      </div>
   
    </div>
  );
};

export default MakingHiresBanner;
