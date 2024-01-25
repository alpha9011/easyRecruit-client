import { Button } from "flowbite-react";
import EasyATSBannerImg from "../../../../public/Image/easyATS.jpg";
import EasyATSBannerIcons from "../../../../public/Image/easyATSIcons.png";
const EasyATSBanner = () => {
  return (
    <div className="relative ">
      <div className="absolute w-full md:w-1/2 grid justify-center items-center top-0 bottom-0 p-5">
        <div className="lg:w-1/2 mx-auto space-y-5 grid-flow-col text-center z-10 mb-20">
          {/* <img src={EasyATSBannerIcons} alt="" /> */}
          <h3 className="text-3xl font-semibold text-white">
            “Lightweight and Easy ATS”
          </h3>
          <p className="leading-7 text-wrap text-white font-bold">
            EasyRecruit is perfect for small companies. I love that you can see when
            an email was sent and opened by the candidate. I also like that it
            can integrate with other vendors to automatically feed into a
            background check company without having to fill anything out!”
          </p>
        
        </div>
      </div>

      <img
        className="h-[70vh] w-full object-cover object-center md:object-left lg:object-top  z-0"
        src={EasyATSBannerImg}
        alt="EasyATSBanner"
      />
      <div className="absolute inset-0  bg-gradient-to-r from-transparent to-blue-600 "></div>

      <div className="flex flex-col md:flex-row justify-center items-center bg-sky-500 p-5 ">
        <h4 className="md:w-4/5 text-white font-semibold text-xl md:text-2xl lg:text-3xl z-10">
          Learn how to recruit employees quickly with EasyRecruit applicant
          tracking software.
        </h4>
        <Button outline gradientDuoTone="pinkToOrange">
          Request A Demo
        </Button>
      </div>
    </div>
  );
};

export default EasyATSBanner;
