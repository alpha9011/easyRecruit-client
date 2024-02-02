import { Button } from "flowbite-react";
import { FaCheck } from "react-icons/fa";
import person from "../../assets/aboutWomen.jpg"
import background from "../../assets/aboutCr.jpg"
const WhyUs = () => {
    return (
        <div className="bg-slate-100 py-10 rounded-tr-[150px] rounded-bl-[150px]">
            <div className="max-w-screen-xl mx-auto my-20 flex flex-col lg:flex-row gap-60 lg:gap-16">
                <div className="lg:w-1/2 relative px-5">
                    <img src={background} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={person} className="w-3/4 absolute top-1/3 right-5 rounded-lg shadow-2xl" />
                </div>
                <div className="lg:w-1/2 px-5">
                    <p className="text-xl mb-3 font-bold text-gray-400">CREATIVE APPROCH</p>
                    <h1 className="text-5xl font-bold mb-2">Get over 50.000+<br /> talented experts in <span className="text-yellow-400">EasyRecruit.</span></h1>
                    <p className="text-[#737373] py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>

                    <div className="flex gap-3 items-center mb-1">
                        <FaCheck className="text-blue-600 text-lg"></FaCheck>
                        <p className="text-lg">Seamless searching</p>
                    </div>
                    <div className="flex gap-3 items-center mb-1">
                        <FaCheck className="text-blue-600 text-lg"></FaCheck>
                        <p className="text-lg">Smarter System</p>
                    </div>
                    <div className="flex gap-3 items-center mb-1">
                        <FaCheck className="text-blue-600 text-lg"></FaCheck>
                        <p className="text-lg">The Talent Container</p>
                    </div>
                    <div className="flex gap-3 items-center mb-5">
                        <FaCheck className="text-blue-600 text-lg"></FaCheck>
                        <p className="text-lg">Complete Solution</p>
                    </div>
                    <Button className="bg-gradient-to-r from-yellow-400 to-yellow-300 border-r border-yellow-300 hover:text-gray-600">Contact Us</Button>
                </div>
            </div>

            {/* Video section */}
            <div className="max-w-screen-xl mx-auto my-20 flex flex-col-reverse lg:flex-row gap-60 lg:gap-16 lg:mb-40">
                <div className="lg:w-1/2 px-5">
                    <p className="text-xl mb-3 font-bold text-[#737373]">A PLATFORM FOR ALL</p>
                    <h1 className="text-5xl font-bold mb-2">Manage the complete <br /> talent acquisition <span className="text-yellow-400">lifecycle.</span></h1>
                    <p className="text-[#737373] py-6">A full hybrid workforce management tools are yours to use, as well as access to our top 1% of talent. Whether you are a staffing firm or a corporation with complex hiring needs, the flexible,customizable, and integrated nature of the Ceipal platform enables you to source,manage, and engage permanent talent, temporary and contingent hires, and vendors.</p>
                </div>
                {/* <iframe height="350" src="https://www.youtube.com/embed/X7XK6BtOiBY?si=RKpzS23ALzoldllO" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className="border p-1 max-[425px]:w-96 min-[426px]:w-[600px]"></iframe> */}
                <iframe height="350" src="https://www.youtube.com/embed/8bSdDa_2H1w?si=ZFLlyLDgHPW4zwf_&amp;controls=0" className="border p-1 max-[425px]:w-96 min-[426px]:w-[600px] -mb-40 lg:-mb-1"></iframe>
            </div>

        </div>
    );
};

export default WhyUs;