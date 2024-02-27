/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import Slider from "./Slider";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { SiQuora } from "react-icons/si";
import Footers from "../../shared/Footer/Footers";
import CustomerFeedback from "../Home/Reviews/CustomerFeedback";
import PrimaryButton from "../../shared/PrimaryButton/PrimaryButton";

const DemoPage = () => {
  return (
    <div>
      <div>
        <Slider></Slider>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className=" relative h-[600px] p-8">
          <div
            className="absolute inset-0 bg-cover bg-center bg-fixed z-0"
            style={{
              backgroundImage: `url('https://i.ibb.co/sjcjk2F/bg-4.jpg')`,
              // backgroundImage: `url('https://i.ibb.co/LrMJbrv/bg.jpg')`,
              // opacity: 0.5,
            }}
          ></div>
          {/* Client Review Section */}
          <div className="relative z-10 py-16 px-6 mt-24 lg:px-16 text-white text-center ">
            <div className="text-center ">
              <p className="flex gap-3 items-center justify-center">
                <FaQuoteLeft></FaQuoteLeft>
                <SiQuora />
                <FaQuoteRight />
              </p>
              <h1 className="text-xl lg:text-3xl font-semibold mb-3 text-[#9ceb9e]">
                "EasyRecruit has really helped us add consistency and clarity in
                our hiring process."
              </h1>
              <p className="text-xl">
                Devin Kearns | Staff Recruitment Manager
              </p>
              <p className="text-xl">North Carolina Outward Bound Logo</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center p-8 text-center">
          <div className="mx-8">
            <h1 className="text-3xl font-bold mb-10">Schedule Time Now</h1>
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-4">
                <div className="w-1/2 border-r border-gray-300 pr-4">
                  <h2 className="text-xl font-bold mb-2">
                    Exploring recruiting software for your company?
                  </h2>
                  <p className="text-lg">
                    I’m a business owner or HR team member looking to learn more
                    about EasyRecruit
                  </p>
                  <Link to={"/contact"} className="">
                    <PrimaryButton buttonText={'Contact With Us'} textColor={'text-white'} font={'font-bold'} hoverTextColor={'text-black'} hover={'hover:text-black'}> </PrimaryButton>
                  </Link>

                </div>
                <div className="w-1/2 pl-4">
                  <h2 className="text-xl font-bold mb-2">
                    Do not have much Idea about Application Tracking system?
                  </h2>
                  <p className="text-lg mb-12">Explore Our Blogs</p>
                  <Link to="/blog" className="">
                    <PrimaryButton buttonText={'Explore Our Blog'} textColor={'text-white'} font={'font-bold'} hoverTextColor={'text-black'} hover={'hover:text-black'}> </PrimaryButton>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="m-10 p-10">
        <CustomerFeedback></CustomerFeedback>
      </div>
      <div className="mt-5">
        <Footers></Footers>
      </div>

    </div>
  );
};

export default DemoPage;
