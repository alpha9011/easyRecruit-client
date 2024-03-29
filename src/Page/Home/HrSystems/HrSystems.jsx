import { Link } from "react-router-dom";
import hrSystemImg from "../../../../public/Image/HrSystem.jpg";


const HrSystems = () => {
  const subTitle = "SYNC YOUR HR SYSTEMS";

  const title = "Integrate Your HR Technology with Easy Recruiting Software ";
  const content =
    " EasyRecruit enhances your recruitment capabilities by seamlessly integrating with a variety of leading easy tech tools. This comprehensive integration ensures you have the connectivity and data insights needed to optimize your recruitment efforts for success.";

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
          <div className="md:w-1/2" data-aos="zoom-in"  data-aos-duration="1000"  >
            <img
              className="w-full "
              src={hrSystemImg}
              alt={"easyRecruit"}
            />
          </div>
          <div className="md:w-1/2 flex flex-col space-y-3 max-w-[370px] justify-center " data-aos="zoom-in"   data-aos-duration="1000">
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
