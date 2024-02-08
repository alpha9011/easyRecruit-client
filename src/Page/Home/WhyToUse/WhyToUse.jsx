import jobsUsersImg from "../../../../public/Image/easy_home_unlimited.png";
import fastImplementationImg from "../../../../public/Image/fast_implementation.png";
import configurableImg from "../../../../public/Image/higly_Configurable.png";
import PrimaryButton from "../../../shared/PrimaryButton/PrimaryButton";


const WhyToUse = () => {
  return (
    <div className="container mx-auto my-28">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-5 gap-5">
        <div
          className="relative border border-sky-500 p-5"
          data-aos={"zoom-in-up"}
          data-aos-duration="1000"
          data-aos-offset="300"
        >
          <img
            className="absolute  w-20 top-0 left-1/2 -translate-y-1/2 -ml-10"
            src={jobsUsersImg}
            alt=""
          />
          <h4 className="text-3xl mt-10 mb-5 font-semibold">
            {" "}
            Unlimited Jobs & Users
          </h4>
          <p className="text-justify leading-7">
            EasyRecruit recruiting software is easy-to-use and highly flexible
            for your business. Take advantage of unlimited jobs and users
            without any added fees or channel restrictions.
          </p>
        </div>

        <div
          className="relative border border-sky-500 p-5"
          data-aos={"zoom-in-down"}
          data-aos-duration="1000"
          data-aos-offset="300"
        >
          <img
            className="absolute  w-20 top-0 left-1/2 -translate-y-1/2 -ml-10"
            src={fastImplementationImg}
            alt=""
          />
          <h4 className="text-3xl mt-10 mb-5 font-semibold">
            {" "}
            Fast Implementation
          </h4>
          <p className="text-justify leading-7">
            Embark on your journey with a specialized applicant tracking system
            designed for your businesses. Streamline manual tasks and engage
            with candidates ready to contribute to your company immediately.
          </p>
        </div>

        <div
          className="relative border border-sky-500 p-5"
          data-aos={"zoom-in-up"}
          data-aos-duration="1000"
          data-aos-offset="300"
        >
          <img
            className="absolute  w-20 top-0 left-1/2 -translate-y-1/2 -ml-10"
            src={configurableImg}
            alt=""
          />
          <h4 className="text-3xl mt-10 mb-5 font-semibold">
            {" "}
            Unlimited Jobs & Users
          </h4>
          <p className="text-justify leading-7">
            EasyRecruit recruiting software is easy-to-use and highly flexible
            for your company&apos;s. Take advantage of unlimited jobs and users
            without any added fees or channel restrictions.
          </p>
        </div>
      </div>
      <div>
        <div
          className="flex justify-center mt-5"
          data-aos={"fade-up"}
          data-aos-duration="1500"
          // data-aos-offset="200"
        >
          <PrimaryButton buttonText={"Learn More"}></PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default WhyToUse;
