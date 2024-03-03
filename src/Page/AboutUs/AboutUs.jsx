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
        <div className="font-roboto overflow-x-hidden overflow-y-hidden">
            <Helmet>
                <title>EasyRecruit || About Us</title>
            </Helmet>
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