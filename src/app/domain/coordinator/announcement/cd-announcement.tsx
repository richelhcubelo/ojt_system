import React, { useState } from "react";
import AnnouncementCard from "../../../../shared/components/cards/announcemet-card";
import { faPlus } from "@fortawesome/free-solid-svg-icons"; // Import plus icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PrimaryButton from "../../../../shared/components/buttons/primero-button";
import SearchBar from "../../../../shared/components/searchbar/searchbar"; // Import SearchBar

const CoordinatorAnnouncement: React.FC = () => {
  const [showModal, setShowModal] = useState(false); // State for modal visibility

  const handleAddButtonClick = () => {
    setShowModal(true);
  };

  return (
    <div className="dashboard-page">
      <h1 className="page-title">Announcement</h1>
      <h2 className="page-subtitle">Manage Announcements</h2>

      {/* Controls Container */}
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
            handleButtonClick={handleAddButtonClick}
            icon={<FontAwesomeIcon icon={faPlus} />}
          />
        </div>
      </div>

      {/* Example Announcement Card */}
      <AnnouncementCard
        title="Reminder"
        content={`To all students currently undergoing OJT at ABC Company, USA:\n\nPlease be informed that I will be visiting ABC Company on December 25, 2024, at 3:00 PM to check on your progress. Be prepared for the visit.`}
        datePosted="November 01, 2024"
      />
    </div>
  );
};

export default CoordinatorAnnouncement;
