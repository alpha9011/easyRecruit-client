import Banner from "./Banner/Banner";

import CustomersSlider from "./CustomersSlider/CustomersSlider";

import EasyATSBanner from "./EasyATSBanner/EasyATSBanner";

import HrSystems from "./HrSystems/HrSystems";

import MakingHiresBanner from "./MakingHiresBanner/MakingHiresBanner";
import PartnerProgram from "./PartnerProgram/PartnerProgram";
import RecruitingResult from "./RecruitingResult/RecruitingResult";

import WhyToUse from "./WhyToUse/WhyToUse";
import Footers from "../../shared/Footer/Footers";
import { Helmet } from 'react-helmet-async';
import Countdown from "./Countdown/Countdown";
import SocialIcon from "../../shared/SocialIcon/SocialIcon";

const Home = () => {

  return (
    <div>
      <Helmet>
        <title>EasyRecruit || Home</title>
      </Helmet>
      <Banner></Banner>
      <RecruitingResult></RecruitingResult>
      <WhyToUse></WhyToUse>
      <EasyATSBanner></EasyATSBanner>
      <HrSystems></HrSystems>
      <Countdown></Countdown>
      <PartnerProgram></PartnerProgram>
      <CustomersSlider></CustomersSlider>
      <MakingHiresBanner></MakingHiresBanner>
      <SocialIcon></SocialIcon>
      <Footers></Footers>
    </div>
  );
};

export default Home;
