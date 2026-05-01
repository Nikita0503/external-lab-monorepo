import "./CustomButton.css";

interface IProps {
  children: string;
  onClick?: () => void;
  className?: string;
}

const CustomButton = ({ children, onClick, className }: IProps) => {
  return (
    <button
      className={`custom-button ${className ?? ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CustomButton;
