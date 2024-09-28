import React, { useState } from "react";
import "./cd-student.scss";
import SearchBar from "../../../../shared/components/searchbar/searchbar"; // Adjust the path as needed
import DataTable from "../../../../shared/components/table/data-table";
import { faEdit, faPlus } from "@fortawesome/free-solid-svg-icons"; // Import both edit and plus icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PrimaryButton from "../../../../shared/components/buttons/primero-button";

const CoordinatorStudent: React.FC = () => {
  const [studentData, setStudentData] = useState([
    {
      id: 1,
      studentId: "2023-001",
      studentInfo: {
        name: "John Doe",
        address: "123 Main St, City",
        contactNo: "123-456-7890",
      },
      program: "BS Computer Science",
      schoolYear: "2023-2024",
    },
    {
      id: 2,
      studentId: "2023-002",
      studentInfo: {
        name: "Jane Smith",
        address: "456 Elm St, Town",
        contactNo: "987-654-3210",
      },
      program: "BS Information Technology",
      schoolYear: "2023-2024",
    },
  ]);

  const [showModal, setShowModal] = useState(false); // Added state for modal visibility

  const handleEdit = (id: number) => {
    console.log("Edit student record with ID:", id);
  };

  const handleAddButtonClick = () => {
    setShowModal(true);
  };

  const columns = [
    { header: "#", key: "id" },
    { header: "Student ID", key: "studentId" },
    {
      header: "Student Info",
      key: "studentInfo",
      render: (row: any) => (
        <div className="student-info">
          <p data-label="Name:">{row.studentInfo.name || "N/A"}</p>
          <p data-label="Address:">{row.studentInfo.address || "N/A"}</p>
          <p data-label="Contact #:">{row.studentInfo.contactNo || "N/A"}</p>
        </div>
      ),
    },
    { header: "Program", key: "program" },
    { header: "S.Y.", key: "schoolYear" },
    {
      header: "Action",
      key: "action",
      render: (row: any) => (
        <div className="action-icons">
          <FontAwesomeIcon
            icon={faEdit}
            className="edit-icon"
            onClick={() => handleEdit(row.id)}
          />
        </div>
      ),
    },
  ];

  return (
    <div className="dashboard-page">
      <h1 className="page-title">Student Records</h1>
      <h2 className="page-subtitle">Manage Student Attendance</h2>

      {/* SearchBar */}
      <div className="controls-container">
        <div className="search-bar-container">
          <SearchBar
            placeholder="Search"
            onSearch={(query) => console.log(query)}
          />
        </div>
        <div className="add-button-container">
          <PrimaryButton
            buttonText="Add Student"
            handleButtonClick={handleAddButtonClick}
            icon={<FontAwesomeIcon icon={faPlus} />}
          />
        </div>
      </div>

      {/* DataTable rendering the student data */}
      <DataTable columns={columns} data={studentData} />

      {/* Optional Modal Component */}
      {showModal && (
        <div className="modal">
          {/* Modal content goes here */}
          <button onClick={() => setShowModal(false)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default CoordinatorStudent;
