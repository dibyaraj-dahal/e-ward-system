import React, { useEffect, useState } from "react";
import BirthRegistration from "../../pages/BirthRegistration";
import API_URL from "../../api/api";

// 1. Fixed the casing here to match your state logic (changed 'Certificate' to 'certificate')
const TABS = [
  {
    key: "birth_certificate",
    label: "birth certificate List",
    section: "birth_Certificate",
  },
  {
    key: "add_birth_certificate",
    label: "+ Birth Certificate",
    section: "birth_Certificate",
  },
];

function Citizen() {
  const [activeTab, setActiveTab] = useState("birth_certificate");
  const [wards, setWards] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/v1/admin/ward`, {
      method: "GET",
      credentials: "include",
    })
      .then((response) => {
        return response.json().then((data) => {
          if (!response.ok) {
            throw data;
          }
          return data;
        });
      })
      .then((data) => {
        console.log("Submission successful");
        console.log(data.data.ward_list);
        setWards(data.data.ward_list);
        // setOfficers(data.data);
      })
      .catch((err) => {
        console.error("Submission failed:", err);
      });
  }, []);
  return (
    <main className="max-w-6xl mx-auto px-4 py-8 space-y-6">
      <div className="flex gap-1 bg-white p-1 rounded-xl shadow-sm border border-gray-100">
        <div className="flex flex-wrap gap-2">
          <span className="self-center text-xs text-gray-400 font-semibold px-2 uppercase tracking-wide">
            Birth Certificate
          </span>
          {TABS.filter((t) => t.section === "birth_Certificate").map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === tab.key
                  ? "bg-blue-600 text-white shadow"
                  : "text-gray-500 hover:text-gray-700"
              } cursor-pointer`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* 2. This will now match perfectly on initial load and when the tab is clicked */}
      {activeTab === "add_birth_certificate" && (
        <BirthRegistration wards={wards} />
      )}
    </main>
  );
}

export default Citizen;
