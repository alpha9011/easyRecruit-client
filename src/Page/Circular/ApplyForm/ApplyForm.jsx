import { FaArrowRightLong } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";

const ApplyForm = () => {
  const {
    aboutCompany,
    benifits,
    companyName,
    education,
    positionSummary,
    qualifications,
    responsibilities,
    _id,
  } = useLoaderData();

   
  return (
    <div className="px-10">
      {/* company details */}
      <div className=" max-w-screen-md  mx-auto shadow p-5">
        <h2 className="font-semibold my-1 mt-3">About {companyName}</h2>
        <p className="text-slate-600 text-sm text-justify">{aboutCompany}</p>

        <h2 className="font-semibold my-1 mt-3">Postition summary</h2>
        <p className="text-slate-600 text-sm text-justify">{positionSummary}</p>

        <h2 className="font-semibold my-1 mt-3">Responsibilites</h2>
        <p className="text-slate-600 text-sm text-justify">
          {responsibilities}
        </p>

        <h2 className="font-semibold my-1 mt-3">Qualifications</h2>
        <p className="text-slate-600 text-sm text-justify">{qualifications}</p>

        <h2 className="font-semibold my-1 mt-3">Education & Experience</h2>
        <p className="text-slate-600 text-sm text-justify">{education}</p>

        <h2 className="font-semibold my-1 mt-3">Benifits</h2>
        <p className="text-slate-600 text-sm text-justify">{benifits}</p>

        <Link
          to={`/applyform/${_id}`}
          className=" px-3 py-2 mt-5 bg-blue-700 text-white  rounded-md hover:bg-slate-800 hover:-translate-y-[2px] duration-75 cursor-pointer flex items-center w-fit gap-2 "
        >
          Apply Form <FaArrowRightLong></FaArrowRightLong>{" "}
        </Link>
      </div>
    </div>
  );
};
export default ApplyForm;
