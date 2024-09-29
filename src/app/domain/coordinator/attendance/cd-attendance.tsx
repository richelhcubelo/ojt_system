import React, { useState } from "react";
import "./cd-attendance.scss";
import SearchBar from "../../../../shared/components/searchbar/searchbar"; // Adjust the path as needed
import DataTable from "../../../../shared/components/table/data-table";
import { faEdit } from "@fortawesome/free-solid-svg-icons"; // Import only the edit icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Attendance: React.FC = () => {
  const [attendanceData, setAttendanceData] = useState([
    {
      id: 1,
      date: "2024-09-01",
      studentInfo: {
        name: "John Doe",
        address: "123 Main St, City",
        contactNo: "123-456-7890",
      },
      company: "Tech Corp",
      time: "09:00 AM",
      duration: "4 hours",
      remarks: "Present",
    },
    {
      id: 2,
      date: "2024-09-01",
      studentInfo: {
        name: "Jane Smith",
        address: "456 Elm St, Town",
        contactNo: "987-654-3210",
      },
      company: "Innovate Solutions",
      time: "10:00 AM",
      duration: "3.5 hours",
      remarks: "Late",
    },
  ]);

  const handleEdit = (id: number) => {
    console.log("Edit attendance record with ID:", id);
  };

  // Table columns without the Action column
  const columns = [
    { header: "#", key: "id" },
    { header: "Date", key: "date" },
    {
      header: "Student Info",
      key: "studentInfo",
      render: (row: any) => (
        <div className="student-info">
          <p>
            <strong>Name:</strong> {row.studentInfo.name || "N/A"}
          </p>
          <p>
            <strong>Address:</strong> {row.studentInfo.address || "N/A"}
          </p>
          <p>
            <strong>Contact #:</strong> {row.studentInfo.contactNo || "N/A"}
          </p>
        </div>
      ),
    },
    { header: "Company", key: "company" },
    { header: "Time", key: "time" },
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
