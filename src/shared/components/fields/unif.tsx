import React from "react";
import "./unif.scss";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface NameInputFieldProps {
  type: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
  showPassword?: boolean;
  onTogglePassword?: () => void;
  label?: string;
}

const NameInputField: React.FC<NameInputFieldProps> = ({
  type,
  id,
  value,
  onChange,
  readOnly,
  showPassword = false,
  onTogglePassword,
  label,
}) => {
  return (
    <div className="name-input-field">
      {label && (
        <label htmlFor={id} className="label">
          {label}
        </label>
      )}
      <input
        type={showPassword ? "text" : type}
        id={id}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
      />
      {type === "password" && onTogglePassword && (
        <div className="password-toggle" onClick={onTogglePassword}>
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </div>
      )}
    </div>
  );
};

export default NameInputField;
