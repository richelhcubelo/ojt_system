import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./dropdown.scss";

interface DropdownProps {
  label?: string;
  options: string[];
  value?: string;
  onChange: (selectedOption: string) => void;
  disabled?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  options,
  value,
  onChange,
  disabled,
}) => {
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    onChange(selectedValue);
  };

  return (
    <div className="dropdown-container">
      {label && <label className="dropdown-label">{label}</label>}
      <div className="dropdown-select">
        <select value={value} onChange={handleSelectChange} disabled={disabled}>
          <option value="" disabled>
            Select
          </option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <FontAwesomeIcon icon={faChevronDown} className="dropdown-icon" />
      </div>
    </div>
  );
};

export default Dropdown;
