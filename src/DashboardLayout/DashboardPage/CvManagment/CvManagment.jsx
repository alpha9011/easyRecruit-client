import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const CvManagement = () => {
    const applicants = useLoaderData()
    const {lastAcademy, skills, language, country, experience,jobEducation,jobSkills,jobLanguage,jobCountry,jobExperience,jobsalary} = applicants || {}
  
    //   database theke single candidate and job er just requirements gula ante hobe 
    const [jobRequirements, setJobRequirements] = useState({
        education:jobEducation,
        skills: jobSkills,
        jobExperience: jobExperience,
        country:jobCountry,
        language: jobLanguage,
    });

    const [candidateProfile, setCandidateProfile] = useState({
        education:lastAcademy,
        skills: skills,
        jobExperience: experience,
        country:country,
        language: language,
    });

    const [matchingResult, setMatchingResult] = useState({
        education: false,
        skills: false,
        jobExperience: false,
        country: false,
        language: false,
    });


    const handleCompare = () => {
        // Perform comparison logic here
        // For example, compare job requirements with candidate profile
        // You can customize this logic based on your requirements
        const newMatchingResult = {
            education: jobRequirements.education === candidateProfile.education,
            skills: jobRequirements.skills <= candidateProfile.skills,
            jobExperience: jobRequirements.jobExperience === candidateProfile.jobExperience,
            country: jobRequirements.country === candidateProfile.country,
            language: jobRequirements.language === candidateProfile.language,
        };

        setMatchingResult(newMatchingResult);
        console.log("Matching Result:", newMatchingResult);
    };

    // Get the count of matched requirements
    const matchedCount = Object.values(matchingResult).filter(value => value).length;

    // Get the status based on matched count
    const getStatus = () => {
        if (matchedCount >= 4) return "Perfect Matching";
        if (matchedCount === 3) return "Moderate Matching";
        return "Not Qualified";
    };

    const handleAction = (selected) => {
        if (selected) {
            // Logic for selecting candidate
            // For example, display a success message
            Swal.fire('Candidate Selected!', '', 'success');
        } else {
            // Logic for rejecting candidate
            // For example, display a warning message
            Swal.fire('Candidate Rejected!', '', 'warning');
        }
    };

    // Function to get matching status text
    const getMatchingStatusText = (isMatched) => (isMatched ? "Matched" : "Not Matched");


    return (
        <div className="container mx-auto py-8 text-black w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

            <h2 className="text-center font-semibold mb-10 text-3xl">CV Review of { }candidate name</h2>

            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-2 ml-8">
                {/* Job Requirements Box */}
                <div className="w-full max-w-sm bg-sky-200 p-8 border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700  hover:bg-black hover:text-white">
                    <h2 className="text-2xl font-semibold mb-4 text-center text-red-600 shadow-md ">Job Requirements</h2>
                    <div className="font-bold text-lg">
                        <p>Education:{" "}<span className="font-semibold text-green-600">{jobRequirements.education}</span></p>
                        <p>Skills:{" "}<span className="font-semibold text-green-600">{jobRequirements.skills} </span> </p>
                        <p> Job Experience:{" "} <span className="font-semibold text-green-600">{jobRequirements.jobExperience}</span></p>
                        <p> Country:{" "}<span className="font-semibold text-green-600">{jobRequirements.country}</span></p>
                        <p>Language:{" "}<span className="font-semibold text-green-600">{jobRequirements.language}</span></p>
                    </div>
                </div>

                {/* Candidate Profile Box */}
                <div className="w-full max-w-sm bg-gray-200 border border-gray-200 rounded-lg  hover:bg-black hover:text-white shadow-lg p-8 dark:bg-gray-800 dark:border-gray-700">
                    <h2 className="text-2xl font-semibold mb-4 text-center text-blue-600  shadow-md">
                        Candidate Profile
                    </h2>
                    <div className="font-bold text-lg">
                        <p className="">Education:{" "}<span className="font-semibold text-blue-600">{candidateProfile.education}</span></p>
                        <p>Skills:{" "}<span className="font-semibold text-blue-600">{candidateProfile.skills}</span></p>
                        <p>Job Experience:{" "}<span className="font-semibold text-blue-600">{candidateProfile.jobExperience}</span></p>
                        <p>Country:{" "}<span className="font-semibold text-blue-600">{candidateProfile.country}</span></p>
                        <p>Language:{" "}<span className="font-semibold text-blue-600">{candidateProfile.language}</span></p>
                    </div>
                </div>
            </div>

            {/* Compare Button */}
            <div className="mt-8 items-center justify-center flex">
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    onClick={handleCompare}
                >
                    Compare
                </button>
            </div>

            {/* Result card with selected and rejected button */}
            <div className=" hover:bg-black hover:text-white mt-6 mx-auto items-center max-w-sm bg-sky-100 p-5 border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
                <h2 className="text-2xl font-semibold mb-4 text-center">Matching Result</h2>

                <div className="font-bold text-lg">
                    <p>
                        Education:{" "}
                        <span className={`font-semibold ${matchingResult.education ? "text-green-600" : "text-red-600"}`}>
                            {getMatchingStatusText(matchingResult.education)}
                        </span>
                    </p>
                    <p>
                        Skills:{" "}
                        <span className={`font-semibold ${matchingResult.skills ? "text-green-600" : "text-red-600"}`}>
                            {getMatchingStatusText(matchingResult.skills)}
                        </span>
                    </p>
                    <p>
                        Job Experience:{" "}
                        <span className={`font-semibold ${matchingResult.jobExperience ? "text-green-600" : "text-red-600"}`}>
                            {getMatchingStatusText(matchingResult.jobExperience)}
                        </span>
                    </p>
                    <p>
                        Country:{" "}
                        <span className={`font-semibold ${matchingResult.country ? "text-green-600" : "text-red-600"}`}>
                            {getMatchingStatusText(matchingResult.country)}
                        </span>
                    </p>
                    <p>
                        Language:{" "}
                        <span className={`font-semibold ${matchingResult.language ? "text-green-600" : "text-red-600"}`}>
                            {getMatchingStatusText(matchingResult.language)}
                        </span>
                    </p>
                </div>

                {/* status */}

                <p className="text-center font-semibold text-xl m-5">Status: {getStatus()}</p>


                {/* selected and rejected button */}
                <div className="flex justify-center mt-4">
                    <button
                        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 mr-4"
                        onClick={() => handleAction(true)}
                    >
                        Select
                    </button>
                    <button
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                        onClick={() => handleAction(false)}
                    >
                        Reject
                    </button>
                </div>
            </div>

        </div>
    );
};

export default CvManagement;
