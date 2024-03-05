import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const CountOnScroll = () => {
    const [counterOn, setCounterOn] = useState(false)
    return (
        <div>
            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                <div className="w-52 h-64 border">
                    <h1 className="text-5xl font-bold">
                        {
                            counterOn &&
                            <CountUp start={0} end={50} duration={5} delay={0}></CountUp>
                        }+
                    </h1>

                </div>
            </ScrollTrigger>
        </div>
    );
};

export default CountOnScroll;