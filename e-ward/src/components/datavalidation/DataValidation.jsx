import React, { useEffect, useState } from "react";
import BirthCertificateTable from "./BirthCertificateTable";
import API_URL from "../../api/api";
import EditBirthRegistrationModal from "./ EditBirthRegistrationModal";
import CitizenTable from "./CitizenTable";
import EditCitizen from "./EditCitizen";
const TABS = [
  {
    key: "birth_Certificate",
    label: "birth certificate List",
    section: "birth_Certificate",
  },

  { key: "Citizen", label: "Citizen List", section: "Citizen" },
];

function DataValidation() {
  const [birthCertificate, setbirthCertificate] = useState([]);
  const [activeTab, setActiveTab] = useState("birth_Certificate");
  const [birthCertificateSearch, setbirthCertificateSearch] = useState("");
  const [editingBirth, setEditingBirth] = useState(null);

  const [deleteBirthTarget, setDeleteBirthTarget] = useState(null);

  const [citizen, setCitizen] = useState([]);
  const [editingCitizen, setEditingCitizen] = useState(null);
  const [citizenSearch, setCitizenSearch] = useState("");

  const filterBirthCertificate = birthCertificate.filter((b) =>
    b.child.child_first_name
      .toLowerCase()
      .includes(birthCertificateSearch.toLowerCase()),
  );

  const filterCitizen = citizen.filter((c) =>
    c.user_name.toLowerCase().includes(citizenSearch.toLowerCase()),
  );

  // const handleBirthSaved = (updated) => {
  //   setbirthCertificate((prev) =>
  //     prev.map((b) =>
  //       b.registration_id == updated.registration_id ? updated : b,
  //     ),
  //   );
  //   setEditingBirth(null);
  // };
  // const handleCitizenSaved = (updated) => {
  //   setCitizen((prev) =>
  //     prev.map((b) =>
  //       b.registration_id == updated.registration_id ? updated : b,
  //     ),
  //   );
  //   setEditingBirth(null);
  // };
  const handleBirthSaved = (updated) => {
    if (!updated) return;
    setbirthCertificate((prev) =>
      prev.map((b) =>
        b?.registration_id === updated.registration_id ? updated : b,
      ),
    );
    setEditingBirth(null);
  };

  const handleCitizenSaved = (updated) => {
    if (!updated) return;
    setCitizen((prev) =>
      prev.map((c) => {
        const currentId = c?.registration_id || c?.id || c?.user_id;
        const updatedId =
          updated?.registration_id || updated?.id || updated?.user_id;

        return currentId === updatedId ? updated : c;
      }),
    );
    setEditingCitizen(null);
  };
  useEffect(() => {
    fetch(`${API_URL}/v1/birth-registration/all`, {
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
        console.log(data.data);
        setbirthCertificate(data.data);
        // setOfficers(data.data);
      })
      .catch((err) => {
        console.error("Submission failed:", err);
      });
    fetch(`${API_URL}/v1/users`, {
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
        console.log(data.data.user_list);
        setCitizen(data.data.user_list);
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
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === tab.key ? "bg-blue-600 text-white shadow" : "text-gray-500 hover:text-gray-700"} cursor-pointer`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="flex gap-1 bg-white p-1 rounded-xl shadow-sm border border-gray-100">
          <span className="self-center text-xs text-gray-400 font-semibold px-2 uppercase tracking-wide">
            Citizen
          </span>
          {TABS.filter((t) => t.section === "Citizen").map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === tab.key ? "bg-indigo-600 text-white shadow" : "text-gray-500 hover:text-gray-700"} cursor-pointer`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      {activeTab === "birth_Certificate" && (
        <div className="bg-white rounded-xl shadow-md">
          <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row gap-3 sm:items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-800">
              All Wards Birth Certificate
            </h2>
            <input
              type="text"
              value={birthCertificateSearch}
              onChange={(e) => setbirthCertificateSearch(e.target.value)}
              placeholder="pleas enter"
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm w-full sm:w-64 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="p-4">
            <BirthCertificateTable
              birth={filterBirthCertificate}
              onEdit={setEditingBirth}
              onDeleteRequest={setDeleteBirthTarget}
            />
          </div>
        </div>
      )}
      {editingBirth && (
        <EditBirthRegistrationModal
          birth={editingBirth}
          onClose={() => setEditingBirth(null)}
          onSaved={handleBirthSaved}
        />
      )}

      {activeTab === "Citizen" && (
        <div className="bg-white rounded-xl shadow-md">
          <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row gap-3 sm:items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-800">All Citizen</h2>
            <input
              type="text"
              value={citizenSearch}
              onChange={(e) => setbirthCertificateSearch(e.target.value)}
              placeholder="pleas enter"
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm w-full sm:w-64 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="p-4">
            <CitizenTable
              citizen={filterCitizen}
              onEdit={setEditingCitizen}
              onDeleteRequest={setDeleteBirthTarget}
            />
          </div>
        </div>
      )}
      {editingCitizen && (
        <EditCitizen
          citizen={editingCitizen}
          onClose={() => setEditingCitizen(null)}
          onSaved={handleCitizenSaved}
        />
      )}
    </main>
  );
}

export default DataValidation;
