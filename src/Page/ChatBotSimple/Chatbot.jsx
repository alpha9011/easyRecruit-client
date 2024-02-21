import { useState } from 'react';
import ChatBot from 'react-simple-chatbot';
import { PiWechatLogo } from "react-icons/pi";
import { IoIosCloseCircle } from "react-icons/io";

const Chatbot = () => {
  const [showChatbot, setShowChatbot] = useState(false);

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  const steps = [
    {
      id: '1',
      message: 'Welcome to our Applicant Tracking System! How can I assist you today?',
      trigger: 'intro'
    },
    {
      id: 'intro',
      options: [
        { value: 'jobSearch', label: 'Job Search', trigger: 'jobSearch' },
        { value: 'submitApplication', label: 'Submit Application', trigger: 'submitApplication' },
        { value: 'askQuestion', label: 'Ask a Question', trigger: 'askQuestion' }
      ]
    },
    {
      id: 'jobSearch',
      message: 'Are you looking for a specific job?',
      trigger: 'specificJob'
    },
    {
      id: 'specificJob',
      options: [
        { value: 'yes', label: 'Yes', trigger: 'jobDetails' },
        { value: 'no', label: 'No', trigger: 'askQuestion' }
      ]
    },
    {
      id: 'jobDetails',
      message: 'Please provide some details about the job you are looking for.',
      trigger: 'jobDetailsInput'
    },
    {
      id: 'jobDetailsInput',
      user: true,
      trigger: 'searchResults'
    },
    {
      id: 'searchResults',
      message: 'Here are some job openings matching your criteria...',
      end: true
    },
    {
      id: 'submitApplication',
      message: 'Would you like to submit an application for a job?',
      trigger: 'submitApplicationOptions'
    },
    {
      id: 'submitApplicationOptions',
      options: [
        { value: 'yes', label: 'Yes', trigger: 'applicationProcess' },
        { value: 'no', label: 'No', trigger: 'askQuestion' }
      ]
    },
    {
      id: 'applicationProcess',
      message: 'Great! Let me guide you through the application process.',
      trigger: 'applicationInstructions'
    },
    {
      id: 'applicationInstructions',
      message: 'Please upload your resume and provide the required information.',
      end: true
    },
    {
      id: 'askQuestion',
      message: 'Feel free to ask any questions you have about our Applicant Tracking System.',
      end: true
    }
  ];

  return (
    <div>
      <div className="fixed bottom-0 right-0 z-50">
        <button onClick={toggleChatbot} className="bg-blue-500 text-white rounded-full p-3 m-5">
          <PiWechatLogo className='text-4xl'/>
        </button>
      </div>
      {showChatbot && (
        <div className="fixed bottom-0 right-0 z-50 bg-white border border-gray-300 rounded-tl-lg shadow-lg transition-all duration-3000 ease-in-out">
          <div className="flex justify-end p-2">
            <button onClick={toggleChatbot} className="text-gray-500 hover:text-gray-700">
              <IoIosCloseCircle className='text-3xl'/>
            </button>
          </div>
          <ChatBot steps={steps} />
        </div>
      )}
    </div>
  );
};

export default Chatbot;
