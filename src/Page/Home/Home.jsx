import Banner from "./Banner/Banner";

import CustomersSlider from "./CustomersSlider/CustomersSlider";

import EasyATSBanner from "./EasyATSBanner/EasyATSBanner";

import HrSystems from "./HrSystems/HrSystems";

import MakingHiresBanner from "./MakingHiresBanner/MakingHiresBanner";
import PartnerProgram from "./PartnerProgram/PartnerProgram";
import RecruitingResult from "./RecruitingResult/RecruitingResult";

import WhyToUse from "./WhyToUse/WhyToUse";
// import Footers from "../../shared/Footer/Footers";
// import SocialIcon from "../../shared/SocialIcon/SocialIcon";

// import PopularCategoriy from "./PopularCategoriy/PopularCategoriy";

// import Countdown from "./Countdown/Countdown";
// import HowToUse from "./HowToUse/HowToUse";
// import LatestJobs from "./LatestJob/LatestJobs";
// import Reviews from "./Reviews/Reviews";
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
    </div>
  );
};

// const Home = () => {
//     return (
//         <div>
//             <Banner />
//             <PopularCategoriy/>
//             <SocialIcon></SocialIcon>
//             <Reviews></Reviews>
//             <LatestJobs></LatestJobs>
//             <HowToUse></HowToUse>
//             <Countdown></Countdown>
//             <Footers></Footers>
//         </div>
//     );
// };

export default Home;
