import { useLoaderData } from "react-router-dom";
import CandidateForm from "./CandidateForm";


const ApplyForm = () => {
   
    const {aboutCompany, benifits,companyName,education,positionSummary,qualifications,responsibilities,} = useLoaderData()
  
   
    return (
        <div className="px-10">
            {/* company details */}
            <div className="grid grid-cols-9 gap-5">
      
               <div className="col-span-4">
               <h2 className="font-semibold my-1 mt-3">About {companyName}</h2>
               <p className="text-slate-600 text-sm">{aboutCompany}</p>

               <h2 className="font-semibold my-1 mt-3">Postition summary</h2>
               <p className="text-slate-600 text-sm">{positionSummary}</p>

               <h2 className="font-semibold my-1 mt-3">Responsibilites</h2>
               <p className="text-slate-600 text-sm">{responsibilities}</p>

               <h2 className="font-semibold my-1 mt-3">Qualifications</h2>
               <p className="text-slate-600 text-sm">{qualifications}</p>

               <h2 className="font-semibold my-1 mt-3">Education & Experience</h2>
               <p className="text-slate-600 text-sm">{education}</p>

               <h2 className="font-semibold my-1 mt-3">Benifits</h2>
               <p className="text-slate-600 text-sm">{benifits}</p>
              
               </div>


                {/* apply form */}
                <div className="col-span-5">
                    <h1 className="font-semibold mb-5">Apply for this position</h1>
                    <CandidateForm></CandidateForm>

                </div>
            </div>
        </div>
    )
}
export default ApplyForm;