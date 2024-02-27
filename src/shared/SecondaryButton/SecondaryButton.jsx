/* eslint-disable react/prop-types */
import "./SecondaryButton.css";
const  SecondaryButton = ({
  buttonText,
  textColor,
  font,
  hover,
  display,
  onClick,
}) => {
  const buttonClasses = `secondary-primary 
  ${textColor}
   ${font}
    ${hover}
     ${display}     
`;

  return (
    <div>

      <button className={buttonClasses} role="button" onClick={onClick}>
        {buttonText}
      </button>

    </div>
  );
};

export default SecondaryButton;
