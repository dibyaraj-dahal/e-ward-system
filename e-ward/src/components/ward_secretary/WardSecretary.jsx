import React, { useEffect, useState } from "react";
import BirthCertificateTable from "../datavalidation/BirthCertificateTable";
import API_URL from "../../api/api";
import EditBirthRegistrationModal from "../datavalidation/ EditBirthRegistrationModal";
import EditBirthRegistrationWardSecretaryModal from "./EditBirthRegistrationWardSecretaryModal";

const TABS = [
  {
    key: "document_verification",
    label: "कागजात प्रमाणीकरण (Verify Birth Documents)",
    section: "registrar_action",
  },
  {
    key: "forwarded_to_chairperson",
    label: "सिफारिस पठाइएको (Forwarded for Approval)",
    section: "registrar_action",
  },
];

function WardSecretary() {
  const [wards, setWards] = useState([]);
  const [activeTab, setActiveTab] = useState("document_verification");
  const [birthCertificate, setbirthCertificate] = useState([]);
  const [editingBirth, setEditingBirth] = useState(null);
  const [birthCertificateSearch, setbirthCertificateSearch] = useState("");
  const [deleteBirthTarget, setDeleteBirthTarget] = useState(null);

  const filterBirthCertificate = birthCertificate.filter((b) =>
    b.child.child_first_name
      .toLowerCase()
      .includes(birthCertificateSearch.toLowerCase()),
  );
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
    fetch(`${API_URL}/v1/ward-secretary/all`, {
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
  }, []);
  const handleBirthSaved = (updated) => {
    if (!updated) return;
    setbirthCertificate((prev) =>
      prev.map((b) =>
        b?.registration_id === updated.registration_id ? updated : b,
      ),
    );
    setEditingBirth(null);
  };
  return (
    <main className="max-w-6xl mx-auto px-4 py-8 space-y-6">
      <div className="flex gap-1 bg-white p-1 rounded-xl shadow-sm border border-gray-100">
        <div className="flex flex-wrap gap-2">
          <span className="self-center text-xs text-gray-400 font-semibold px-2 uppercase tracking-wide">
            Document Verification
          </span>
          {TABS.filter((t) => t.section === "document_verification").map(
            (tab) => (
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
            ),
          )}
        </div>
      </div>
      {activeTab === "document_verification" && (
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
        <EditBirthRegistrationWardSecretaryModal
          wards={wards}
          birth={editingBirth}
          onClose={() => setEditingBirth(null)}
          onSaved={handleBirthSaved}
        />
      )}
    </main>
  );
}

export default WardSecretary;
