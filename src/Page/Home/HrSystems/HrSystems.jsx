
import hrSystem from "../../../../public/Image/HrSystem.jpg";
import PrimarySection from "../../../shared/PrimarySection/PrimarySection";

const HrSystems = () => {
  const subTitle = "SYNC YOUR HR SYSTEMS";

  const title = "Integrate Your HR Technology with Easy Recruiting Software ";
  const content = " EasyRecruit offers direct integrations with leading easy tech tools to strengthen your efforts and connect data you need to succeed.";

  const linkText = "View EasyRecruit Marketplace ";
  const linkUrl = "";

  return (
    <div>
      <PrimarySection
        title={title}
        subTitle={subTitle}
        content={content}
        linkText={linkText}
        linkUrl={linkUrl}
        image={hrSystem}
        alt={"Easy recruit"}
        imgPosition="right"
      ></PrimarySection>
    
    </div>
  );
};

export default HrSystems;
