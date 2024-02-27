import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const AllResume = () => {

    const axiosPublic = useAxiosPublic()

  const { data: resumes = [] } = useQuery({
    queryKey: ['resume'],
    queryFn: async () => {
      const res = await axiosPublic.get(`/resumes`)
      const resume = res.data;

      return resume;
    }
  })

  console.log(resumes);

    return (
        <div>
           {
            resumes.map(item => <div key={item._id}>
                <div  className="max-w-4xl mx-auto  p-24  ">
          <div className="">

            <div className="">

              <div>
                <p className="text-3xl font-bold">{item.personalInfo.name}</p>
                <p className="font-bold"> {item.personalInfo.job}</p>
              </div>

              <div className="flex justify-between">
                <p><span className="font-bold">Email:</span> {item.personalInfo.email}</p>
                <p><span className="font-bold">Phone:</span> {item.personalInfo.phone}</p>
              </div>

              <div className="divider"></div>

              <p><span className="text-2xl font-bold">Vision:</span> <br /> {item.personalInfo.jobDescription}</p>


              <div className="flex justify-between">
                <div className="">
                  <p className="text-2xl font-bold mt-3">Education : </p>
                  <p><span className="font-bold">Degree:</span> {item.education.degree}</p>
                  <p><span className="font-bold">School:</span> {item.education.school}</p>
                  <p><span className="font-bold">Graduation Year:</span> {item.education.graduationYear}</p>
                </div>
                <div>
                  <p className="text-2xl font-bold mt-3">Experience : </p>
                  <p><span className="font-bold">Position:</span> {item.workExperience.position}</p>
                  <p><span className="font-bold">Company:</span> {item.workExperience.company}</p>
                  <p><span className="font-bold">Start Date:</span> {item.workExperience.startDate}</p>
                  <p><span className="font-bold">End Date:</span>  {item.workExperience.endDate}</p>
                </div>
              </div>


             <div className="flex justify-between">
             <div>
                <p className="text-2xl font-bold mt-3">Skills :</p>
                <p><span className="font-bold">Programming Skills:</span> {item.skills.programming}</p>
                <p><span className="font-bold">Communication Skills:</span> {item.skills.communication}</p>
                <p><span className="font-bold">Teamwork Skills:</span> {item.skills.teamwork}</p>
              </div>

              <div>
                <p className="text-2xl font-bold mt-3">Language :</p>
                <p > <span className="font-bold">Native: </span> Bangla</p>
                <p ><span className="font-bold">Foreign: </span>Bangla</p>
              </div>
             </div>

            </div>
          </div>









        </div>

            </div>)
           }
        </div>
    );
};

export default AllResume;