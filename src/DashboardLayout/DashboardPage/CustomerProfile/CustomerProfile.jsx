import { useContext } from "react";
import { FaEdit } from "react-icons/fa";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const CustomerProfile = () => {
    // this data comes from firebase but here need data from database
    const { user } = useContext(AuthContext);
    // console.log(user);
    const {
        email,
        number,
        company,
        jpLimit,
        userRole } = user;
    return (
        <div>

            <div className="w-full max-w-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="flex justify-end px-4 pt-4">
                    {/* need update api and put method  */}
                    <button title="Edit Profile" className=""><FaEdit></FaEdit></button>
                </div>
                <div className="flex flex-col items-center pb-10">
                    <img className="w-24 h-24 mb-3 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105" src={user?.photoURL} alt="user image" />
                    <h5 className="mb-1 text-xl font-semibold dark:text-white transition duration-300 ease-in-out transform hover:scale-105 bg-gradient-to-r from-pink-700 to-purple-700 inline-block text-transparent bg-clip-text">{user?.displayName}</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400 transition duration-300 ease-in-out transform hover:scale-105">{company}</span>

                </div>
                {/* users data from database */}
                <div className="grid grid-cols-2 gap-10 px-10 justify-center items-center text-xl font-semibold">
                    <p>Email: <span className="bg-gradient-to-r from-blue-500 to-blue-900 inline-block text-transparent bg-clip-text">{email}</span></p>
                    <p>Phone Number:<span className="bg-gradient-to-r from-blue-500 to-blue-900 inline-block text-transparent bg-clip-text">{number}</span></p>
                    <p>Job Post Limit:<span className="bg-gradient-to-r from-blue-500 to-blue-900 inline-block text-transparent bg-clip-text">{jpLimit}</span></p>
                    <p>User Priority:<span className="bg-gradient-to-r from-blue-500 to-blue-900 inline-block text-transparent bg-clip-text">{userRole}</span></p>
                </div>

                {/* static card for now, its show dynamically by getting users data */}

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10 px-6 text-center mb-8">
                    <div className="bg-slate-200 rounded-lg shadow-md p-4 transition duration-300 ease-in-out transform hover:scale-105">
                        <h3 className="text-lg font-semibold mb-2">Posted Job</h3>
                        <p className="text-gray-600">12</p>
                    </div>
                    <div className="bg-slate-200 rounded-lg shadow-md p-4 transition duration-300 ease-in-out transform hover:scale-105">
                        <h3 className="text-lg font-semibold mb-2">Hired candidates</h3>
                        <p className="text-gray-600">15</p>
                    </div>
                    <div className="bg-slate-200 rounded-lg shadow-md p-4 transition duration-300 ease-in-out transform hover:scale-105">
                        <h3 className="text-lg font-semibold mb-2">Remaining Vacancy</h3>
                        <p className="text-gray-600">05</p>
                    </div>
                    <div className="bg-slate-200 rounded-lg shadow-md p-4 transition duration-300 ease-in-out transform hover:scale-105">
                        <h3 className="text-lg font-semibold mb-2">Profile Stat</h3>
                        <p className="text-gray-600">Good</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CustomerProfile;

