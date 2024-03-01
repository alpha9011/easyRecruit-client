import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import PriceCard from "./PriceCard";
import { Link } from "react-router-dom";
// import { GrFireball } from "react-icons/gr";


const AllPrices = () => {
    const axiosPublic = useAxiosPublic()
    const [packs, setPacks] = useState([])

    useEffect(() => {
        axiosPublic.get('/packs')
            .then(res => {
                setPacks(res.data)
            })
    }, [axiosPublic])
    console.log(packs);
    return (
        <div>
            <div className="w-full grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3 justify-center items-center max-w-screen-xl mx-auto">
                {
                    packs.map(packs => <PriceCard key={packs._id} packs={packs}></PriceCard>)
                }
            </div>
            {/* Buttons */}
            <div className="w-full flex flex-col justify-center items-center gap-5 my-16" data-aos="fade-up" data-aos-duration="1000">
                <p className="text-2xl">Let’s transform how you hire.</p>
                <div className="flex gap-3">
                    <Link to="/demoPage">
                        <button
                            type="button"
                            className="inline-flex w-[150px] justify-center rounded bg-cyan-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-white hover:text-cyan-500 border-2 duration-500 border-cyan-500 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
                        >
                            Request a Demo
                        </button>
                        
                    </Link>
                    <Link to="/register">
                        <button
                        type="button"
                            className="inline-flex w-[150px] justify-center rounded hover:bg-cyan-500 px-5 py-2.5 text-center text-sm font-medium hover:text-white bg-white text-cyan-500 border-2 duration-500 border-cyan-500 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
                        >
                            Try it Free
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AllPrices;