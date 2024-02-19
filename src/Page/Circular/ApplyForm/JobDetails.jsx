import { Link,   useLoaderData } from "react-router-dom";
import PrimaryButton from "../../../shared/PrimaryButton/PrimaryButton";

// this is job details page( circular page theke details a click korele je details ta dekha jay)

const ApplyForm = () => {

    const { aboutCompany,title , benifits,location, companyName,salary, education, positionSummary, qualifications, responsibilities, _id } = useLoaderData()

    return (
        <div className="p-6 md:10 lg:px-40 ">
            {/* company details */}

            <div className="text-center">
                <h3 className="text-3xl font-semibold mb-2">{title}</h3>
                <h3>{companyName}</h3>
            </div>

                        <div className=" font-semibold flex justify-center   md:justify-end lg:justify-end">
                            <p>{location} <br /> <span>Deadline: 30th April, 2024</span></p>
                        </div>

                    <div className="">
                    <h2 className="font-semibold text-xl my-2 mt-5">About {companyName}</h2>
                    <p className="text-slate-600  text-sm">{aboutCompany}</p>

                    <h2 className="font-semibold text-xl my-2 mt-5">Postition summary</h2>
                    <p className="text-slate-600  text-sm">{positionSummary}</p>

                    <h2 className="font-semibold text-xl my-2 mt-5">Responsibilites</h2>
                    <p className="text-slate-600  text-sm">{responsibilities}</p>

                    <h2 className="font-semibold text-xl my-2 mt-5">Qualifications</h2>
                    <p className="text-slate-600  text-sm">{qualifications}</p>

                    <h2 className="font-semibold text-xl my-2 mt-5">Education & Experience</h2>
                    <p className="text-slate-600  text-sm">{education}</p>

                    <h2 className="font-semibold text-xl my-2 mt-5">Expected job salary</h2>
                    <p className="text-slate-600  text-sm">{salary}k</p>

                    <h2 className="font-semibold text-xl my-2 mt-5">Benifits</h2>
                    <p className="text-slate-600  text-sm">{benifits}</p>
                    </div>

                    

                    <Link to={`/applyform/${_id}`}  className="flex mt-4 justify-left">
            <PrimaryButton buttonText="Apply job"></PrimaryButton>
          </Link>

                



            </div>
    )
}
export default ApplyForm;