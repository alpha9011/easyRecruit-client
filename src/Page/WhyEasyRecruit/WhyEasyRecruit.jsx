import bgImg from '../../../src/assets/whyUs3.jpg';
import growth from "../../../src/assets/growth.jpg"
import background from "../../../src/assets/women_with_laptop.jpg"
import marketPlace from "../../../src/assets/background.jpg"
import support from "../../../src/assets/callCenter.jpg"
import team from "../../../src/assets/teamWork.jpg"
import responsive from "../../../src/assets/responsive.jpg"
import supports from "../../../src/assets/support.jpg"
import job from "../../../src/assets/19209.jpg"
import Footers from '../../shared/Footer/Footers';
import { Helmet } from 'react-helmet-async';
import PageCover from '../../shared/PageCover/PageCover';
import { Link } from 'react-router-dom';
// import Footers from '../../shared/Footer/Footers';

const WhyEasyRecruit = () => {
    return (
        <div className='overflow-x-hidden overflow-y-hidden font-roboto'>
            <Helmet>
                <title>EasyRecruit || Why US</title>
            </Helmet>
            {/* Banner */}
            <PageCover img={bgImg} title={'We help build tomorrows greatest companies'} desc={'EasyRecriut is powerful, user-friendly recruitment software that scales your ability to find and hire great talent'}></PageCover>
            {/* <div className='bg-gradient-to-r from-purple-800 to-green-500 h-[91vh] w-full relative'>
                <img src={bgImg} alt="bgImage" className='w-full h-full object-cover absolute mix-blend-overlay' />
                <div className='max-w-screen-md mx-auto h-full flex justify-center items-center px-10'>
                    <div>
                        <h1 className='text-yellow-100 text-6xl font-bold text-center mx-auto' data-aos="fade-right" data-aos-duration="1000">
                            We help build tomorrows greatest companies</h1>
                        <p className='text-yellow-200 text-lg text-center font-normal mt-5' data-aos="fade-left" data-aos-duration="1000">EasyRecriut is powerful, user-friendly recruitment software that scales your ability to find and hire great talent.</p>
                    </div>
                </div>
            </div> */}
            {/* part-1 */}
            <div className='flex flex-col-reverse justify-around gap-5 lg:flex-row items-center bg-slate-100'>
                {/* text colomn */}
                <div className='text-left lg:ml-20 max-w-sm' data-aos="fade-up-right" data-aos-duration="1000">
                    <p className='font-bold text-cyan-500 mb-4'>PRICING AND SCALABILITY</p>
                    <h2 className='text-3xl leading-normal mb-4'>Plans for any stage of growth, all within your budget</h2>
                    <p className='text-sm text-gray-500 leading-loose mb-5'>Unlimited users, candidates, and job syndication is offered on every plan so for SMBs you can focus on making the right connections to scale your business.</p>
                    <Link to="/price">
                        <button
                            type="button"
                            className="inline-flex w-[165px] justify-center rounded hover:bg-cyan-500 px-5 py-2.5 text-center text-sm font-medium hover:text-white bg-white text-cyan-500 border-2 duration-500 border-cyan-500 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
                        >
                            Compare our plans
                        </button>
                    </Link>
                </div>
                {/* image column */}
                <div className="relative w-1/2 lg:pt-20" data-aos="fade-up-left" data-aos-duration="1000">
                    <img src={marketPlace} className="shadow-2xl lg:h-full lg:w-1/2 lg:float-end border" />
                    <img src={growth} className="absolute rounded-3xl top-1/3 right-32 md:right-56 shadow-2xl h-2/4 max-w-[350px]" />
                </div>
            </div>
            {/* part-2 */}
            <div className='flex flex-col-reverse justify-around gap-5 lg:flex-row-reverse items-center py-10'>
                {/* text colomn */}
                <div className='text-left max-w-sm' data-aos="fade-up-left" data-aos-duration="1000">
                    <p className='font-bold text-cyan-500 mb-4'>INSTANT ACCESS</p>
                    <h2 className='text-3xl leading-normal mb-4'>Get up and running faster</h2>
                    <p className='text-sm text-gray-500 leading-loose mb-5'>Great candidates {"don't"} last long and neither does our implementation process. With immediate access to our system, you can start sourcing, receiving, and reviewing resumes with just a few clicks.</p>
                    <Link to="/demoPage">
                        <button
                            type="button"
                            className="inline-flex w-[165px] justify-center rounded hover:bg-cyan-500 px-5 py-2.5 text-center text-sm font-medium hover:text-white bg-white text-cyan-500 border-2 duration-500 border-cyan-500 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
                        >
                            See a demo
                        </button>
                    </Link>
                </div>
                {/* image column */}
                <div className="relative w-1/2 lg:pt-20" data-aos="fade-up-right" data-aos-duration="1000">
                    <img src={responsive} alt="" />
                    {/* <img src={background} className="shadow-2xl lg:h-full lg:w-1/2 lg:float-start" />
                    <img src={graph} className="absolute top-1/3 right-32 md:right-44 shadow-2xl h-2/4 max-w-[350px]" /> */}
                </div>
            </div>
            {/* team work banner */}
            <div className='bg-gradient-to-l from-gray-600 to-gray-600 h-[90vh] w-full relative' data-aos="fade-up" data-aos-duration="1000">
                <img src={team} alt="bgImage" className='w-full h-full object-cover absolute mix-blend-overlay' />
                <div className='max-w-screen-md mx-auto h-full flex justify-center items-center px-10'>
                    <div>
                        <h1 className='text-yellow-100 text-5xl md:text-6xl font-bold text-center mx-auto'>
                            We help build tomorrows greatest companies</h1>
                        <p className='text-gray-300 text-lg text-center font-light mt-5'>EasyRecriut is powerful, user-friendly recruitment software that scales your ability to find and hire great talent.</p>
                    </div>
                </div>
            </div>
            {/* part-3 */}

            <div className='flex flex-col-reverse justify-around gap-5 lg:flex-row-reverse items-center py-10'>
                {/* text colomn */}
                <div className='text-left lg:ml-20 max-w-sm' data-aos="fade-up-left" data-aos-duration="1000">
                    <p className='font-bold text-cyan-500 mb-4'>CUSTOMIZE YOUR HR TECH STACK</p>
                    <h2 className='text-3xl leading-normal mb-4'>Introducing the EasyRecruit Marketplace</h2>
                    <p className='text-sm text-gray-500 leading-loose mb-5'>Choose from best in class HR technology and service providers to optimize a variety of HR resource tasks while saving time and money.</p>
                    <Link to="/circular">
                        <button
                            type="button"
                            className="inline-flex w-[165px] justify-center rounded hover:bg-cyan-500 px-5 py-2.5 text-center text-sm font-medium hover:text-white bg-white text-cyan-500 border-2 duration-500 border-cyan-500 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
                        >
                            Visit Marketplace
                        </button>
                    </Link>
                </div>
                {/* image column */}
                <div className="relative w-1/2 lg:pt-20" data-aos="fade-up-right" data-aos-duration="1000">
                    <img src={background} className="shadow-2xl lg:h-full lg:w-1/2 lg:float-start" />
                    <img src={job} className="absolute rounded-3xl top-1/3 right-32 md:right-44 shadow-2xl h-2/4 max-w-[350px]" />
                </div>
            </div>
            {/* part-4 */}
            <div className='flex flex-col-reverse justify-around gap-5 lg:flex-row items-center bg-slate-100'>
                {/* text colomn */}
                <div className='text-left lg:ml-20 max-w-sm' data-aos="fade-up-right" data-aos-duration="1000">
                    <p className='font-bold text-cyan-500 mb-4'>CUSTOMER FIRST SUPPORT </p>
                    <h2 className='text-3xl leading-normal mb-4'>Robust support to get you up and running</h2>
                    <p className='text-sm text-gray-500 leading-loose mb-5'>Hiring and finding the right candidates is stressful, but your onboarding with JazzHR {"isn't"}. Our comprehensive learning center has all of the documentation you need to easily navigate our system. Plus and Pro users will also have access to our team during the implementation process. Need more help? Add dedicated account management to your plan at any time.</p>
                    <Link to="/contact">
                        <button
                            type="button"
                            className="inline-flex w-[165px] justify-center rounded hover:bg-cyan-500 px-5 py-2.5 text-center text-sm font-medium hover:text-white bg-white text-cyan-500 border-2 duration-500 border-cyan-500 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
                        >
                            Top rated support
                        </button>
                    </Link>
                </div>
                {/* image column */}
                <div className="relative w-1/2 lg:pt-20" data-aos="fade-up-left" data-aos-duration="1000">
                    <img src={support} className="shadow-2xl lg:h-full lg:w-1/2 lg:float-end" />
                    <img src={supports} className="absolute rounded-3xl top-1/3 right-32 md:right-44 shadow-2xl h-2/4 max-w-[350px]" />
                </div>
            </div>
            {/* <Footers></Footers> */}
            <Footers></Footers>
        </div>
    );
};

export default WhyEasyRecruit;