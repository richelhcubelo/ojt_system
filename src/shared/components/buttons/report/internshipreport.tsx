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
      amIn: "IN",
      amOut: "OUT",
      pmIn: "IN",
      pmOut: "OUT",
      duration: "4 hrs",
    },
  ];

  const columns = [
    { header: "#", key: "id" },
    { header: "Date", key: "date" },
    {
      header: "AM",
      key: "amIn",
      render: (row: any) => `${row.amIn} | ${row.amOut}`,
    },
    {
      header: "PM",
      key: "pmIn",
      render: (row: any) => `${row.pmIn} | ${row.pmOut}`,
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

      {/* Attendance Table */}
      <DataTable columns={columns} data={attendanceData} />

      {/* Rendered Time Information */}
      <div className="time-info">
        <p>Total Rendered Time:</p>
        <p>Required Duration:</p>
        <p>Remaining Time:</p>
      </div>

      {/* Internship Button */}
      <PrintButton onClick={() => console.log("Internship button clicked")} />
    </div>
  );
};

export default InternshipReport;
