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
    <div className="flex items-center justify-center relative p-5 my-10  rounded-sm">
  <div className="absolute inset-0 bg-cover bg-center bg-fixed z-0 "
    style={{
      backgroundImage: `url('https://i.ibb.co/5Ym2XDF/motivational-composition-goal-achievement.jpg')`,
      // backgroundImage: `url('https://i.ibb.co/P1t84nX/25658632-wangxi-09-04-2022-92.jpg')`,
      // backgroundImage: `url('https://i.ibb.co/fvDwLC3/27723351-award5.jpg')`,
    

    }}
  ></div>
  <div className="max-w-3xl mx-auto p-6 relative">
    <div className="container mx-auto text-center">
      <h2 className="text-5xl text-sky-700 font-bold mb-6">Our Achievement</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {Object.entries(countDown).map(([key, value]) => (
          <animated.div key={key} className="bg-white rounded-full shadow-2xl shadow-yellow-200 hover:shadow-green-500">
            <div className="p-6">
              {iconMapping[key]}
              <animated.p className="text-2xl font-bold mb-2">
                {animateNumber(value).number.interpolate((val) => Math.floor(val))}
              </animated.p>
              <p className="text-gray-600">{key}</p>
            </div>
          </animated.div>
        ))}
      </div>
    </div>
  </div>
</div>

  );
};

export default Countdown;
