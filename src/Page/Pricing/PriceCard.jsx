import { Card } from "flowbite-react";
import { FaRegCircleUser } from "react-icons/fa6";
import { BiBriefcaseAlt2 } from "react-icons/bi";
import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";

const PriceCard = (packs) => {
    console.log(packs.packs);
    const { _id, pack_name, short_details, price, job_limit, feature_1, feature_2, feature_3 } = packs.packs || {}
    return (
        <div>
            {/* All Pricing Cards */}
            <div>
                {/* Card 1 */}
                <div className="flex justify-center" data-aos="fade-up" data-aos-duration="1000">
                    <Card className='max-w-sm h-[790px] transition-transform duration-500 transform origin-center hover:translate-y-[-2rem]'>
                        {/* name */}
                        <h2 className="text-black text-2xl -mb-3 font-bold -mt-14">{pack_name}</h2>
                        <h5 className="mb-4 text-gray-500 dark:text-gray-400">{short_details}</h5>
                        {/* pricing */}
                        <div className="flex items-baseline text-gray-900 dark:text-white">
                            <span className="text-3xl font-semibold">$</span>
                            <span className="text-7xl font-semibold italic tracking-tight">{price}</span>
                            <span className="ml-1 font-normal text-gray-500 dark:text-gray-400">/month <p>when billed annually*</p></span>
                        </div>
                        {/* border */}
                        <div className="bg-gradient-to-r from-[#6c07ae] to-[#4c39b7] p-[2.6px] my-6"></div>
                        {/* features in box */}
                        <div>
                            <p className="mb-3 text-gray-500">Includes:</p>
                            <div className="flex flex-row justify-around">
                                <div className="flex flex-col items-center bg-slate-100 py-4 w-36 rounded-sm">
                                    <FaRegCircleUser className="bg-blue-200 rounded-full text-xl mb-2"></FaRegCircleUser>
                                    <p className="text-xs font-bold">Unlimited Users</p>
                                </div>
                                <div className="flex flex-col items-center bg-slate-100 py-4 w-36 rounded-sm">
                                    <BiBriefcaseAlt2 className="bg-blue-200 rounded-full text-xl mb-2"></BiBriefcaseAlt2>
                                    <p className="text-xs font-bold">{job_limit} Open Jobs<span className="text-blue-400"> *</span></p>
                                </div>
                            </div>
                            {/* key features with bullet point*/}
                            <div className="mt-4 mb-6">
                                <div className="flex items-center">
                                    <GoDotFill className="text-blue-500 mr-1" />
                                    <p className="text-sm text-gray-600">{feature_1}</p>
                                </div>
                            </div>
                            <div className="mt-4 mb-6">
                                <div className="flex items-center">
                                    <GoDotFill className="text-blue-500 mr-1" />
                                    <p className="text-sm text-gray-600">{feature_2}</p>
                                </div>
                            </div>
                            <div className="mt-4 mb-6">
                                <div className="flex items-center">
                                    <GoDotFill className="text-blue-500 mr-1" />
                                    <p className="text-sm text-gray-600">{feature_3}</p>
                                </div>
                            </div>
                            {/* extra info */}
                            <div>
                                <p className="text-sm text-gray-600 mb-1 leading-loose"><span className="text-cyan-500">* </span>You can add additional features that are not included with PLUS. View our Add-Ons below for more information.</p>
                                <p className="text-sm text-gray-600 mb-1 leading-loose"><span>* </span>Hero price for staffing companies is $116/month.</p>
                            </div>
                        </div>
                        {/* button */}
                        <Link to={`/packdetails/${_id}`}>
                            <button
                                type="button"
                                className="inline-flex w-full justify-center rounded-lg bg-cyan-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-white hover:text-cyan-500 border-2 duration-500 border-cyan-500 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
                            >
                                Choose plan
                            </button>
                        </Link>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default PriceCard;