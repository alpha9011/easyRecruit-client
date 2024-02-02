import { Link } from "react-router-dom";
import hrSystemImg from "../../../../public/Image/HrSystem.jpg";
//Aos Animation
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const HrSystems = () => {
  const subTitle = "SYNC YOUR HR SYSTEMS";

  const title = "Integrate Your HR Technology with Easy Recruiting Software ";
  const content =
    " EasyRecruit offers direct integrations with leading easy tech tools to strengthen your efforts and connect data you need to succeed.";

  const linkText = "View EasyRecruit Marketplace ";
  const linkUrl = "";

  return (
    <div className="flex  flex-row-reverse">
     
      <div className="p-5 my-10 container mx-auto">
        <div
          className={` flex flex-col 
        md:flex-row-reverse
       justify-center items-center gap-10  `}
        >
          <div className="md:w-1/2" data-aos="fade-up"  data-aos-duration="2000"  >
            <img
              className="w-full md:w-96 lg:w-[700px]"
              src={hrSystemImg}
              alt={"easyRecruit"}
            />
          </div>
          <div className="md:w-1/2 flex flex-col space-y-3 max-w-[370px] justify-center " data-aos="fade-up"   data-aos-duration="1000" >
            <h6 className="text-sky-500 font-semibold">{subTitle}</h6>
            <h3 className="text-xl md:text-3xl font-semibold">{title}</h3>
            <p className="text-wrap leading-7">{content}</p>

            <Link
              to={linkUrl}
              className="text-sky-500 hover:underline text-wrap hover:font-semibold"
            >
              {linkText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HrSystems;
