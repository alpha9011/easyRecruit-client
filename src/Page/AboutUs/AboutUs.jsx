import OurMission from "./OurMission";
import WhyUs from "./WhyUs";

const AboutUs = () => {
    return (
        <div className="my-5">
            <h2 className="text-4xl text-center font-semibold">About Us</h2>
            <OurMission></OurMission>
            <WhyUs></WhyUs>
        </div>
    );
};

export default AboutUs;