// style 1

// import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';

// const SocialIcon = () => {
//     return (
//         <div>
//             <div className="fixed right-0 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 p-4 bg-gray-300 rounded">
//       {/* Social Icons */}
//       <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
//         <FaFacebook className='text-blue-500 text-2xl'/>
//       </a>
//       <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
//         <FaInstagram className='text-2xl text-orange-500'/>
//       </a>
//       <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
//         <FaLinkedin className='text-blue-500 text-2xl' />
//       </a>

//     </div>
//         </div>
//     );
// };

// export default SocialIcon;



////////////////
// style 2
///////////////

// import { useState } from 'react';
// import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
// import { IoIosArrowBack } from "react-icons/io";

// const SocialIcon = () => {
//   const [isExpanded, setIsExpanded] = useState(false);

//   const handleToggle = () => {
//     setIsExpanded(!isExpanded);
//   };

//   return (
//     <div>
//       <div
//         className={`fixed right-0 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 p-4 bg-gray-300 rounded transition-transform ${
//           isExpanded ? 'translate-x-0' : 'translate-x-full'
//         }`}
//       >
//         {/* Social Icons */}
//         <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
//           <FaFacebook className="text-blue-500 text-2xl" />
//         </a>
//         <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
//           <FaInstagram className="text-2xl text-orange-500" />
//         </a>
//         <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
//           <FaLinkedin className="text-blue-500 text-2xl" />
//         </a>
//       </div>

//       <button
//         onClick={handleToggle}
//         className="fixed right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-300 rounded-l-full"
//       >
//         <IoIosArrowBack className={`h-6 w-6 transition-transform transform ${isExpanded ? 'rotate-180' : 'rotate-0'}`}></IoIosArrowBack>
//       </button>
//     </div>
//   );
// };

// export default SocialIcon;


////////////////////////
// style 3
///////////////////////

import { IoIosArrowBack } from "react-icons/io";
import { useState, useRef, useEffect } from 'react';
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';

const SocialIcon = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef(null);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
  };

  useEffect(() => {
    const container = containerRef.current;

    const handleMouseMove = (event) => {
      if (isExpanded && container && !container.contains(event.target)) {
        setIsExpanded(false);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isExpanded]);

  return (
    <div ref={containerRef} className="relative">
      <button
        onClick={handleToggle}
        className="fixed right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-300 rounded-l-full"
      >
        {/* Arrow Icon (You can replace it with your own) */}
        <IoIosArrowBack className={`h-6 w-6 transition-transform transform ${
            isExpanded ? 'rotate-180' : 'rotate-0'
          }`}></IoIosArrowBack>
      </button>

      <div
        className={`fixed right-0 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 p-4 bg-gray-300 rounded transition-all ${
          isExpanded ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
        onMouseLeave={handleMouseLeave}
      >
        {/* Social Icons */}
        <a href="https://www.facebook.com/profile.php?id=61555929885285" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-blue-500 text-2xl" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-2xl text-orange-500" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-blue-500 text-2xl" />
        </a>
      </div>
    </div>
  );
};

export default SocialIcon;
