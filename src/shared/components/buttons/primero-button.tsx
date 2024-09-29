import React from "react";
import "./primero-button.scss";

interface PrimaryButtonProps {
  buttonText: string;
  handleButtonClick: () => void;
  icon?: React.ReactNode;
  active?: boolean; // Add 'active' prop here
  className?: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  buttonText,
  handleButtonClick,
  icon,
  active = false,
  // Default active state to false
}) => {
  return (
    <button
      className={`primary-button ${active ? "active" : ""}`} // Add conditional class
      onClick={handleButtonClick}
    >
      {icon && <span className="button-icon">{icon}</span>}
      {buttonText}
    </button>
  );
};

export default PrimaryButton;
