import PartnerProgramImg from "../../../../public/Image/Partner-Program.jpg";
import PrimarySection from "../../../shared/PrimarySection/PrimarySection";

//Aos Animation
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const PartnerProgram = () => {
  const title =
    " Bring the Power of the EasyRecruit Recruiting Solution to Your Customers";
  const subTitle = "PARTNER PROGRAM";
  const content =
    "Set your clients up with any business recruiting software and generate revenue for your company by joining the EasyRecruit Partner Program. As a partner, you can offer EasyRecruit's powerful recruiting solutions to your clients and expanding your business opportunities.";

  const linkText = "Become a easyRecruit Partner ";
  const linkUrl = "";

  return (
    <div>
      <PrimarySection
        title={title}
        subTitle={subTitle}
        content={content}
        linkText={linkText}
        linkUrl={linkUrl}
        image={PartnerProgramImg}
        alt={"Easy Recruit"}
        imgPosition="left"
        aosImage="zoom-in"
      ></PrimarySection>
    </div>
  );
};

export default PartnerProgram;
