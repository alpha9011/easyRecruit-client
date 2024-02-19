import PrimaryButton from "../../../shared/PrimaryButton/PrimaryButton";

const CBannerImageD = () => {
    return (
        <div className="relative ">
            <div className="absolute w-full md:w-1/2 grid justify-center items-center top-0 bottom-0 p-5">
                <div className="lg:w-1/2 mx-auto space-y-5 grid-flow-col text-center z-10 mb-20">
                    <h3 className="text-4xl font-bold text-[#666699]">
                    Unleash Your Potential: Discover Now
                    </h3>
                    <p className="leading-7 text-wrap text-[#666699] text-lg font-semibold">
                        Begin your career transformation with Reputed Companies. Discover rewarding positions and start your success story.
                    </p>
                    <div className="flex justify-center gap-5 items-center">

                        <PrimaryButton buttonText={'Explore Your Dream Job'} textColor={'text-blue-400'} font={'font-bold'} hoverTextColor={'text-purple-400'} hover={'hover:text-black'}> </PrimaryButton>
                        
                    </div>
                </div>
            </div>

            <img
                className="h-[60vh] w-full object-cover object-top md:object-left lg:object-top  z-0 "

                src="https://i.ibb.co/qCY6Ssf/hire-4.jpg"
                alt="swiperD"
            />
<div className="absolute inset-0"></div>
            <div className="flex flex-col md:flex-row justify-center items-center bg-[#666699] p-5 ">
                <h4 className="md:w-4/5 text-white font-semibold text-xl md:text-3xl z-10">
                Connect with top employers and unlock exciting job opportunities using EasyRecruit Latest Job Circular Features.
                </h4>
            </div>

        </div>
    );
};

export default CBannerImageD;

