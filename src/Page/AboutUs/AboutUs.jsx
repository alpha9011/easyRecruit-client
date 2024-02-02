import Footers from "../../shared/Footer/Footers";
import OurMission from "./OurMission";
import Team from "./Team";
import WhyUs from "./WhyUs";

const AboutUs = () => {
    return (
        <div className="my-5">
            <h2 className="text-6xl text-center font-bold my-10">About <span className='text-yellow-400'>Us</span></h2>
            <OurMission></OurMission>
            <WhyUs></WhyUs>
            <Team></Team>
            <Footers></Footers>
        </div>
    );
};

export default AboutUs;