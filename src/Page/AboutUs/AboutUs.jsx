import OurMission from "./OurMission";
import Team from "./Team";
import WhyUs from "./WhyUs";

const AboutUs = () => {
    return (
        <div className="my-5">
            <h2 className="text-6xl text-center font-bold my-10">About Us</h2>
            <OurMission></OurMission>
            <WhyUs></WhyUs>
            <Team></Team>
        </div>
    );
};

export default AboutUs;