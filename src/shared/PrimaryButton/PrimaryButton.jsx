import './PrimaryButton.css'
const PrimaryButton = ({buttonText}) => {
    return (
        <div>
            <button className="button-primary" role="button">{buttonText}</button>
        </div>
    );
};

export default PrimaryButton;
