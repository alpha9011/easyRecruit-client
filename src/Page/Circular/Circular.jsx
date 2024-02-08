import { useEffect, useState } from "react";
import JobCard from "./JobCard";
import useAxiosPublic from "../../Hooks/useAxiosPublic";



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
        <div className="max-w-screen-xl mx-auto">
            <h1 className="text-6xl font-bold mb-10 text-center">Latest Job</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-5">
                {
                    postJobs.map(jobs => <JobCard key={jobs._id} jobs={jobs}></JobCard>)
                }
            </div>

        </div>
    );
};

export default Circular;