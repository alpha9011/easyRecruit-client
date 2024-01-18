
import { FaPenFancy, FaRegFileAlt, FaUser } from "react-icons/fa";

const HowToUse = () => {
  return (
    <div className="my-20 shadow p-10">
      <h3 className="text-5xl font-bold text-center mb-10">{"How it's work?"}</h3>

      <div className="flex flex-wrap gap-5  justify-center items-center  w-full">
         {/* create account */}
        <div className="  flex flex-col flex-grow justify-center items-center p-2 space-y-2 ">
          <div className="group flex justify-center items-center h-24 w-24 rounded-full bg-slate-200 hover:bg-slate-400 hover:text-slate-200 transition-colors duration-300 ease-in-out">
            <FaUser className="text-4xl text-slate-400 group-hover:text-slate-200" />
          </div>
          <h5 className="text-xl font-semibold">Create Account</h5>
          <p className="text-lg text-center w-80">
            It’s very easy to open an account and start your journey.
          </p>
        </div>
        {/* profile */}
        <div className="  flex flex-col flex-grow justify-center items-center p-2 space-y-2 ">
          <div className="group flex justify-center items-center h-24 w-24 rounded-full bg-slate-200 hover:bg-slate-400 hover:text-slate-200 transition-colors duration-300 ease-in-out">
            <FaRegFileAlt className="text-4xl text-slate-400 group-hover:text-slate-200" />
          </div>
          <h5 className="text-xl font-semibold">Complete your profile</h5>
          <p className="text-lg text-center w-80">
          Complete your profile with all the info to get attention of client.
          </p>
        </div>
        {/* apply job */}
        <div className="  flex flex-col flex-grow justify-center items-center p-2 space-y-2 ">
          <div className="group flex justify-center items-center h-24 w-24 rounded-full bg-slate-200 hover:bg-slate-400 hover:text-slate-200 transition-colors duration-300 ease-in-out">
            <FaPenFancy className="text-4xl text-slate-400 group-hover:text-slate-200" />
          </div>
          <h5 className="text-xl font-semibold">Apply job or hire</h5>
          <p className="text-lg text-center w-80">
          Apply & get your preferable jobs with all the requirements and get it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowToUse;
