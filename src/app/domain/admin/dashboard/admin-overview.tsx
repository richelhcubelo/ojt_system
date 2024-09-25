import React, { useEffect, useState } from "react";
import axios from "axios";
import "./admin-overview.scss";
import {
  FaUsers,
  FaGraduationCap,
  FaBriefcase,
  FaBuilding,
} from "react-icons/fa";
import NewCoordinatorCard from "../../../../shared/components/new-coordinator/new-coordinator";
import { ResponsiveContainer } from "recharts";
import Card from "../../../../shared/components/cards/card";
import DonutChartCard from "../../../../shared/components/charts/donut-chart";

const Overview: React.FC = () => {
  const [totalCoordinators, setTotalCoordinators] = useState<number | null>(
    null
  );
  const [totalStudents, setTotalStudents] = useState<number | null>(null);
  const [totalPrograms, setTotalPrograms] = useState<number | null>(null);
  const [totalCompanies, setTotalCompanies] = useState<number | null>(null);
  const [recentlyAddedCoordinators, setRecentlyAddedCoordinators] = useState<
    {
      id: number;
      profilePicture: string;
      name: string;
      registrationDate: string;
    }[]
  >([]);

  useEffect(() => {
    const fetchTotalCoordinators = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/count-coordinators"
        );
        setTotalCoordinators(response.data.count);
      } catch (error) {
        console.error("Error fetching total coordinators:", error);
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

    const fetchTotalPrograms = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/count-programs"
        );
        setTotalPrograms(response.data.count);
      } catch (error) {
        console.error("Error fetching total programs:", error);
      }
    };

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

    const fetchRecentlyAddedCoordinators = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/recent-coordinators"
        );
        setRecentlyAddedCoordinators(response.data.recentCoordinators);
      } catch (error) {
        console.error("Error fetching recently added coordinators:", error);
      }
    };

    fetchTotalCoordinators();
    fetchTotalStudents();
    fetchTotalPrograms();
    fetchTotalCompanies();
    fetchRecentlyAddedCoordinators();
  }, []);

  return (
    <div className="overview">
      <div className="cards-div">
        <Card
          label="Total Coordinators"
          value={totalCoordinators !== null ? totalCoordinators.toString() : ""}
          icon={<FaUsers />}
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
        <Card
          label="Total Programs"
          value={totalPrograms !== null ? totalPrograms.toString() : ""}
          icon={<FaBriefcase />}
          width="240px"
          height="110px"
        />
        <Card
          label="Total Companies"
          value={totalCompanies !== null ? totalCompanies.toString() : ""}
          icon={<FaBuilding />}
          width="240px"
          height="110px"
        />
      </div>

      <div className="content-wrapper">
        <div className="card-container">
          <h2>Recently Added Coordinators </h2>

          <div className="new-members-list">
            {recentlyAddedCoordinators.slice(0, 5).map((coordinator) => (
              <NewCoordinatorCard
                key={coordinator.id}
                profilePicture={coordinator.profilePicture}
                name={coordinator.name}
                registrationDate={coordinator.registrationDate}
              />
            ))}
          </div>
        </div>

        <div className="chart-container">
          <h2>Program-wise Student Distribution</h2>
          <ResponsiveContainer width="100%" height={400}>
            <DonutChartCard />
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Overview;
