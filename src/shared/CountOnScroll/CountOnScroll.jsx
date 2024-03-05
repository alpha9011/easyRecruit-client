import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import "./countOnScroll.css"

const CountOnScroll = () => {
    const [counterOn, setCounterOn] = useState(false)
    return (
        <div>
            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                <div className="counters text-center bg-[#4193ff] text-[#fff] max-w-screen-xl mx-auto rounded-lg shadow-xl" data-aos="fade-up" data-aos-duration="1000">
                    <div>
                        {/* 1 */}
                        <div className="font-bold relative counter">
                            <h1 className="mb-[0.4em] text-6xl">
                                {
                                    counterOn &&
                                    <CountUp start={0} end={560} duration={5} delay={0}></CountUp>
                                }+
                            </h1>
                            <h3 className="text-3xl">Registerd User</h3>
                        </div>
                        {/* 2 */}
                        <div className="font-bold relative counter">
                            <h1 className="mb-[0.4em] text-6xl">
                                {
                                    counterOn &&
                                    <CountUp start={0} end={935} duration={5} delay={0}></CountUp>
                                }+
                            </h1>
                            <h3 className="text-3xl">Job Post</h3>
                        </div>
                        {/* 3 */}
                        <div className="font-bold relative counter">
                            <h1 className="mb-[0.4em] text-6xl">
                                {
                                    counterOn &&
                                    <CountUp start={0} end={750} duration={5} delay={0}></CountUp>
                                }+
                            </h1>
                            <h3 className="text-3xl">Hired Canidates</h3>
                        </div>
                        {/* 4 */}
                        <div className="font-bold relative counter">
                            <h1 className="mb-[0.4em] text-6xl">
                                {
                                    counterOn &&
                                    <CountUp start={0} end={87} duration={5} delay={0}></CountUp>
                                }%
                            </h1>
                            <h3 className="text-3xl">Hire Rate</h3>
                        </div>
                    </div>
                </div>
            </ScrollTrigger>
        </div>
    );
};

export default CountOnScroll;