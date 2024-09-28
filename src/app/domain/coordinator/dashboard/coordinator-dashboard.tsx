import React, { useEffect, useState } from "react";
import axios from "axios";
import "./coordinator-dashboard.scss";
import { FaBuilding, FaGraduationCap } from "react-icons/fa";
import NewCoordinatorCard from "../../../../shared/components/new-coordinator/new-coordinator";
import Card from "../../../../shared/components/cards/card";
import BarChartCard from "../../../../shared/components/charts/bar-chart";

const CoordinatorDashboard: React.FC = () => {
  const [totalCompanies, setTotalCompanies] = useState<number | null>(null);
  const [totalStudents, setTotalStudents] = useState<number | null>(null);
  const [recentlyAddedStudents, setRecentlyAddedStudents] = useState<
    {
      id: number;
      profilePicture: string;
      name: string;
      registrationDate: string;
    }[]
  >([]);

  useEffect(() => {
    const fetchTotalCompanies = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/count-companies"
        );
        setTotalCompanies(response.data.count);
      } catch (error) {
        console.error("Error fetching total companies:", error);
      }
    };

    const fetchTotalStudents = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/count-students"
        );
        setTotalStudents(response.data.count);
      } catch (error) {
        console.error("Error fetching total students:", error);
      }
    };

    const fetchRecentlyAddedStudents = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/recent-students"
        );
        setRecentlyAddedStudents(response.data.recentStudents);
      } catch (error) {
        console.error("Error fetching recently added students:", error);
      }
    };

    fetchTotalCompanies();
    fetchTotalStudents();
    fetchRecentlyAddedStudents();
  }, []);

  return (
    <div className="dashb">
      <div className="cards-div">
        <Card
          label="Total Companies"
          value={totalCompanies !== null ? totalCompanies.toString() : ""}
          icon={<FaBuilding />}
          width="240px"
          height="110px"
        />
        <Card
          label="Total Students"
          value={totalStudents !== null ? totalStudents.toString() : ""}
          icon={<FaGraduationCap />}
          width="240px"
          height="110px"
        />
      </div>

      <div className="content-wrapper">
        <div className="card-container">
          <h2>Recently Added Students</h2>
          <div className="new-members-list">
            {recentlyAddedStudents.slice(0, 5).map((student) => (
              <NewCoordinatorCard
                key={student.id}
                profilePicture={student.profilePicture}
                name={student.name}
                registrationDate={student.registrationDate}
              />
            ))}
          </div>
        </div>

        {/* Keep BarChartCard within a styled container */}
        <div className="chart-container">
          {" "}
          {/* Retain this container for styling */}
          <BarChartCard />
        </div>
      </div>
    </div>
  );
};

export default CoordinatorDashboard;
