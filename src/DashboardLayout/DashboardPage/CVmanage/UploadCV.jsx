import { useState, useEffect } from "react";
// import axios from "axios";

const UploadCV = () => {
    const [pdfUrl, setPdfUrl] = useState(""); // State to store PDF URL
    const [showResume, setShowResume] = useState(false); // State to toggle resume visibility

    console.log(pdfUrl);
    useEffect(() => {
        fetch("/candidate.json")
          .then((res) => res.json())
          .then((data) => {
              console.log("Fetched data:", data);
              setPdfUrl(data.resumeUrl);
              console.log(setPdfUrl);
          })
          .catch((error) => {
              console.error("Error fetching candidate data:", error);
          });
    }, []);

    // useEffect(() => {
    //     // Fetch candidate data from JSON file
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get("/candidate.json");
    //             const { resumeUrl } = response.data;
    //             setPdfUrl(resumeUrl);
    //         } catch (error) {
    //             console.error("Error fetching candidate data:", error);
    //         }
    //     };

    //     fetchData();
    // }, []);

    const toggleResume = () => {
        setShowResume(!showResume);
    };

    return (
        <div>
            <h1 className="text-4xl mb-4">My Resume</h1>
            <div className="bg-white border-dashed p-16 rounded-lg">
                
                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        onClick={toggleResume}
                    >
                        {showResume ? "Hide Resume" : "See Resume"}
                    </button>
                    {showResume && pdfUrl && (
                        <embed src={pdfUrl} type="application/pdf" width="100%" height="600" />
                    )}
                
            </div>
        </div>
    );
};

export default UploadCV;


