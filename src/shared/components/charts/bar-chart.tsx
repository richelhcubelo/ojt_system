// BarChartCard.tsx
import React from "react";
import "./bar-chart.scss"; // Keep the styles for the bar chart
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

// Sample data for the bar chart
const data = [
  { program: "BS Computer Science", students: 10 },
  { program: "BS Information Technology", students: 8 },
  { program: "BS Fisheries", students: 5 },
];

const BarChartCard: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="program" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="students" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartCard;
