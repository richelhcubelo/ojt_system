import React, { useState } from "react";
import "./admin-program.scss";
import SearchBar from "../../../../shared/components/searchbar/searchbar"; // Adjust the path as needed
import PrimaryButton from "../../../../shared/components/buttons/primero-button";
import DataTable from "../../../../shared/components/table/data-table";
import { faPlus, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "../../../../shared/components/modals/modal";
import NameInputField from "../../../../shared/components/fields/unif";

const handleEdit = (id: number) => {
  // Implement your edit logic here
};

const Program: React.FC = () => {
  const [programs, setPrograms] = useState([
    {
      id: 1,
      program: "BSCS",
      description: "Bachelor of Science in Computer Science",
      requiredDuration: "320 hrs",
    },
    {
      id: 2,
      program: "BS Information Technology",
      description: "Bachelor of Science in Information Technology",
      requiredDuration: "350 hrs",
    },
    {
      id: 3,
      program: "BEEd",
      description: "Bachelor of Elementary Education",
      requiredDuration: "40 days",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [program, setProgram] = useState("");
  const [description, setDescription] = useState("");
  const [requiredDuration, setRequiredDuration] = useState(""); // New state for required duration

  const handleAddButtonClick = () => {
    setShowModal(true);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    if (field === "program") {
      setProgram(e.target.value);
    } else if (field === "description") {
      setDescription(e.target.value);
    } else if (field === "requiredDuration") {
      // Handle required duration input
      setRequiredDuration(e.target.value);
    }
  };

  const handleModalCancel = () => {
    setShowModal(false);
    setProgram("");
    setDescription("");
    setRequiredDuration(""); // Reset required duration
  };

  const handleModalSave = () => {
    const newProgram = {
      id: programs.length + 1,
      program,
      description,
      requiredDuration, // Use the new state value
    };
    setPrograms([...programs, newProgram]);
    handleModalCancel();
  };

  // Table columns
  const columns = [
    { header: "ID", key: "id" },
    { header: "Program", key: "program" },
    { header: "Description", key: "description" },
    { header: "Required Duration", key: "requiredDuration" },
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
      <h1 className="page-title">Program</h1>
      <h2 className="page-subtitle">Manage Academic Program</h2>

      {/* Add the SearchBar and Add Button side by side */}
      <div className="controls-container">
        <div className="search-bar-container">
          <SearchBar
            placeholder="Search"
            onSearch={(query) => console.log(query)}
          />
        </div>

        <div className="add-button-container">
          <PrimaryButton
            buttonText="Add Program"
            handleButtonClick={handleAddButtonClick}
            icon={<FontAwesomeIcon icon={faPlus} />}
          />
        </div>
      </div>

      {/* Render the DataTable */}
      <DataTable columns={columns} data={programs} />

      {/* Modal for adding a new program */}
      <Modal
        show={showModal}
        message="Please fill in the details below:"
        title=""
        onCancel={handleModalCancel}
        onConfirm={handleModalSave}
        cancelButtonText="Cancel"
        confirmButtonText="Add"
      >
        <div className="modal-custom-header-admin-program">
          <div className="header-left">
            <h2 className="main-header">Register New Program</h2>
            <h3 className="sub-header">Program Details</h3>
          </div>
        </div>

        <div className="modal-body">
          <div className="modal-program">
            <label htmlFor="program">Program</label>
            <NameInputField
              type="text"
              id="program"
              value={program}
              onChange={(e) => handleInputChange(e, "program")}
            />
            <div className="description-modal">
              <label htmlFor="description">Description</label>
            </div>
            <NameInputField
              type="text"
              id="description"
              value={description}
              onChange={(e) => handleInputChange(e, "description")}
            />

            {/* New Required Duration Input Field */}
            <label htmlFor="requiredDuration">Duration</label>
            <NameInputField
              type="text"
              id="requiredDuration"
              value={requiredDuration}
              onChange={(e) => handleInputChange(e, "requiredDuration")}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Program;
