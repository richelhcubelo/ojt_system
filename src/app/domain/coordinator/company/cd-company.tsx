import React, { useState } from "react";
import "./cd-company.scss";
import SearchBar from "../../../../shared/components/searchbar/searchbar"; // Adjust the path as needed
import DataTable from "../../../../shared/components/table/data-table";
import { faEdit, faPlus } from "@fortawesome/free-solid-svg-icons"; // Import both edit and plus icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PrimaryButton from "../../../../shared/components/buttons/primero-button";

const CoordinatorCompany: React.FC = () => {
  const [companyData, setCompanyData] = useState([
    {
      id: 1,
      companyName: "Tech Innovations Inc.",
      address: "789 Tech Park, Silicon Valley",
      mentorInfo: {
        name: "Alice Johnson",
        contactNo: "321-654-0987",
      },
    },
    {
      id: 2,
      companyName: "Creative Solutions LLC",
      address: "101 Creative Blvd, Art City",
      mentorInfo: {
        name: "Bob Smith",
        contactNo: "654-321-9870",
      },
    },
  ]);

  const [showModal, setShowModal] = useState(false); // Added state for modal visibility

  const handleEdit = (id: number) => {
    console.log("Edit company record with ID:", id);
  };

  const handleAddButtonClick = () => {
    setShowModal(true);
  };

  const columns = [
    { header: "#", key: "id" },
    { header: "Company Name", key: "companyName" },
    { header: "Address", key: "address" },
    {
      header: "Mentor Info",
      key: "mentorInfo",
      render: (row: any) => (
        <div className="mentor-info">
          <p data-label="Name:">{row.mentorInfo.name || "N/A"}</p>
          <p data-label="Contact #:">{row.mentorInfo.contactNo || "N/A"}</p>
        </div>
      ),
    },
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
      <h1 className="page-title">Company</h1>
      <h2 className="page-subtitle">Manage Company Information</h2>

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
            buttonText="Add Company"
            handleButtonClick={handleAddButtonClick}
            icon={<FontAwesomeIcon icon={faPlus} />}
          />
        </div>
      </div>

      {/* DataTable rendering the company data */}
      <DataTable columns={columns} data={companyData} />

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

export default CoordinatorCompany;
