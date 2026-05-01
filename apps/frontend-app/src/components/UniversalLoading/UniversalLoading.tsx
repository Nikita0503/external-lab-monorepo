import "./UniversalLoading.css";

interface IProps {
  loadingText: string;
}

const UniversalLoading = ({ loadingText }: IProps) => {
  return (
    <div className="universal-loading">
      <p className="universal-loading-text">{loadingText}</p>
    </div>
  );
};

export default UniversalLoading;
