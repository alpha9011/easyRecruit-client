import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import MyJobCard from "./MyJobCard";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "flowbite-react";


const MyJobs = () => {
    const { user } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
 
    const {isLoading, refetch,  data: myJobs = [] } = useQuery({
        queryKey: ['jobs'],
        queryFn: async () => {
            const res = await axiosPublic.get('/postjob')
            const alljobs = res.data
           const jobs = alljobs.filter(job => job?.email === user?.email)
            return jobs
        }
    })
    
    if (isLoading) {
        return <div className=" h-screen flex items-center justify-center">
          <Spinner aria-label="Large spinner example" size="lg" />
        </div>
      }
    console.log(myJobs);
    return (
        <div>
            {
                myJobs.length > 0 ? 
                <div className="grid grid-cols-3 gap-6">
                {
                    myJobs.map(myjob => <MyJobCard key={myjob._id} myjob={myjob} refetch={refetch}></MyJobCard>)
                }
            </div> : 
            <div>
                <h1>You do not have any job post yet</h1>
            </div>
            }
        </div>
    );
};

export default MyJobs;