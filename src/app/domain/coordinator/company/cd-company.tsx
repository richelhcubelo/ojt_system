import React, { useState } from "react";
import "./cd-company.scss";
import SearchBar from "../../../../shared/components/searchbar/searchbar"; // Adjust the path as needed
import DataTable from "../../../../shared/components/table/data-table";
import { faEdit, faPlus, faQrcode } from "@fortawesome/free-solid-svg-icons"; // Added faQrcode
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PrimaryButton from "../../../../shared/components/buttons/primero-button";
import Modal from "../../../../shared/components/modals/modal";
import NameInputField from "../../../../shared/components/fields/unif";

import SecondaryButton from "../../../../shared/components/buttons/secondary-button";
import QRCode from "qrcode.react"; // Make sure to install this package
import QRCodeComponent from "../../../../shared/components/qrcode/qr-code";

const CoordinatorCompany: React.FC = () => {
  const [companyData, setCompanyData] = useState([
    {
      id: 1,
      companyInfo: {
        name: "Tech Innovations Inc.",
        address: "789 Tech Park, Silicon Valley",
      },
      mentorInfo: {
        name: "Alice Johnson",
        contactNo: "321-654-0987",
      },
    },
    {
      id: 2,
      companyInfo: {
        name: "Creative Solutions LLC",
        address: "101 Creative Blvd, Art City",
      },
      mentorInfo: {
        name: "Bob Smith",
        contactNo: "654-321-9870",
      },
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [currentModal, setCurrentModal] = useState<string | null>(null);
  const [formData, setFormData] = useState({});
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [mentorName, setMentorName] = useState("");
  const [qrCodeData, setQRCodeData] = useState<string | null>(null);

  const handleEdit = (id: number) => {
    console.log("Edit company record with ID:", id);
  };

  const handleAddButtonClick = () => {
    setShowModal(true);
    setCurrentModal("details");
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));

    switch (field) {
      case "companyName":
        setFirstName(e.target.value);
        break;
      case "address":
        setLastName(e.target.value);
        break;
      case "mentorName":
        setMentorName(e.target.value);
        break;
      case "contactNo":
        setEmail(e.target.value);
        break;
      default:
        break;
    }
  };

  const columns = [
    { header: "#", key: "id" },
    {
      header: "Company Info",
      key: "companyInfo",
      render: (row: any) => (
        <div className="company-info">
          <p>
            <strong>Company Name:</strong> {row.companyInfo.name || "N/A"}
          </p>
          <p>
            <strong>Address:</strong> {row.companyInfo.address || "N/A"}
          </p>
        </div>
      ),
    },
    {
      header: "Mentor Info",
      key: "mentorInfo",
      render: (row: any) => (
        <div className="mentor-info">
          <p>
            <strong>Mentor Name:</strong> {row.mentorInfo.name || "N/A"}
          </p>
          <p>
            <strong>Contact #:</strong> {row.mentorInfo.contactNo || "N/A"}
          </p>
        </div>
      ),
    },
    {
      header: "QR Code",
      key: "qrCode",
      render: () => (
        <div className="qr-code">
          <FontAwesomeIcon icon={faQrcode} size="2x" />
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

  const handleModalCancel = () => {
    setShowModal(false);
  };

  const handleModalSave = () => {
    // Instead of closing the modal, transition to the next one
    setCurrentModal("credentials");
  };

  const handleReturnToRegister = () => {
    // Implement the logic for returning to register
  };

  const handleGenerateQRCode = () => {
    const qrContent = `Company-${Date.now()}`;
    setQRCodeData(qrContent);
  };

  const handleRegisterQRCode = () => {
    console.log("Registering QR code:", qrCodeData);
    setShowModal(false);
    setQRCodeData(null);
  };

  return (
    <div className="dashboard-page">
      <h1 className="page-title">Company</h1>
      <h2 className="page-subtitle">Manage Company Information</h2>

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

      <DataTable columns={columns} data={companyData} />

      <Modal
        show={showModal && currentModal === "details"}
        title=""
        message=""
        onCancel={handleModalCancel}
        onConfirm={handleModalSave}
        size="large"
        cancelButtonText="Cancel"
        confirmButtonText="Next"
      >
        <div className="modal-custom-content">
          <div className="modal-custom-header-company">
            <div className="header-left">
              <h2 className="main-header">Register New Company</h2>
              <h3 className="sub-header">Company Details</h3>
            </div>
          </div>
          <div className="modal--body">
            <div className="modal-bodyleft">
              <h4>Company Info</h4>
              <div className="naming">
                <label htmlFor="companyName">Name</label>
              </div>
              <NameInputField
                type="text"
                id="companyName"
                value={companyName}
                onChange={(e) => handleInputChange(e, "companyName")}
              />

              <label htmlFor="address">Address</label>
              <NameInputField
                type="text"
                id="address"
                value={address}
                onChange={(e) => handleInputChange(e, "address")}
              />
            </div>

            <div className="modal-bodyright">
              <h4>Mentor Info</h4>
              <div className="left-components">
                <label htmlFor="mentorName">Mentor Name</label>
                <NameInputField
                  type="text"
                  id="mentorName"
                  value={mentorName}
                  onChange={(e) => handleInputChange(e, "mentorName")}
                />

                <label htmlFor="contact">Contact #</label>
                <NameInputField
                  type="text"
                  id="contact"
                  value={contact}
                  onChange={(e) => handleInputChange(e, "contact")}
                />
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        show={showModal && currentModal === "credentials"}
        title=""
        message=""
        onCancel={() => setCurrentModal("details")} // Go back to the first modal
        onConfirm={handleRegisterQRCode}
        size="medlarge"
        cancelButtonText="Back"
        confirmButtonText="Register"
      >
        <div className="modal-custom-content">
          <div className="modal-custom-header-admin-coordinator">
            <div className="header-left">
              <h2 className="main-header">Register QR Code</h2>
              <h3 className="sub-header">
                Generate and Download Unique QR code
              </h3>
            </div>
          </div>
          <div className="credentials-modal-container">
            <div className="credentials-modal-body">
              <PrimaryButton
                buttonText="Generate QR Code"
                handleButtonClick={handleGenerateQRCode} // Fix: Use the correct function
                icon={<FontAwesomeIcon icon={faPlus} />}
              />
              {qrCodeData && (
                <div className="qr-code-container">
                  <p>QR Code</p>
                  <QRCodeComponent value={qrCodeData} size={200} />
                </div>
              )}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CoordinatorCompany;
