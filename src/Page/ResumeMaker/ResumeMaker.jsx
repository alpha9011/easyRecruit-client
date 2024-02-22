
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import ResumePdf from './ResumePdf';
import { PDFDownloadLink } from "@react-pdf/renderer";


const ResumeMaker = () => {
  const [submittedResume, setSubmittedResume] = useState(null);
  // const user = useAuth();

  const [resumeData, setResumeData] = useState({
    personalInfo: {
      name: '',
      email: '',
      phone: '',
      jobDescription: ''
    },
    education: {
      degree: '',
      school: '',
      graduationYear: '',
    },
    workExperience: {
      position: '',
      company: '',
      startDate: '',
      endDate: '',
    },
    skills: {
      programming: '',
      communication: '',
      teamwork: '',
    },
  });

  const handleInputChange = (section, field, value) => {
    setResumeData((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [field]: value,
      },
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();


    await axios.post('http://localhost:5000/resumes', resumeData)
      .then(res => {
        console.log(res.data)
      })
    setSubmittedResume(resumeData);

  };




  return (
    <div className="max-w-7xl mx-auto">

      <div className="flex justify-between mt-8 ">
        <h2 className="text-3xl font-bold">Make Your Resume Here...</h2>
        <Link className="justify-end text-right   px-4 py-2 bg-gray-300" to={'/allResume'}> See all Resume </Link>
      </div>
      <div >

        {/* form  */}
        <form onSubmit={handleSubmit}>

          <div className="grid grid-cols-2 space-y-6 mt-12">

            <div>
              <label>Name:</label> <br></br>
              <input
                className="border w-1/2 px-4 py-2 mt-2"
                type="text"
                value={resumeData.personalInfo.name}
                onChange={(e) => handleInputChange('personalInfo', 'name', e.target.value)}
              />
            </div>

            <div>
              <label>Job Title:</label> <br></br>
              <input
                className="border w-1/2 px-4 py-2 mt-2"
                type="text"
                value={resumeData.personalInfo.job}
                onChange={(e) => handleInputChange('personalInfo', 'job', e.target.value)}
              />
            </div>


            <div>
              <label>Vision:</label> <br></br>
              <input
                className="border w-1/2 px-4 py-6 mt-2"
                type="text"
                value={resumeData.personalInfo.jobDescription}
                onChange={(e) => handleInputChange('personalInfo', 'jobDescription', e.target.value)}
              />
            </div>

            <div>
              <label>Email:</label> <br></br>
              <input
                className="border w-1/2 px-4 py-2 mt-2"
                type="email"
                value={resumeData.personalInfo.email}
                onChange={(e) => handleInputChange('personalInfo', 'email', e.target.value)}
              />
            </div>

            <div>
              <label>Phone:</label> <br></br>
              <input
                className="border w-1/2 px-4 py-2 mt-2"
                type="tel"
                value={resumeData.personalInfo.phone}
                onChange={(e) => handleInputChange('personalInfo', 'phone', e.target.value)}
              />
            </div>


            <div>
              <label>Degree:</label> <br></br>
              <input
                className="border w-1/2 px-4 py-2 mt-2"
                type="text"
                value={resumeData.education.degree}
                onChange={(e) => handleInputChange('education', 'degree', e.target.value)}
              />
            </div>



            <div>
              <label>University:</label> <br></br>
              <input
                className="border w-1/2 px-4 py-2 mt-2"
                type="text"
                value={resumeData.education.school}
                onChange={(e) => handleInputChange('education', 'school', e.target.value)}
              />
            </div>

            <div>
              <label>Graduation Year:</label> <br></br>
              <input
                className="border w-1/2 px-4 py-2 mt-2"
                type="date"
                value={resumeData.education.graduationYear}
                onChange={(e) => handleInputChange('education', 'graduationYear', e.target.value)}
              />
            </div>

            <div>
              <label>Position:</label> <br></br>
              <input
                className="border w-1/2 px-4 py-2 mt-2"
                type="text"
                value={resumeData.workExperience.position}
                onChange={(e) => handleInputChange('workExperience', 'position', e.target.value)}
              />
            </div>

            <div>
              <label>Company:</label> <br></br>
              <input
                className="border w-1/2 px-4 py-2 mt-2"
                type="text"
                value={resumeData.workExperience.company}
                onChange={(e) => handleInputChange('workExperience', 'company', e.target.value)}
              />
            </div>

            <div>
              <label>Start Date:</label> <br></br>
              <input
                className="border w-1/2 px-4 py-2 mt-2"
                type="date"

                value={resumeData.workExperience.startDate}
                onChange={(e) => handleInputChange('workExperience', 'startDate', e.target.value)}
              />
            </div>

            <div>
              <label>End Date:</label> <br></br>
              <input
                className="border w-1/2 px-4 py-2 mt-2"
                type="date"

                value={resumeData.workExperience.endDate}
                onChange={(e) => handleInputChange('workExperience', 'endDate', e.target.value)}
              />
            </div>

            <div>
              <label>Programming Skills:</label> <br></br>
              <input
                className="border w-1/2 px-4 py-2 mt-2"
                type="text"
                value={resumeData.skills.programming}
                onChange={(e) => handleInputChange('skills', 'programming', e.target.value)}
              />
            </div>

            <div>
              <label>Communication Skills:</label> <br></br>
              <input
                className="border w-1/2 px-4 py-2 mt-2"
                type="text"
                value={resumeData.skills.communication}
                onChange={(e) => handleInputChange('skills', 'communication', e.target.value)}
              />
            </div>

            <div>
              <label>Teamwork Skills:</label> <br></br>
              <input
                className="border w-1/2 px-4 py-5 mt-2"
                type="text"
                value={resumeData.skills.teamwork}
                onChange={(e) => handleInputChange('skills', 'teamwork', e.target.value)}
              />
            </div>
          </div>


          <button className="px-4 py-2 bg-gray-400 my-4 " type="submit">Submit Resume</button>
        </form>
      </div>

      {/* show submitted data  */}

      {submittedResume && (

        <div className="max-w-4xl mx-auto  p-24  ">
          <h2 className="text-3xl font-bold"> Demo Resume____ </h2>
          <div className="">

            <div className="">

              <div>
                <p className="text-3xl font-bold">{submittedResume?.personalInfo.name}</p>
                <p className="font-bold"> {submittedResume?.personalInfo.job}</p>
              </div>

              <div className="flex justify-between">
                <p><span className="font-bold">Email:</span> {submittedResume?.personalInfo.email}</p>
                <p><span className="font-bold">Phone:</span> {submittedResume?.personalInfo.phone}</p>
              </div>

              <div className="divider"></div>

              <p><span className="text-2xl font-bold">Vision:</span> <br /> {submittedResume?.personalInfo.jobDescription}</p>


              <div className="flex justify-between">
                <div className="">
                  <p className="text-2xl font-bold mt-3">Education : </p>
                  <p><span className="font-bold">Degree:</span> {submittedResume?.education.degree}</p>
                  <p><span className="font-bold">School:</span> {submittedResume?.education.school}</p>
                  <p><span className="font-bold">Graduation Year:</span> {submittedResume?.education.graduationYear}</p>
                </div>
                <div>
                  <p className="text-2xl font-bold mt-3">Experience : </p>
                  <p><span className="font-bold">Position:</span> {submittedResume?.workExperience.position}</p>
                  <p><span className="font-bold">Company:</span> {submittedResume?.workExperience.company}</p>
                  <p><span className="font-bold">Start Date:</span> {submittedResume?.workExperience.startDate}</p>
                  <p><span className="font-bold">End Date:</span>  {submittedResume?.workExperience.endDate}</p>
                </div>
              </div>


              <div className="flex justify-between">
                <div>
                  <p className="text-2xl font-bold mt-3">Skills :</p>
                  <p><span className="font-bold">Programming Skills:</span> {submittedResume?.skills.programming}</p>
                  <p><span className="font-bold">Communication Skills:</span> {submittedResume?.skills.communication}</p>
                  <p><span className="font-bold">Teamwork Skills:</span> {submittedResume?.skills.teamwork}</p>
                </div>

                <div>
                  <p className="text-2xl font-bold mt-3">Language :</p>
                  <p > <span className="font-bold">Native: </span> Bangla</p>
                  <p ><span className="font-bold">Foreign: </span>Bangla</p>
                </div>
              </div>

            </div>
          </div>


          <div className="my-4">

            <PDFDownloadLink document={<ResumePdf resumeData={submittedResume} />} filename="FORM">
              {({ loading }) => (loading ? <button>Loading Document...</button> : <button className="px-4 py-2 bg-gray-400">Download PDF</button>)}
            </PDFDownloadLink>

          </div>

        </div>




      )}





    </div>
  );
};

export default ResumeMaker;
