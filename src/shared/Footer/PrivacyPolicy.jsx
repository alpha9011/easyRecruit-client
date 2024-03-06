import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
    return (
        <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>

      <p className="mb-4">
        This Privacy Policy describes how <strong>[easyRecruit]</strong> collects, uses, and discloses personal
        information when you visit and use <strong>[easyRecruit™]</strong>.
      </p>

      <h2 className="text-2xl font-bold mb-2">Personal Information We Collect</h2>

      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">Information You Provide</h3>
        <p>
          When you sign up for an account, subscribe to our newsletter, or fill out a form, we may collect personal
          information such as your name, email address, and other details you provide.
        </p>
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">Automatically Collected Information</h3>
        <p>
          We may automatically collect certain information when you visit our website, including your IP address,
          browser type, device information, and usage patterns through cookies and similar technologies.
        </p>
      </div>


      <p className="mt-4">
        If you have any questions about this Privacy Policy, please contact us at <strong> <Link to={"https://www.facebook.com/profile.php?id=61555929885285"}>Facebook</Link> or <Link to={"/contact"}>Direct Message</Link></strong>.
      </p>

      <p className="mt-4">*This Privacy Policy was last updated on [2024].</p>
    </div>
    );
};

export default PrivacyPolicy;