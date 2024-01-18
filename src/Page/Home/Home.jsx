import SocialIcon from "../../shared/SocialIcon/SocialIcon";
import Banner from "./Banner/Banner";
import HowToUse from "./HowToUse/HowToUse";
import LatestJobs from "./LatestJob/LatestJobs";
import Reviews from "./Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Banner />
      <SocialIcon></SocialIcon>
      <HowToUse />
      <Reviews></Reviews>
      <LatestJobs></LatestJobs>
    </div>
  );
};

export default Home;
