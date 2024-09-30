import React, { useState } from "react";
import "./cd-attendance.scss";
import SearchBar from "../../../../shared/components/searchbar/searchbar"; // Adjust the path as needed
import DataTable from "../../../../shared/components/table/data-table";
import { faEdit } from "@fortawesome/free-solid-svg-icons"; // Import only the edit icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Attendance: React.FC = () => {
  const [attendanceData, setAttendanceData] = useState([
    {
      id: 1, // Added ID
      date: "186744",
      name: "Richel H. Cubelo",
      company: "Tech Corp",
      time: {
        inTime: "09:00 AM", // Added inTime
        outTime: "01:00 PM", // Added outTime
      },
      duration: "4 hours",
      remarks: "Present",
      location: "Calape, Bohol", // Location field
    },
    {
      id: 2, // Added ID
      date: "2024-09-01",
      name: "Jane Smith",
      company: "Innovate Solutions",
      time: {
        inTime: "09:00 AM", // Added inTime
        outTime: "01:00 PM", // Added outTime
      },
      duration: "3.5 hours",
      remarks: "Late",
      location: "Town Center, Town", // Example location
    },
  ]);

  const handleEdit = (id: number) => {
    console.log("Edit attendance record with ID:", id);
  };

  // Table columns with Location next to Name
  const columns = [
    { header: "#", key: "id" }, // ID column added
    { header: "Date", key: "date" },
    {
      header: "Name", // Name column
      key: "studentName",
      render: (row: any) => (
        <div className="student-name">
          <p>{row.name || "N/A"}</p> {/* Show Name directly */}
        </div>
      ),
    },
    {
      header: "Location", // Location column next to Name
      key: "location",
      render: (row: any) => (
        <div className="student-location">
          <p>{row.location || "N/A"}</p> {/* Show Location */}
        </div>
      ),
    },
    {
      header: "Time", // Time column
      key: "time",
      render: (row: any) => (
        <div className="student-time">
          <p>
            <strong>In:</strong> {row.time.inTime || "N/A"}
          </p>
          <p>
            <strong>Out:</strong> {row.time.outTime || "N/A"}
          </p>
        </div>
      ),
    },
    { header: "Company", key: "company" },
    { header: "Duration", key: "duration" },
    { header: "Remarks", key: "remarks" },
  ];

  return (
    <div className="dashboard-page">
      <h1 className="page-title">Attendance</h1>
      <h2 className="page-subtitle">Check Student Attendance</h2>

      {/* SearchBar */}
      <div className="controls-container">
        <div className="search-bar-container">
          <SearchBar
            placeholder="Search"
            onSearch={(query) => console.log(query)}
          />
        </div>
      </div>

      {/* Render the DataTable */}
      <DataTable columns={columns} data={attendanceData} />
    </div>
  );
};

export default Attendance;
