import { Link } from "react-router-dom";
import recruitingImg from "../../../../public/Image/RecrutingResult.jpg";
import PrimarySection from "../../../shared/PrimarySection/PrimarySection";
const RecruitingResult = () => {
  const title =
    " Streamline Recruiting & Improve Hiring Outcomes with EasyRecruit";

  const subTitle = "TOP RECRUITING SOFTWARE";
  const content =
    " Get easy-to-use Company business recruiting software that empowers your growing company to find and hire talent fast. Automate repetitive, manual tasks, centralize candidate information and data, and better compete for top candidates — all from a recruiting solution built specifically for SMBs.";

  const linkText = " See Capabilities";
  const linkUrl = "/recruiting-software-capabilities";

  return (
    <>
      <div>
        <div className="my-10 text-center">
          <h4 className="text-4xl text-sky-500 p-3">
            Drive Better Recruiting Results with the Right ATS
          </h4>
        </div>
        <PrimarySection
          title={title}
          subTitle={subTitle}
          content={content}
          linkText={linkText}
          linkUrl={linkUrl}
          image={recruitingImg}
          alt={"easy Recruit"}
          imgPosition="left"
        ></PrimarySection>

        {/* <div className="p-5 my-10 container mx-auto ">
          <div className="flex  ">
            <div className="md:w-1/2" data-aos="zoom-in" data-aos-duration="1000">
              <img
                className="w-full md:w-96 lg:w-[700px]"
                src={recruitingImg}
                alt="easy recruit"
              />
            </div>
            <div
              className="md:w-1/2 flex flex-col space-y-3 max-w-[370px] justify-center "
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <h6 className="text-textSecondary font-semibold">{subTitle}</h6>
              <h3 className="text-xl md:text-3xl font-semibold">{title}</h3>
              <p className="text-wrap leading-7">{content}</p>
        
              <Link
                to={linkUrl}
                className="text-linkColor hover:underline text-wrap hover:font-semibold"
              >
                {linkText}
              </Link>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default RecruitingResult;
