import './PrimaryButton.css'
// eslint-disable-next-line react/prop-types
const PrimaryButton = ({buttonText}) => {
    return (
        <div>
            <button className="button-primary" role="button">{buttonText}</button>
        </div>
    );
};

export default PrimaryButton;
