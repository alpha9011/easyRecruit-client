import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const PrimarySection = ({
  subTitle,
  title,
  content,
  linkUrl,
  linkText,
  image,
  alt,
  imgPosition,
  aosImage="zoom-in",
  aosDurationImage="1000",
  aosContent="zoom-in",
  aosDurationContent="1000"
}) => {



  return (
    <div className="p-5 my-10 container mx-auto" >
      <div
        className={` flex flex-col 
        md:${imgPosition === "right"? 'flex-row-reverse': imgPosition === "left" ? 'flex-row' : ''}
       justify-center items-center gap-10 `}
       
      >
        <div className="md:w-1/2" data-aos={aosImage}  data-aos-duration={aosDurationImage}>
          <img className="w-full md:w-96 lg:w-[700px]" src={image} alt={alt} />
        </div>
        <div className="md:w-1/2 flex flex-col space-y-3 max-w-[370px] justify-center " data-aos={aosContent}  data-aos-duration={aosDurationContent} >
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
  );
};

PrimarySection.propTypes = {
  subTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  imgPosition: PropTypes.oneOf(["left", "right"]).isRequired,
};

export default PrimarySection;
