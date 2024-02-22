import { Link } from "react-router-dom";
import PrimaryButton from "../../../shared/PrimaryButton/PrimaryButton";

const SwiperB = () => {
  return (
    <div className="relative ">
      <div className="absolute w-full grid justify-center items-center top-0 bottom-0 p-5">
        <div className="lg:w-1/2 mx-auto space-y-5 grid-flow-col text-center z-10 mb-20">
          <h3 className="text-3xl font-semibold text-white">
            Affordable Pricing, Exceptional Value
          </h3>
          <p className="leading-7 text-wrap text-white font-bold">
            Explore our flexible pricing options and discover the perfect plan for your needs. Get started today and experience premium service at unbeatable rates.
          </p>

          <div className="flex justify-center gap-5 items-center">

            <Link className="">
              <PrimaryButton buttonText={'Try EasyRecruit Free'} textColor={'text-white'} font={'font-bold'} hoverTextColor={'text-black'} hover={'hover:text-black'}> </PrimaryButton>
            </Link>
          </div>
        </div>
      </div>

      <img
        className="h-[70vh] w-full object-cover  md:object-left z-0 "
        src="https://i.ibb.co/nr39pbq/price-Backgound1.jpg"

        alt="swiperD"
      />
      <div className="absolute inset-0  bg-gradient-to-t from-transparent to-purple-500 "></div>

      <div className="flex flex-col md:flex-row justify-center items-center bg-sky-500 p-5 ">
        <h4 className="md:w-4/5 text-white font-semibold text-xl md:text-3xl z-10">
          Learn how to recruit employees quickly with EasyRecruit applicant
          tracking software.
        </h4>
      </div>

    </div>
  );
};

export default SwiperB;

