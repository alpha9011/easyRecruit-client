import Footers from "../../shared/Footer/Footers";
import SocialIcon from "../../shared/SocialIcon/SocialIcon";
import Banner from "./Banner/Banner";
import PopularCategoriy from "./PopularCategoriy/PopularCategoriy";

import Countdown from "./Countdown/Countdown";
import HowToUse from "./HowToUse/HowToUse";
import LatestJobs from "./LatestJob/LatestJobs";
import Reviews from "./Reviews/Reviews";

const Home = () => {
    return (
        <div>
            <Banner />
            <PopularCategoriy/>
            <SocialIcon></SocialIcon>
            <Reviews></Reviews>
            <LatestJobs></LatestJobs>
            <HowToUse></HowToUse>
            <Countdown></Countdown>
            <Footers></Footers>
        </div>
    );
};

export default Home;
