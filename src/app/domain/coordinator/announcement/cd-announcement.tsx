import React, { useState, useEffect } from "react";
import AnnouncementCard from "../../../../shared/components/cards/announcemet-card";
import { faPlus } from "@fortawesome/free-solid-svg-icons"; // Import plus icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PrimaryButton from "../../../../shared/components/buttons/primero-button";
import SearchBar from "../../../../shared/components/searchbar/searchbar"; // Import SearchBar
import Modal from "../../../../shared/components/modals/modal";
import Dropdown from "../../../../shared/components/dropdowns/dropdown";
import NameInputField from "../../../../shared/components/fields/unif";

interface Announcement {
  title: string;
  content: string;
  datePosted: string;
}

const CoordinatorAnnouncement: React.FC = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [newAnnouncement, setNewAnnouncement] = useState({
    title: "",
    content: "",
    type: "",
  });

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const fetchAnnouncements = async () => {
    const mockAnnouncements: Announcement[] = [
      {
        title: "Reminder",
        content:
          "To all students currently undergoing OJT at ABC Company, USA:\n\nPlease be informed that I will be visiting ABC Company on December 25, 2024, at 3:00 PM to check on your progress. Be prepared for the visit.",
        datePosted: "November 01, 2024",
      },
      {
        title: "Urgent Announcement",
        content:
          "Attention all OJT students:\n\nDue to unforeseen circumstances, the deadline for submitting your mid-term reports has been extended to December 15, 2024. Please ensure you take advantage of this extension to provide comprehensive and well-prepared reports.",
        datePosted: "November 15, 2024",
      },
    ];
    setAnnouncements(mockAnnouncements);
  };

  const handleAddAnnouncementClick = () => {
    setShowModal(true);
  };

  const handleModalCancel = () => {
    setShowModal(false);
    setNewAnnouncement({ title: "", content: "", type: "" });
  };

  const handleModalSave = () => {
    console.log("Saving new announcement:", newAnnouncement);
    setShowModal(false);
    setNewAnnouncement({ title: "", content: "", type: "" });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: string
  ) => {
    setNewAnnouncement({ ...newAnnouncement, [field]: e.target.value });
  };

  const announcementTypes = [
    "General Announcement",
    "Reminder",
    "Urgent Announcement",
    "Policy Update",
  ];

  return (
    <div className="dashboard-page">
      <h1 className="page-title">Announcement</h1>
      <h2 className="page-subtitle">Manage Announcements</h2>

      <div className="controls-container">
        <div className="search-bar-container">
          <SearchBar
            placeholder="Search"
            onSearch={(query) => console.log(query)}
          />
        </div>

        <div className="add-button-container">
          <PrimaryButton
            buttonText="Add Announcement"
            handleButtonClick={handleAddAnnouncementClick}
            icon={<FontAwesomeIcon icon={faPlus} />}
          />
        </div>
      </div>

      <div className="announcement-cards-container">
        {announcements.map((announcement, index) => (
          <AnnouncementCard
            key={index}
            title={announcement.title}
            content={announcement.content}
            datePosted={announcement.datePosted}
          />
        ))}
      </div>

      <Modal
        show={showModal}
        message="Please fill in the details below:"
        title=""
        onCancel={handleModalCancel}
        onConfirm={handleModalSave}
        size="medlarge"
        cancelButtonText="Cancel"
        confirmButtonText="Add"
      >
        <div className="modal-custom-header-admin-program">
          <div className="header-left">
            <h2 className="main-header">Create New Announcement</h2>
            <h3 className="sub-header">Announcement Details</h3>
          </div>
        </div>

        <div className="modalbody">
          <div className="modal-announcementt">
            <label htmlFor="type">Announcement Type</label>
            <Dropdown
              options={announcementTypes}
              value={newAnnouncement.type}
              onChange={(value: string) =>
                setNewAnnouncement({ ...newAnnouncement, type: value })
              }
            />

            <label htmlFor="content">Content</label>
            {/* Replace textarea with NameInputField */}
            <NameInputField
              type="textarea"
              id="content"
              value={newAnnouncement.content}
              onChange={(e) => handleInputChange(e, "content")}
              rows={5} // Set rows as needed
              label="" // You can add a label if desired
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CoordinatorAnnouncement;
