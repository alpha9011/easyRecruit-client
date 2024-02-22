/* eslint-disable react/no-unescaped-entities */
import Slider from "./Slider";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { SiQuora } from "react-icons/si";
import Footers from "../../shared/Footer/Footers";
import CustomerFeedback from "../Home/Reviews/CustomerFeedback";
import ChatbotKit from "../chatbotKit/ChatbotKit";

const DemoPage = () => {
    return (
        <div>
            <div>
                <Slider></Slider>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className=" relative h-[600px] p-8">
                    {/* Background Image */}
                    {/* <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat backdrop-filter "
                        style={{
                            backgroundImage: `url('https://i.ibb.co/sjcjk2F/bg-4.jpg')`

                        }}
                    /> */}

                    <div
                        className="absolute inset-0 bg-cover bg-center bg-fixed z-0"
                        style={{
                            backgroundImage: `url('https://i.ibb.co/sjcjk2F/bg-4.jpg')`,
                            // backgroundImage: `url('https://i.ibb.co/LrMJbrv/bg.jpg')`,

                            // opacity: 0.5,
                        }}
                    ></div>
                    {/* Client Review Section */}
                    <div className="relative z-10 py-16 px-6 mt-24 lg:px-16 text-white text-center ">
                        <div className="text-center ">
                            <p className="flex gap-3 items-center justify-center"><FaQuoteLeft></FaQuoteLeft><SiQuora /><FaQuoteRight /></p>
                            <h1 className="text-xl lg:text-3xl font-semibold mb-3 text-blue-400">"EasyRecruit has really helped us add consistency and clarity in our hiring process."</h1>
                            <p className="text-xl">Devin Kearns | Staff Recruitment Manager</p>
                            <p className="text-xl">North Carolina Outward Bound Logo</p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center p-8 text-center">
                    <div className="mx-8">
                        <h1 className="text-3xl font-bold mb-10">Schedule Time Now</h1>
                        <div className="flex flex-col gap-8">
                            <div className="flex items-center gap-4">
                                <div className="w-1/2 border-r border-gray-300 pr-4">
                                    <h2 className="text-xl font-bold mb-2">Exploring recruiting software for your company?</h2>
                                    <p className="text-lg">I’m a business owner or HR team member looking to learn more about EasyRecruit</p>
                                    <button className="mt-5 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Speak to an EasyRecruit Rep.</button>
                                </div>
                                <div className="w-1/2 pl-4">
                                    <h2 className="text-xl font-bold mb-2">Do not have much Idea about Application Tracking system?</h2>
                                    <p className="text-lg mb-12">Explore with EasyRecruit FAQ</p>
                                    <button className="mt-5 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Explore with Us</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="m-10 p-10">
                <CustomerFeedback></CustomerFeedback>


            </div>
            <div className="mt-5">
                <ChatbotKit></ChatbotKit>

                <Footers></Footers>
            </div>
        </div>
    );
};

export default DemoPage;