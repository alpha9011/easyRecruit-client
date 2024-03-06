import Banner from "./Banner/Banner";

import CustomersSlider from "./CustomersSlider/CustomersSlider";

import EasyATSBanner from "./EasyATSBanner/EasyATSBanner";

import HrSystems from "./HrSystems/HrSystems";

import MakingHiresBanner from "./MakingHiresBanner/MakingHiresBanner";
import PartnerProgram from "./PartnerProgram/PartnerProgram";
import RecruitingResult from "./RecruitingResult/RecruitingResult";

import WhyToUse from "./WhyToUse/WhyToUse";
import Footers from "../../shared/Footer/Footers";
import { Helmet } from "react-helmet-async";
import SocialIcon from "../../shared/SocialIcon/SocialIcon";
import CustomerFeedback from "./Reviews/CustomerFeedback";

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

      <PartnerProgram></PartnerProgram>
      <CustomersSlider></CustomersSlider>
      <MakingHiresBanner></MakingHiresBanner>
      <SocialIcon></SocialIcon>
<<<<<<< HEAD
=======
      <SocialShare />
>>>>>>> e1223e062e952bd0aa0daa436627f318de04dede
      <CustomerFeedback></CustomerFeedback>
      <Footers></Footers>
    </div>
  );
};

export default Home;
