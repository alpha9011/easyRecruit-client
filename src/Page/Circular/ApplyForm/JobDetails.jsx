import { FaArrowRightLong } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";

// this is job details page( circular page theke details a click korele je details ta dekha jay)

const ApplyForm = () => {

    // all data for showing details in circulr (-=> jobpost => )see detail page
    // title
    // location
    // email
    // companyName
    // logo
    // aboutCompany
    // positionSummary
    // responsibilities
    // qualifications
    // education
    // benifits
    // jobType
    // experience
    // salary
    // postDate
    // deadline
    const {aboutCompany, benifits,education,positionSummary,qualifications,responsibilities, _id, companyName} = useLoaderData()
  console.log(companyName);
   
    return (
        <div className="px-10 ">
            {/* company details */}
            <div className=" ">
      
               <div className="">
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

               <Link to={`/applyform/${_id}`} className=" px-3 py-2 mt-5 bg-blue-700 text-white  rounded-md hover:bg-slate-800 hover:-translate-y-[2px] duration-75 cursor-pointer flex items-center w-fit gap-2">Apply Form <FaArrowRightLong></FaArrowRightLong> </Link>
              
               </div>


              
            </div>
        </div>
    )
}
export default ApplyForm;