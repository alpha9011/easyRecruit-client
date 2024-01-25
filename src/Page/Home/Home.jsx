import SocialIcon from "../../shared/SocialIcon/SocialIcon";
import Banner from "./Banner/Banner";

import CustomersSlider from "./CustomersSlider/CustomersSlider";
import Customers from "./CustomersSlider/CustomersSlider";

import EasyATSBanner from "./EasyATSBanner/EasyATSBanner";
import HowToUse from "./HowToUse/HowToUse";
import HrSystems from "./HrSystems/HrSystems";
import LatestJobs from "./LatestJob/LatestJobs";
import MakingHiresBanner from "./MakingHiresBanner/MakingHiresBanner";
import PartnerProgram from "./PartnerProgram/PartnerProgram";
import RecruitingResult from "./RecruitingResult/RecruitingResult";
import Reviews from "./Reviews/Reviews";
import WhyToUse from "./WhyToUse/WhyToUse";

const Home = () => {
  return (
    <div>
      <Banner />

      <RecruitingResult></RecruitingResult>
      <WhyToUse></WhyToUse>
      <EasyATSBanner></EasyATSBanner>
      <HrSystems></HrSystems>
      <PartnerProgram></PartnerProgram>
      <CustomersSlider></CustomersSlider>
      <MakingHiresBanner></MakingHiresBanner>
    
    </div>
  );
};

export default Home;
