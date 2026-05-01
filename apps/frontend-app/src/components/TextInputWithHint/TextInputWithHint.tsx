import "./TextInputWithHint.css";

interface IProps {
  hint: string;
  value: string;
  onChange?: (value: string) => void;
  type?: string;
  disabled?: boolean;
  showPasswordToggle?: boolean;
  passwordVisible?: boolean;
  onTogglePassword?: () => void;
  className?: string;
}

const TextInputWithHint = ({
  hint,
  value,
  onChange,
  type = "text",
  disabled = false,
  showPasswordToggle = false,
  passwordVisible = false,
  onTogglePassword,
  className,
}: IProps) => {
  const inputType = showPasswordToggle
    ? passwordVisible
      ? "text"
      : "password"
    : type;

  return (
    <div className={`text-input-field ${className ?? ""}`}>
      <label className="text-input-label">{hint}</label>
      <div className="text-input-wrapper">
        <input
          className={`text-input ${showPasswordToggle ? "text-input--with-toggle" : ""}`}
          type={inputType}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          disabled={disabled}
        />
        {showPasswordToggle && (
          <button
            type="button"
            className="text-input-eye"
            onClick={onTogglePassword}
          >
            {passwordVisible ? "👁" : "👁‍🗨"}
          </button>
        )}
      </div>
    </div>
  );
};

export default TextInputWithHint;
