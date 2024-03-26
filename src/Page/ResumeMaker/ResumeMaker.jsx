
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import ResumePdf from './ResumePdf';
import { PDFDownloadLink } from "@react-pdf/renderer";
import Swal from "sweetalert2";


const ResumeMaker = () => {
  const [submittedResume, setSubmittedResume] = useState(null);

  const [resumeData, setResumeData] = useState({
    personalInfo: {
      name: '',
      email: '',
      phone: '',
      jobDescription: ''
    },
    education: {
      degree: '',
      college: '',
      university : '',
      graduationYear: '',
    },
    workExperience: {
      position: '',
      experience: '',
      title:'',
      company: '',
      startDate: '',
      endDate: '',
    },
    skills: {
      programming: '',
      project: '',
      projectDetails: '',
      communication: '',
      teamwork: '',
    },
    language: {
      native: '',
      foreign: '',
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


    await axios.post('https://easy-recruit-server.vercel.app/resumes', resumeData)
      .then(res => {

        // console.log(res.data)

        if(res.data.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Resume created successfully || See Demo Resume in below",
            showConfirmButton: false,
            timer: 1500
        });
        }
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
        <form className="max-w-6xl mx-auto" onSubmit={handleSubmit}>

          <div className="mt-12 ">

            <div>
              <h2 className="text-2xl font-bold"> Personal Info : </h2>

              <label>Name:</label> <br></br>
              <input
                className="border w-full px-4 py-2 mt-2"
                type="text"
               placeholder="eg. John Doe" value={resumeData.personalInfo.name}
                onChange={(e) => handleInputChange('personalInfo', 'name', e.target.value)} required
              />
            </div>

            <div>
              <label>Designation:</label> <br></br>
              <input
                className="border w-full px-4 py-2 mt-2"
                type="text"
               placeholder="eg. Frontend Developer" value={resumeData.personalInfo.job}
                onChange={(e) => handleInputChange('personalInfo', 'job', e.target.value)} required
              />
            </div>




            <div>
              <label>Email:</label> <br></br>
              <input
                className="border w-full px-4 py-2 mt-2"
                type="email"
               placeholder="john123@gmail.com" value={resumeData.personalInfo.email}
                onChange={(e) => handleInputChange('personalInfo', 'email', e.target.value)} required
              />
            </div>

            <div>
              <label>Phone:</label> <br></br>
              <input
                className="border w-full px-4 py-2 mt-2"
                type="tel"
               placeholder="017xxxxxxxx" value={resumeData.personalInfo.phone}
                onChange={(e) => handleInputChange('personalInfo', 'phone', e.target.value)} required
              />
            </div>


            <div>
              <h2 className="text-2xl font-bold mt-8"> Vision : </h2>
              <textarea
                cols="10" rows="2"
                className="border  w-full px-4 py-6 mt-2"
                type="text"
               placeholder="eg. As a frontend developer, my vision is to create seamless and delightful user experiences that not only meet but exceed user expectations. I aim to stay at the forefront of emerging technologies and design trends to deliver visually appealing and highly performant web applications...." value={resumeData.personalInfo.jobDescription}
                onChange={(e) => handleInputChange('personalInfo', 'jobDescription', e.target.value)} required
              ></textarea>
            </div>

            <br />

            <div>
              <h2 className="text-2xl font-bold"> Education : </h2>
              <label>Degree:</label> <br></br>
              <input
                className="border w-full px-4 py-2 mt-2"
                type="text"
               placeholder="eg. BSc" value={resumeData.education.degree}
                onChange={(e) => handleInputChange('education', 'degree', e.target.value)} required
              />
            </div>

            



            <div>
              <label>College:</label> <br></br>
              <input
                className="border w-full px-4 py-2 mt-2"
                type="text"
               placeholder="eg. Dhaka College" value={resumeData.education.school}
                onChange={(e) => handleInputChange('education', 'college', e.target.value)} required
              />
            </div>

            <div>
              <label>University:</label> <br></br>
              <input
                className="border w-full px-4 py-2 mt-2"
                type="text"
               placeholder="eg. Dhaka University" value={resumeData.education.school}
                onChange={(e) => handleInputChange('education', 'university', e.target.value)} required
              />
            </div>

            <div>
              <label>Graduation Year:</label> <br></br>
              <input
                className="border w-full px-4 py-2 mt-3 mb-8"
                type="number"
               placeholder="2025" value={resumeData.education.graduationYear}
                onChange={(e) => handleInputChange('education', 'graduationYear', e.target.value)} required
              />
            </div>


            <div>
            <h2 className="text-2xl font-bold"> Experience : </h2>
              
              <label>Position:</label> <br></br>
              <input
                className="border w-full px-4 py-2 mt-2"
                type="text"
               placeholder="eg. Frontend Developer" value={resumeData.workExperience.position}
                onChange={(e) => handleInputChange('workExperience', 'position', e.target.value)} required
              />
            </div>

            <div>
            <label>Title:</label> <br></br>
              <input
                className="border w-full px-4 py-2 mt-2"
                type="text"
               placeholder="eg. junior/Senior" value={resumeData.education.title}
                onChange={(e) => handleInputChange('education', 'title', e.target.value)} required
              />
            </div>


            <div >
              <label >Experience Field:</label> <br></br>
              <textarea
              cols="10" rows="4"
                className="border w-full px-4 py-2 mt-2"
                type="text"
               placeholder="eg. Experience with CSS preprocessors such as Sass or Less. Responsive design and mobile development. Strong problem-solving and debugging skills. Knowledge and expertise in front-end frameworks and libraries such as React, Angular and Vue." value={resumeData.workExperience.experience}
                onChange={(e) => handleInputChange('workExperience', 'experience', e.target.value)} required
                ></textarea>
            </div>

            <div>
              <label>Company:</label> <br></br>
              <input
                className="border w-full px-4 py-2 mt-2"
                type="text"
               placeholder="eg. ABC Company" value={resumeData.workExperience.company}
                onChange={(e) => handleInputChange('workExperience', 'company', e.target.value)} required
              />
            </div>

            
            <div className="flex justify-between">
            <div>
              <label>Start Date:</label> <br></br>
              <input
                className="border w-full pr-48 py-2 mt-2"
                type="date"

               placeholder="12/12/2012" value={resumeData.workExperience.startDate}
                onChange={(e) => handleInputChange('workExperience', 'startDate', e.target.value)} required
              />
            </div>

            <div>
              <label>End Date:</label> <br></br>
              <input
                className="border w-full pr-48 py-2 mt-2"
                type="date"

               placeholder="12/12/2013" value={resumeData.workExperience.endDate}
                onChange={(e) => handleInputChange('workExperience', 'endDate', e.target.value)} required
              />
            </div>
            </div>

            <div>
            <h2 className="text-2xl font-bold mt-8"> Skills : </h2>

              <label>Programming Skills:</label> <br></br>
              <input
                className="border w-full px-4 py-2 mt-2"
                type="text"
               placeholder="eg. JavaScript, Python, C#" value={resumeData.skills.programming}
                onChange={(e) => handleInputChange('skills', 'programming', e.target.value)} required
              />
            </div>

           
            <div>
              <label>Project:</label> <br></br>
              <input
                className="border w-full px-4 py-2 mt-2"
                type="text"
               placeholder="eg. easyRecruit" value={resumeData.skills.project}
                onChange={(e) => handleInputChange('skills', 'project', e.target.value)} required
              />
            </div>

            <div>
              <label> Project Details :</label> <br></br>
              <textarea

                className="border w-full px-4 py-2 mt-2"
                type="text"
               placeholder="eg. An applicant tracking system (ATS) helps companies organize candidates for hiring and recruitment purposes. These systems allow businesses of all sizes and across industries to collect candidate information, organize prospects based on experience and skill set, and filter applicants.........." value={resumeData.skills.projectDetails}
                onChange={(e) => handleInputChange('skills', 'projectDetails', e.target.value)} required
                name="" id="" cols="10" rows="4"></textarea>
            </div>

            <div>
              <label>Teamwork Skills:</label> <br></br>
              <textarea
                className="border w-full px-4 py-5 mt-2"
                type="text"
               placeholder="eg. In my professional experience, I have consistently demonstrated strong teamwork skills, recognizing the value of collaborative efforts in achieving successful outcomes....." value={resumeData.skills.teamwork}
                onChange={(e) => handleInputChange('skills', 'teamwork', e.target.value)} required
              ></textarea>
            </div>

              <h2 className="mb-2 text-3xl font-bold mt-8">Language : </h2>

            <div>
              <label>Native : </label> <br></br>
              <input
                className="border w-full px-4 py-2 mt-2"
                type="text"
               placeholder="eg. Bangla" value={resumeData.language.native}
                onChange={(e) => handleInputChange('language', 'native', e.target.value)} required
              />
            </div>

            <div>
              <label>Foreign : </label> <br></br>
              <input
                className="border w-full px-4 py-2 mt-2"
                type="text"
               placeholder="eg. English" value={resumeData.language.foreign}
                onChange={(e) => handleInputChange('language', 'foreign', e.target.value)} required
              />
            </div>


          </div>




          <button className="px-4 py-2 bg-gray-400 my-8 " type="submit">Submit Resume</button>
        </form>
      </div>

      {/* show submitted data  */}

      {submittedResume && (

        <>
          <h2 className="text-3xl text-center mb-6 font-bold"> Demo Resume____ </h2>
          <div className="w-[1100px]   mx-auto my-12 border p-20  ">
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

                <div className="divider my-4 border"></div>

                <p><span className="text-2xl font-bold">Vision:</span> <br /> {submittedResume?.personalInfo.jobDescription}</p>
                <div className="divider my-4 border"></div>

                <div className="">
                  <div className="">
                    <p className="text-2xl font-bold mt-3">Education : </p>
                    <p><span className="font-bold">Degree:</span> {submittedResume?.education.degree}</p>
                    <p><span className="font-bold">college:</span> {submittedResume?.education.college}</p>
                    <p><span className="font-bold">University:</span> {submittedResume?.education.university}</p>
                    <p><span className="font-bold">Graduation Year:</span> {submittedResume?.education.graduationYear}</p>
                  </div>
                  <div className="divider my-4 border"></div>
                  <div>
                    <p className="text-2xl font-bold mt-3">Experience : </p>
                    <p><span className="font-bold">Position:</span> {submittedResume?.workExperience.position}</p>
                    <p><span className="font-bold">Details:</span> {submittedResume?.workExperience.experience}</p>
                    <p><span className="font-bold">Company:</span> {submittedResume?.workExperience.company}</p>
                    <p><span className="font-bold">Title:</span> {submittedResume?.workExperience.title}</p>
                    <p><span className="font-bold">Start Date:</span> {submittedResume?.workExperience.startDate}</p>
                    <p><span className="font-bold">End Date:</span>  {submittedResume?.workExperience.endDate}</p>
                  </div>
                </div>

                <div className="divider my-4 border"></div>
                <div className=" ">
                  <div>
                    <p className="text-2xl font-bold mt-3">Skills :</p>
                    <p><span className="font-bold">Programming Skills:</span> {submittedResume?.skills.programming}</p>
                    <p><span className="font-bold">Project:</span> {submittedResume?.skills.project}</p>
                    <p><span className="font-bold">Project Details:</span> {submittedResume?.skills.projectDetails}</p>
                    <p><span className="font-bold">Teamwork Skills:</span> {submittedResume?.skills.teamwork}</p>
                  </div>
                  <div className="divider my-4 border"></div>
                  <div>
                    <p className="text-2xl font-bold mt-3">Language :</p>

                    <p > <span className="font-bold">Native: </span> {submittedResume?.language.native}</p>
                    <p ><span className="font-bold">Foreign: </span>{submittedResume?.language.foreign}</p>
                  </div>
                </div>

              </div>
            </div>


            <div className="my-4">

              <PDFDownloadLink document={<ResumePdf resumeData={submittedResume}  />} filename="FORM">
                {({ loading }) => (loading ? <button>Loading Document...</button> : <button className="px-4 py-2 bg-gray-400">Download PDF</button>)}
              </PDFDownloadLink>

            </div>

          </div>
        </>




      )}





    </div>
  );
};

export default ResumeMaker;
