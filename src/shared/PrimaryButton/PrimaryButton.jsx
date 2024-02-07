/* eslint-disable react/prop-types */
import "./PrimaryButton.css";
const PrimaryButton = ({
  buttonText,
  textColor,
  font,
  hover,
  display,
  onClick,
}) => {
  const buttonClasses = `button-primary 
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

export default PrimaryButton;
