import { Footer } from "flowbite-react";
import Banner from "./Banner/Banner";

import CustomersSlider from "./CustomersSlider/CustomersSlider";

import EasyATSBanner from "./EasyATSBanner/EasyATSBanner";

import HrSystems from "./HrSystems/HrSystems";

import MakingHiresBanner from "./MakingHiresBanner/MakingHiresBanner";
import PartnerProgram from "./PartnerProgram/PartnerProgram";
import RecruitingResult from "./RecruitingResult/RecruitingResult";

import WhyToUse from "./WhyToUse/WhyToUse";
import Footers from "../../shared/Footer/Footers";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <RecruitingResult></RecruitingResult>
      <WhyToUse></WhyToUse>
      <EasyATSBanner></EasyATSBanner>
      <HrSystems></HrSystems>
      <PartnerProgram></PartnerProgram>
      <CustomersSlider></CustomersSlider>
      <MakingHiresBanner></MakingHiresBanner>
      <Footers></Footers>
    </div>
  );
};


export default Home;
