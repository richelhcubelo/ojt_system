import React from "react";
import "./linering-chartcard.scss";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

interface ProgressRingCardProps {
  percentage: number;
}

const ProgressRingCard: React.FC<ProgressRingCardProps> = ({ percentage }) => {
  const data = [
    { name: "Progress", value: percentage },
    { name: "Remaining", value: 100 - percentage },
  ];

  const COLORS = ["#20B2AA", "#E0E0E0"];

  return (
    <div className="progress-ring-card">
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            startAngle={90}
            endAngle={-270}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="percentage-text">{`${percentage}%`}</div>
    </div>
  );
};

export default ProgressRingCard;
