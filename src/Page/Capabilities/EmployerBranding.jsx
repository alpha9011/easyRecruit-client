import PrimarySection from "../../shared/PrimarySection/PrimarySection";
import brandingImg from "../../../public/Image/Employer-branding.jpg";

const EmployerBranding = () => {
  const title =
    "Easy recruiting software can promote your own with custom branding options.";

  const subTitle = "EMPLOYER BRANDING";
  const content =
    "Customize your methods and create versatile resources to strengthen your brand, while ensuring a consistent experience for candidates.";
  const linkText = "";
  const linkUrl = "/capabilities";

  return (
    <div className="my-10 ">
      <div className="my-10 text-center px-5">
        <h4 className="text-4xl text-sky-500">
          Drive Better Recruiting Results with the Right ATS
        </h4>
      </div>
      <PrimarySection
        title={title}
        subTitle={subTitle}
        content={content}
        linkText={linkText}
        linkUrl={linkUrl}
        image={brandingImg}
        alt="employerBranding"
        imgPosition="left"
      ></PrimarySection>
    </div>
  );
};

export default EmployerBranding;
