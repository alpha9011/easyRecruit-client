import PrimaryBanner from "../../shared/PrimaryBanner/PrimaryBanner";
import EmployerBranding from "./EmployerBranding";
import bgImage from "../../../public/Image/primary-banner.jpg";
const Capabilities = () => {
   
  return (
    <div>
      <PrimaryBanner imageUrl={bgImage} imgHeight="70vh"></PrimaryBanner>

      <EmployerBranding></EmployerBranding>
    </div>
  );
};

export default Capabilities;
