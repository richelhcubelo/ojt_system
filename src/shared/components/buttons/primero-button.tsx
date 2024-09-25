import React from "react";
import "./primero-button.scss";

interface PrimaryButtonProps {
  buttonText: string;
  handleButtonClick: () => void;
  icon?: React.ReactNode; // Use React.ReactNode for better type handling
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  buttonText,
  handleButtonClick,
  icon,
}) => {
  return (
    <button className="primary-button" onClick={handleButtonClick}>
      {icon && <span className="button-icon">{icon}</span>}
      {buttonText}
    </button>
  );
};

export default PrimaryButton;
