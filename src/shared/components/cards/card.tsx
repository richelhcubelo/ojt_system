import React from "react";
import "./card.scss";

interface CardProps {
  label: string;
  value: string | number;
  icon?: React.ReactNode;
  width?: string; // Optional width prop to customize width
  height?: string; // Optional height prop to customize height
  color?: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  label,
  value = "",
  icon,
  width,
  height,
  color = "",
  children,
}) => {
  return (
    <div className="card" style={{ width, height, backgroundColor: color }}>
      <div className="label">
        {icon && <span className="icon">{icon}</span>}
        {label}
      </div>
      <div className="value">{value}</div>
      {value && <p>{value}</p>}
      {children}
    </div>
  );
};

export default Card;
