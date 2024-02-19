import { useEffect, useState } from "react";
import JobCard from "./JobCard";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Helmet } from "react-helmet-async";
import CircularSwiper from "./CirculerSwiper/CirculerSwiper";
import Footers from "../../shared/Footer/Footers";
import CustomersSlider from "../Home/CustomersSlider/CustomersSlider";



const Circular = () => {
    const axiosPublic = useAxiosPublic()
    const [postJobs, setPostJob] = useState([])

    useEffect(() => {
        axiosPublic.get('/postjob')
            .then(res => {
                setPostJob(res.data)
            })
    }, [axiosPublic])
    console.log(postJobs);

    return (
        <div className="max-w-screen-xl mx-auto mb-8">
            <Helmet>
                <title>EasyRecruit || Circular</title>
            </Helmet>
            <div>
                <CircularSwiper></CircularSwiper>
            </div>
            <div className="py-10 rounded-sm bg-opacity-45"
            
                style={{
                    backgroundImage: `url('https://i.ibb.co/0mx2DWy/bg2.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backdropFilter:'blur(10px)'

                    
                }}>
                <div className="text-center mb-14">
                    <h1 className="text-6xl font-bold mb-3 text-blue-400">Featured Jobs</h1>
                    <p className="text-2xl">Find Your Dream Job From All our Latest Jobs</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-5">
                    {
                        postJobs.map(jobs => <JobCard key={jobs._id} jobs={jobs}></JobCard>)
                    }
                </div>
            </div>
            <div>
                <CustomersSlider></CustomersSlider>
                <Footers></Footers>
            </div>

        </div>
    );
};

export default Circular;