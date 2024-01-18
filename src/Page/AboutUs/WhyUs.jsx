import { Button, Card } from "flowbite-react";
import { FaCheck } from "react-icons/fa";
import person from "../../assets/aboutWomen.jpg"
import background from "../../assets/aboutCr.jpg"
const WhyUs = () => {
    return (
        <div>
            <div className="max-w-screen-xl mx-auto my-20 flex flex-col lg:flex-row gap-60 lg:gap-16 lg:mb-40">
                <div className="lg:w-1/2 relative px-5">
                    <img src={background} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={person} className="w-3/4 absolute top-1/3 right-5 rounded-lg shadow-2xl" />
                </div>
                <div className="lg:w-1/2 px-5">
                    <p className="text-xl mb-3 font-bold text-[#d90424]">CREATIVE APPROCH</p>
                    <h1 className="text-5xl font-bold mb-3">We develope the <br /> best programs</h1>
                    <p className="text-[#737373] py-8">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <div className="flex gap-3 items-center mb-1">
                        <FaCheck className="text-blue-600 text-lg"></FaCheck>
                        <p className="text-lg">Lifetime Access</p>
                    </div>
                    <div className="flex gap-3 items-center mb-1">
                        <FaCheck className="text-blue-600 text-lg"></FaCheck>
                        <p className="text-lg">Lattest Tecnalogy</p>
                    </div>
                    <div className="flex gap-3 items-center mb-5">
                        <FaCheck className="text-blue-600 text-lg"></FaCheck>
                        <p className="text-lg">Best price for all course</p>
                    </div>
                    <Button gradientDuoTone="pinkToOrange">Contact Us</Button>
                </div>
            </div>
            <div className="max-w-screen-xl mx-auto my-20 flex flex-col lg:flex-row gap-60 lg:gap-16 lg:mb-40">
                <div className="lg:w-1/2 px-5 border">
                    <p className="text-xl mb-3 font-bold text-[#d90424]">CREATIVE APPROCH</p>
                    <h1 className="text-5xl font-bold mb-3">We develope the <br /> best programs</h1>
                    <p className="text-[#737373] py-8">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <div className="flex gap-3 items-center mb-1">
                        <FaCheck className="text-blue-600 text-lg"></FaCheck>
                        <p className="text-lg">Lifetime Access</p>
                    </div>
                    <div className="flex gap-3 items-center mb-1">
                        <FaCheck className="text-blue-600 text-lg"></FaCheck>
                        <p className="text-lg">Lattest Tecnalogy</p>
                    </div>
                    <div className="flex gap-3 items-center mb-5">
                        <FaCheck className="text-blue-600 text-lg"></FaCheck>
                        <p className="text-lg">Best price for all course</p>
                    </div>
                    <Button gradientDuoTone="pinkToOrange">Contact Us</Button>
                </div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/X7XK6BtOiBY?si=RKpzS23ALzoldllO" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className="border p-1"></iframe>
            </div>
            <div>
                <Card
                    className="max-w-xs"
                    imgAlt="Meaningful alt text for an image that is not purely decorative"
                    imgSrc={person}
                >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Noteworthy technology acquisitions 2021
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                    </p>
                </Card>
            </div>
        </div>
    );
};

export default WhyUs;