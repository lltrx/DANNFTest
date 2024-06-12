import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavBar } from "../../components/dash/";
import {
  AdminSettingsPage,
  AdminBikesPage,
  AdminClientsPage,
  HomeAdminPage,
} from "./";

export default function AdminPage() {
  const token = localStorage.getItem("auth");
  const [selectedSection, setSelectedSection] = useState("home");
  const [userStats, setUserStats] = useState({
    totalUsers: 0,
    paidUsers: 0,
    totalBikes: 0,
    totalAmount: 0,
  });
  const [clients, setClients] = useState([]);
  useEffect(() => {
    const fetchUserStats = async () => {
      try {
        const response = await axios.get("http://localhost:3003/userStats", {
          headers: {
            Authorization: token,
          },
        });
        setUserStats(response.data);
        console.log("User stats:", response.data);
      } catch (error) {
        console.error("Error fetching user stats:", error);
      }
    };

    fetchUserStats();
  }, [token]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get("http://localhost:3003/users", {
          headers: {
            Authorization: token,
          },
        });
        setClients(response.data.users);
        console.log("Clients:", response.data.users);
      } catch (error) {
        console.error("Error fetching clients:", error);
      }
    };

    fetchClients();
  }, [token]);

  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };

  return (
    <div className="flex flex-col h-screen w-screen">
      <NavBar
        onSectionChange={handleSectionChange}
        selectedSection={selectedSection}
      />
      <div className="flex flex-col items-center justify-center w-full">
        {selectedSection === "home" && (
          <section className="flex flex-col items-center justify-center w-full mt-40 mr-[950px]">
            <HomeAdminPage userStats={userStats} />
          </section>
        )}
        {selectedSection === "clients" && (
          <section className="flex flex-col items-center justify-center w-full mt-40 mr-[950px]">
            <AdminClientsPage clients={clients} />
          </section>
        )}
        {selectedSection === "bikes" && (
          <section className="flex flex-col items-center justify-center w-full mt-40 mr-[950px]">
            <AdminBikesPage userStats={userStats} />
          </section>
        )}
        {selectedSection === "settings" && (
          <section className="flex flex-col items-center justify-center w-full mt-40 mr-[950px]">
            <AdminSettingsPage clients={clients} />
          </section>
        )}
      </div>
    </div>
  );
}
