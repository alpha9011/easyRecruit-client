
import recruitingImg from "../../../../public/Image/RecrutingResult.jpg";
import PrimarySection from "../../../shared/PrimarySection/PrimarySection";
const RecruitingResult = () => {
  const title =
    " Streamline Recruiting & Improve Hiring Outcomes with EasyRecruit";

  const subTitle = "TOP RECRUITING SOFTWARE";
  const content =
    " Get easy-to-use small business recruiting software that empowers your growing company to find and hire talent fast. Automate repetitive, manual tasks, centralize candidate information and data, and better compete for top candidates — all from a recruiting solution built specifically for SMBs.";

  const linkText = " See Capabilities";
  const linkUrl = "/recruiting-software-capabilities";

  return (
    <>
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
    </>
  );
};

export default RecruitingResult;
