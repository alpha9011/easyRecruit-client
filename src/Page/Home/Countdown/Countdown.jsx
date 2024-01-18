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
    visitors: <FaUsers size={32} />,
    clients: <FaBriefcase size={32} />,
    socialFollowers: <FaTwitter size={32} />,
    totalJobsPosted: <FaBookOpen size={32} />,
  };

  const animateNumber = (value) =>
    useSpring({
      number: value,
      from: { number: 0 },
      config: { duration: 1500 },
    });

  return (
    <div className="bg-gray-100 p-8">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Our Countdown</h2>
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
