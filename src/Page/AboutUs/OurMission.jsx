import { MdOutlineVideoLibrary } from "react-icons/md";
import { GiProgression } from "react-icons/gi";
import { FaLeanpub, FaLocationCrosshairs } from "react-icons/fa6";
const OurMission = () => {
    return (
        <div className="mx-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-14 max-w-screen-xl mx-auto my-5 shadow-2xl rounded-lg">
                <div className="flex flex-col p-5 cursor-pointer hover:shadow-md">
                    <MdOutlineVideoLibrary className="text-9xl text-green-400 mb-3 hover:text-green-500" />
                    <h2 className="text-2xl font-medium mb-2">Our Philosophy</h2>
                    <p className="text-left text-base text-gray-700 max-w-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est exercitationem recusandae nobis itaque porro odit!</p>
                </div>
                <div className="flex flex-col p-5 cursor-pointer hover:shadow-md">
                    <FaLocationCrosshairs className="text-9xl text-green-400 mb-3 hover:text-green-500"></FaLocationCrosshairs>
                    <h2 className="text-2xl font-medium mb-2">Our Mission</h2>
                    <p className="text-left text-base text-gray-700 max-w-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est exercitationem recusandae nobis itaque porro odit!</p>
                </div>
                <div className="flex flex-col p-5 cursor-pointer hover:shadow-md">
                    <FaLeanpub className="text-9xl text-green-400 mb-3 hover:text-green-500"></FaLeanpub>
                    {/* <FaMap ></FaMap> */}
                    <h2 className="text-2xl font-medium mb-2">Our Vission</h2>
                    <p className="text-left text-base text-gray-700 max-w-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est exercitationem recusandae nobis itaque porro odit!</p>
                </div>
                <div className="flex flex-col p-5 cursor-pointer hover:shadow-md">
                    <GiProgression className="text-9xl text-green-400 mb-3 hover:text-green-500"></GiProgression>
                    {/* <FaLaptopCode ></FaLaptopCode> */}
                    <h2 className="text-2xl font-medium mb-2">Key Of Success</h2>
                    <p className="text-left text-base text-gray-700 max-w-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est exercitationem recusandae nobis itaque porro odit!</p>
                </div>
            </div>
        </div>
    );
};

export default OurMission;