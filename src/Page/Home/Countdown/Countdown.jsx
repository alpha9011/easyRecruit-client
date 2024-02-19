import { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import { FaUsers, FaBriefcase, FaTwitter, FaBookOpen } from "react-icons/fa";

const Countdown = () => {
  const [countDown, setCountDown] = useState({
    visitors: 0,
    clients: 0,
    socialFollowers: 0,
    totalJobsPosted: 0,
  });

  useEffect(() => {
    fetch("count.json")
      .then((response) => response.json())
      .then((data) => setCountDown(data))
      .catch((error) => console.error("Error fetching countDown:", error));
  }, []); 

  const iconMapping = { 
    visitors: <FaUsers className="mx-auto mb-3" size={32} />,
    clients: <FaBriefcase className="mx-auto mb-3" size={32} />,
    socialFollowers: <FaTwitter className="mx-auto mb-3" size={32} />,
    totalJobsPosted: <FaBookOpen className="mx-auto mb-3" size={32} />,
  };

  const animateNumber = (value) =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useSpring({
      number: value,
      from: { number: 0 },
      config: { duration: 3000 },
    });

  return (
    <div className="bg-gradient-to-r from-gray-300 to-blue-300 p-6">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl text-blue-800 font-bold mb-6">Our Achievement</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {Object.entries(countDown).map(([key, value]) => (
            <animated.div key={key} className="p-4 bg-white rounded shadow">
              {iconMapping[key]}
              <animated.p className="text-2xl font-bold mb-2">
                {animateNumber(value).number.interpolate((val) => Math.floor(val))}
              </animated.p>
              <p className="text-gray-600">{key}</p>
            </animated.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Countdown;
