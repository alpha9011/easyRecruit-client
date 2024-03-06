// import { MdOutlineVideoLibrary } from "react-icons/md";
// import { GiProgression } from "react-icons/gi";
// import { FaLeanpub, FaLocationCrosshairs } from "react-icons/fa6";
import Lottie from "lottie-react";
import phillosophy from "../../Json/light.json"
import mission from "../../Json/mission.json"
import vission from "../../Json/vission.json"
import progress from "../../Json/progress.json"
import bgImg from "../../assets/pattern.jpg"
import { Parallax } from 'react-parallax';
const OurMission = () => {
    return (
        <div>
            <Parallax blur={5} bgImage={bgImg} strength={200}>
                <h2 className="text-7xl text-center font-bold my-10 text-white">About <span className='text-[#139BFF]'>Us</span></h2>
                <div className="grid grid-cols-1 min-[600px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-14 max-w-screen-xl mx-auto my-5 shadow-2xl rounded-lg">
                    <div className="flex flex-col p-5 cursor-pointer hover:shadow-md">
                        <Lottie animationData={phillosophy} className="mt-12"></Lottie>
                        <h2 className="text-2xl font-medium mb-2 text-white text-center">Our Philosophy</h2>
                        <p className="text-base text-gray-300 text-center max-w-sm">We brings ATS, Workforce Management, and VMS technology together into a comprehensive platform that gives organizations unparalleled talent visibility.</p>
                    </div>
                    <div className="flex flex-col p-5 cursor-pointer hover:shadow-md">
                        <Lottie animationData={vission}></Lottie>
                        <h2 className="text-2xl font-medium mb-2 text-white text-center">Our Vission</h2>
                        <p className="text-base text-gray-300 text-center max-w-sm">Our vission is to delivers smart technology that improves efficiency and boosts talent acquisition effectiveness.</p>
                    </div>
                    <div className="flex flex-col p-5 cursor-pointer hover:shadow-md">
                        <Lottie animationData={mission}></Lottie>
                        <h2 className="text-2xl font-medium mb-2 text-white text-center">Our Mission</h2>
                        <p className="text-base text-gray-300 text-center max-w-sm">Ceipal created powerful software with intuitive design and dedicated support so organizations always have what they need to hire great talent.</p>
                    </div>
                    <div className="flex flex-col p-5 cursor-pointer hover:shadow-md">
                        <Lottie animationData={progress}></Lottie>
                        <h2 className="text-2xl font-medium mb-2 text-white text-center">Key Of Success</h2>
                        <p className="text-base text-gray-300 text-center max-w-sm">AI-powered ATS automatically delivers high-quality talent to your dashboard while integrating with your hiring workflow for a more efficient talent acquisition process.</p>
                    </div>
                </div>
            </Parallax>
        </div>
    );
};

export default OurMission;