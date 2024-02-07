<<<<<<< HEAD
import './PrimaryButton.css'
// eslint-disable-next-line react/prop-types
const PrimaryButton = ({buttonText}) => {
    return (
        <div>
            <button className="button-primary" role="button">{buttonText}</button>
        </div>
    );
=======
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
>>>>>>> 3040b38a596e308ad817e6ef29d2bb85d745c5cb
};

export default PrimaryButton;
