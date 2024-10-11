import React from "react";
import "./internshipreport.scss";
import DataTable from "../../../../shared/components/table/data-table";
import SearchBar from "../../searchbar/searchbar";
import PrintButton from "../print-button";

const InternshipReport: React.FC = () => {
  const attendanceData = [
    {
      id: 1,
      date: "2024-01-01",
      morning: {
        in: "IN",
        out: "OUT",
      },
      afternoon: {
        in: "IN",
        out: "OUT",
      },
      duration: "4 hrs",
    },
    {
      id: 1,
      date: "2024-01-01",
      morning: {
        in: "IN",
        out: "OUT",
      },
      afternoon: {
        in: "IN",
        out: "OUT",
      },
      duration: "4 hrs",
    },
    {
      id: 1,
      date: "2024-01-01",
      morning: {
        in: "IN",
        out: "OUT",
      },
      afternoon: {
        in: "IN",
        out: "OUT",
      },
      duration: "4 hrs",
    },
    {
      id: 1,
      date: "2024-01-01",
      morning: {
        in: "IN",
        out: "OUT",
      },
      afternoon: {
        in: "IN",
        out: "OUT",
      },
      duration: "4 hrs",
    },
    {
      id: 1,
      date: "2024-01-01",
      morning: {
        in: "IN",
        out: "OUT",
      },
      afternoon: {
        in: "IN",
        out: "OUT",
      },
      duration: "4 hrs",
    },
    {
      id: 1,
      date: "2024-01-01",
      morning: {
        in: "IN",
        out: "OUT",
      },
      afternoon: {
        in: "IN",
        out: "OUT",
      },
      duration: "4 hrs",
    },
  ];

  const columns = [
    { header: "#", key: "id" },
    { header: "Date", key: "date" },
    {
      header: "Morning",
      key: "morning",
      render: (row: any) => (
        <div className="studenttime">
          <p>
            <strong>In:</strong> {row.morning.in || "N/A"}
          </p>
          <p>
            <strong>Out:</strong> {row.morning.out || "N/A"}
          </p>
        </div>
      ),
    },
    {
      header: "Afternoon",
      key: "afternoon",
      render: (row: any) => (
        <div className="studenttime">
          <p>
            <strong>In:</strong> {row.afternoon.in || "N/A"}
          </p>
          <p>
            <strong>Out:</strong> {row.afternoon.out || "N/A"}
          </p>
        </div>
      ),
    },
    { header: "Duration", key: "duration" },
  ];

  return (
    <div className="internship-report-container">
      <div className="search-wrapper">
        <SearchBar
          placeholder="Search"
          onSearch={(query) => console.log("Search query:", query)}
        />
      </div>

      {/* Flex container for table and time info */}
      <div className="content-wrapper">
        {/* Attendance Table */}
        <DataTable columns={columns} data={attendanceData} />

        {/* Rendered Time Information */}
        <div className="time-info">
          <p>Total Rendered Time:</p>
          <p>Required Duration:</p>
          <p>Remaining Time:</p>
        </div>
      </div>

      {/* Internship Button */}
      {/* Uncomment if needed */}
      {/* <PrintButton onClick={() => console.log("Internship button clicked")} /> */}
    </div>
  );
};

export default InternshipReport;
