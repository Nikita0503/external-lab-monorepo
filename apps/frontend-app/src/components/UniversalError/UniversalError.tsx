import CustomButton from "../CustomButton/CustomButton";
import "./UniversalError.css";

interface IProps {
  errorText: string;
  buttonText: string;
  onHandleError: () => void;
}

const UniversalError = ({ errorText, buttonText, onHandleError }: IProps) => {
  return (
    <div className="universal-error">
      <p className="universal-error-text">{errorText}</p>
      <CustomButton onClick={onHandleError}>{buttonText}</CustomButton>
    </div>
  );
};

export default UniversalError;
