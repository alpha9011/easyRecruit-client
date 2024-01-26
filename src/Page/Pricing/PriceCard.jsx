import { Card } from "flowbite-react";
import { FaRegCircleUser } from "react-icons/fa6";
import { BiBriefcaseAlt2 } from "react-icons/bi";
import { GoDotFill } from "react-icons/go";
import { GrFireball } from "react-icons/gr";

const PriceCard = () => {
    return (
        <div>
            {/* All Pricing Cards */}
            <div className="w-full grid grid-cols-1 gap-5 lg:grid-cols-3 justify-center items-center max-w-screen-xl mx-auto">
                {/* Card 1 */}
                <div className="flex justify-center">
                    <Card className='max-w-sm h-[710px] transition-transform duration-500 transform origin-center hover:translate-y-[-1rem]'>
                        {/* name */}
                        <h2 className="text-black text-2xl -mb-3 font-bold -mt-14">Hero</h2>
                        <h5 className="mb-4 text-gray-500 dark:text-gray-400">Intuitive Recruiting for Small Teams</h5>
                        {/* pricing */}
                        <div className="flex items-baseline text-gray-900 dark:text-white">
                            <span className="text-3xl font-semibold">$</span>
                            <span className="text-7xl font-semibold italic tracking-tight">75</span>
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
                                    <p className="text-xs font-bold">3 Open Jobs<span className="text-blue-400"> *</span></p>
                                </div>
                            </div>
                            {/* key features with bullet point*/}
                            <div className="mt-4 mb-6">
                                <div className="flex items-center">
                                    <GoDotFill className="text-blue-500 mr-1" />
                                    <p className="text-sm text-gray-600">Job Posting & Syndication</p>
                                </div>
                            </div>
                            {/* extra info */}
                            <div>
                                <p className="text-sm text-gray-600 mb-1 leading-loose"><span className="text-cyan-500">* </span>Post up to 3 jobs at once, add more jobs for just $9 per job per month.</p>
                                <p className="text-sm text-gray-600 mb-1 leading-loose"><span>* </span>Hero price for staffing companies is $116/month.</p>
                            </div>
                        </div>
                        {/* button */}
                        <button
                            type="button"
                            className="inline-flex w-full justify-center rounded-lg bg-cyan-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-white hover:text-cyan-500 border-2 duration-500 border-cyan-500 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
                        >
                            Choose plan
                        </button>
                    </Card>
                </div>
                {/* Card 2 */}
                <div className="flex justify-center">
                    <Card className='max-w-sm h-[710px] transition-transform duration-500 transform origin-center hover:translate-y-[-1rem]'>
                        {/* name */}
                        <div className="flex justify-between">
                            <h2 className="text-black text-2xl -mb-3 font-bold">Plus</h2>
                            <div className="flex gap-2 items-center">
                                <p className="italic text-violet-700 font-medium">Most Popular</p>
                                <GrFireball className="text-2xl bg-blue-300 rounded-full text-violet-800" />
                            </div>
                        </div>
                        <h5 className="mb-4 text-gray-500 dark:text-gray-400">Limitless Hiring Software</h5>
                        {/* pricing */}
                        <div className="flex items-baseline text-gray-900 dark:text-white">
                            <span className="text-3xl font-semibold mr-2">$</span>
                            <span className="text-7xl font-semibold italic tracking-tight">269</span>
                            <span className="ml-1 font-normal text-gray-500 dark:text-gray-400">/month <p>on an annual plan</p></span>
                        </div>
                        {/* border */}
                        <div className="bg-gradient-to-r from-[#453fbd] to-[#2875cf] p-[2.6px] my-6"></div>
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
                                    <p className="text-xs font-bold">Unlimited Open Jobs<span className="text-violet-700"> *</span></p>
                                </div>
                            </div>
                            {/* key features with bullet point*/}
                            <div className="mt-4 mb-6">
                                <div className="flex items-center">
                                    <GoDotFill className="text-blue-500 mr-1" />
                                    <p className="text-sm text-gray-600 mb-3">Job Posting & Syndication</p>
                                </div>
                                <div className="flex items-center">
                                    <GoDotFill className="text-blue-500 mr-1" />
                                    <p className="text-sm text-gray-600 mb-3">Applicant Tracking System</p>
                                </div>
                                <div className="flex items-center">
                                    <GoDotFill className="text-blue-500 mr-1" />
                                    <p className="text-sm text-gray-600">Applicant Tracking System</p>
                                </div>
                            </div>
                            {/* extra info */}
                            <div>
                                <p className="text-sm text-gray-600 mb-1 leading-loose">You can add additional features that are not included with PLUS. View our Add-Ons below for more information.</p>
                            </div>
                        </div>
                        {/* button */}
                        <button
                            type="button"
                            className="inline-flex w-full justify-center rounded-lg bg-cyan-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-white hover:text-cyan-500 border-2 duration-500 border-cyan-500 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
                        >
                            Choose plan
                        </button>
                    </Card>
                </div>
                {/* card 3 */}
                <div className="flex justify-center">
                    <Card className='w-96 h-[710px] transition-transform duration-500 transform origin-center hover:translate-y-[-1rem]'>
                        {/* name */}
                        <h2 className="text-black text-2xl -mb-3 font-bold">Pro</h2>
                        <h5 className="mb-4 text-gray-500 dark:text-gray-400">Streamline Every Stage</h5>
                        {/* pricing */}
                        <div className="flex items-baseline text-gray-900 dark:text-white">
                            <span className="text-3xl font-semibold">$</span>
                            <span className="text-7xl font-semibold italic tracking-tight">420</span>
                            <span className="ml-1 font-normal text-gray-500 dark:text-gray-400">/month <p>on an annual plan</p></span>
                        </div>
                        {/* border */}
                        <div className="bg-gradient-to-r from-[#2379d0] to-[#01addf] p-[2.6px] my-6"></div>
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
                                    <p className="text-xs font-bold">Unlimited Open Jobs<span className="text-violet-700"> *</span></p>
                                </div>
                            </div>
                            {/* key features with bullet point*/}
                            <div className="mt-4 mb-6">
                                <div className="flex items-center mb-3">
                                    <GoDotFill className="text-blue-500 mr-1" />
                                    <p className="text-sm text-gray-600">Job Posting & Syndication</p>
                                </div>
                                <div className="flex items-center mb-3">
                                    <GoDotFill className="text-blue-500 mr-1" />
                                    <p className="text-sm text-gray-600">Applicant Tracking System</p>
                                </div>
                                <div className="flex items-center mb-3">
                                    <GoDotFill className="text-blue-500 mr-1" />
                                    <p className="text-sm text-gray-600">Interviews & Assessments</p>
                                </div>
                                <div className="flex items-center mb-3">
                                    <GoDotFill className="text-blue-500 mr-1" />
                                    <p className="text-sm text-gray-600">Offers & eSignatures</p>
                                </div>
                                <div className="flex items-center mb-3">
                                    <GoDotFill className="text-blue-500 mr-1" />
                                    <p className="text-sm text-gray-600">Advanced Visual Reporting</p>
                                </div>
                                <div className="flex items-center mb-3">
                                    <GoDotFill className="text-blue-500 mr-1" />
                                    <p className="text-sm text-gray-600">All-Access Support</p>
                                </div>
                            </div>
                        </div>
                        {/* button */}
                        <button
                            type="button"
                            className="inline-flex w-full justify-center rounded-lg bg-cyan-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-white hover:text-cyan-500 border-2 duration-500 border-cyan-500 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
                        >
                            Choose plan
                        </button>
                    </Card>
                </div>
            </div>

            {/* Buttons */}
            <div className="w-full flex flex-col justify-center items-center gap-5 my-5">
                <p className="text-2xl">Let’s transform how you hire.</p>
                <div className="flex gap-3">
                    <button
                        type="button"
                        className="inline-flex w-[150px] justify-center rounded bg-cyan-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-white hover:text-cyan-500 border-2 duration-500 border-cyan-500 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
                    >
                        Request a Demo
                    </button>
                    <button
                        type="button"
                        className="inline-flex w-[150px] justify-center rounded hover:bg-cyan-500 px-5 py-2.5 text-center text-sm font-medium hover:text-white bg-white text-cyan-500 border-2 duration-500 border-cyan-500 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
                    >
                        Try it Free
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PriceCard;