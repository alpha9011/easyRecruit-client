import { Helmet } from "react-helmet-async";
import Footers from "../../shared/Footer/Footers";
import SocialIcon from "../../shared/SocialIcon/SocialIcon";
import Reviews from "../Home/Reviews/Reviews";
import OurMission from "./OurMission";
import Team from "./Team";
import WhyUs from "./WhyUs";
import Countdown from "../Home/Countdown/Countdown";

const AboutUs = () => {
    return (
        <div className="my-5">
            <Helmet>
                <title>EasyRecruit || About Us</title>
            </Helmet>
            <h2 className="text-6xl text-center font-bold my-10">About <span className='text-yellow-400'>Us</span></h2>
            <OurMission></OurMission>
            <Countdown></Countdown>
            <WhyUs></WhyUs>
            <Team></Team>
            <Reviews></Reviews>
            <SocialIcon></SocialIcon>
            <Footers></Footers>
        </div>
    );
};

export default AboutUs;