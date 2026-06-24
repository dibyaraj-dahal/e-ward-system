import React, { useEffect, useState } from "react";
import WardTable from "./WardTable";
import AddWardForm from "./AddWardForm";
import OfficerTable from "./OfficerTable";
import AssignOfficerForm from "./AssignOfficerForm";
import API_URL from "../../api/api";
import EditWardModal from "./EditWardModal";
import EditOfficerModal from "./EditOfficerModal";
import ConfirmDeleteModal from "./ConfirmDeleteModal";
const TABS = [
  { key: "wards", label: "वडा सूची (Ward List)", section: "ward" },
  { key: "add-ward", label: "+ नयाँ वडा (Add Ward)", section: "ward" },
  { key: "officers", label: "अधिकृत सूची (Officer List)", section: "officer" },
  {
    key: "add-officer",
    label: "+ अधिकृत नियुक्त (Assign)",
    section: "officer",
  },
];
const MOCK_WARDS = [
  {
    ward_id: "a1b2c3d4",
    ward_name: "Central Ward",
    ward_no: 1,
    ward_municipality: "Kathmandu",
    ward_district: "Kathmandu",
    ward_province: "Bagmati",
    ward_contact_number: "9801234567",
    ward_email: "ward1@kathmandu.gov.np",
  },
  {
    ward_id: "e5f6g7h8",
    ward_name: "North Ward",
    ward_no: 3,
    ward_municipality: "Lalitpur",
    ward_district: "Lalitpur",
    ward_province: "Bagmati",
    ward_contact_number: "9807654321",
    ward_email: "ward3@lalitpur.gov.np",
  },
];

const MOCK_OFFICERS = [
  {
    user_id: 1,
    user_name: "ram_prasad",
    user_phone_number: "9841000001",
    user_citizenship_number: "12-01-0001",
    user_province: "Bagmati",
    user_district: "Kathmandu",
    user_municipality: "Kathmandu",
    user_ward_number: 1,
    user_role: "wardchairperson",
  },
  {
    user_id: 2,
    user_name: "sita_kumari",
    user_phone_number: "9841000002",
    user_citizenship_number: "12-01-0002",
    user_province: "Bagmati",
    user_district: "Kathmandu",
    user_municipality: "Kathmandu",
    user_ward_number: 1,
    user_role: "wardsecretary",
  },
  {
    user_id: 3,
    user_name: "hari_bahadur",
    user_phone_number: "9841000003",
    user_citizenship_number: "12-01-0003",
    user_province: "Bagmati",
    user_district: "Lalitpur",
    user_municipality: "Lalitpur",
    user_ward_number: 3,
    user_role: "datavalidationofficer",
  },
];
function Admin() {
  const [wards, setWards] = useState([]);
  const [activeTab, setActiveTab] = useState("wards");
  const [editingWard, setEditingWard] = useState(null);
  const [editingOfficer, setEditingOfficer] = useState(null);

  const [officers, setOfficers] = useState([]);
  const handleAddWard = (w) => {
    setWards((p) => [w, ...p]);
    setActiveTab("wards");
  };

  const handleAddOfficer = (o) => {
    setOfficers((p) => [o, ...p]);
    setActiveTab("officers");
  };

  const [wardSearch, setWardSearch] = useState("");

  const [deleteWardTarget, setDeleteWardTarget] = useState(null);
  const [deleteOfficerTarget, setDeleteOfficerTarget] = useState(null);
  const [deleting, setDeleting] = useState(false);

  const currentSection =
    TABS.find((t) => t.key === activeTab)?.section ?? "ward";

  const filteredWards = wards.filter(
    (w) =>
      w.ward_name.toLowerCase().includes(wardSearch.toLowerCase()) ||
      w.ward_municipality.toLowerCase().includes(wardSearch.toLowerCase()) ||
      w.ward_district.toLowerCase().includes(wardSearch.toLowerCase()),
  );
  const handleWardSaved = (updated) => {
    setWards((prev) =>
      prev.map((w) => (w.ward_id === updated.ward_id ? updated : w)),
    );
    setEditingWard(null);
    showPanelToast("Ward updated successfully!", "success");
  };
  const handleOfficerSaved = (updated) => {
    setOfficers((prev) =>
      prev.map((o) => (o.user_id === updated.user_id ? updated : o)),
    );
    setEditingOfficer(null);
    showPanelToast("Officer updated successfully!", "success");
  };
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

    fetch(`${API_URL}/v1/admin/users/officers`, {
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
        setOfficers(data.data);
      })
      .catch((err) => {
        console.error("Submission failed:", err);
      });
  }, []);
  const confirmDeleteWard = async () => {
    setDeleting(true);
    try {
      // Replace with: DELETE /v1/admin/ward/{deleteWardTarget.ward_id}
      await new Promise((r) => setTimeout(r, 600));
      setWards((prev) =>
        prev.filter((w) => w.ward_id !== deleteWardTarget.ward_id),
      );
      setDeleteWardTarget(null);
      showPanelToast("Ward removed successfully!", "success");
    } finally {
      setDeleting(false);
    }
  };
  const confirmDeleteOfficer = async () => {
    setDeleting(true);
    try {
      // Replace with: DELETE /v1/admin/user/{deleteOfficerTarget.user_id}
      await new Promise((r) => setTimeout(r, 600));
      setOfficers((prev) =>
        prev.filter((o) => o.user_id !== deleteOfficerTarget.user_id),
      );
      setDeleteOfficerTarget(null);
      showPanelToast("Officer removed successfully!", "success");
    } finally {
      setDeleting(false);
    }
  };
  return (
    <main className="max-w-6xl mx-auto px-4 py-8 space-y-6">
      <div className="flex gap-1 bg-white p-1 rounded-xl shadow-sm border border-gray-100">
        <div className="flex flex-wrap gap-2">
          <span className="self-center text-xs text-gray-400 font-semibold px-2 uppercase tracking-wide">
            Ward
          </span>
          {TABS.filter((t) => t.section === "ward").map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === tab.key ? "bg-blue-600 text-white shadow" : "text-gray-500 hover:text-gray-700"}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="flex gap-1 bg-white p-1 rounded-xl shadow-sm border border-gray-100">
          <span className="self-center text-xs text-gray-400 font-semibold px-2 uppercase tracking-wide">
            Officer
          </span>
          {TABS.filter((t) => t.section === "officer").map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === tab.key ? "bg-indigo-600 text-white shadow" : "text-gray-500 hover:text-gray-700"}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      {activeTab == "wards" && (
        <div className="bg-white rounded-xl shadow-md">
          <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row gap-3 sm:items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-800">
              सबै वडाहरू (All Wards)
            </h2>
            <input
              type="text"
              value={wardSearch}
              onChange={(e) => setWardSearch(e.target.value)}
              placeholder="नाम, जिल्ला वा नगरपालिका खोज्नुहोस्…"
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm w-full sm:w-64 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="p-4">
            <WardTable
              wards={filteredWards}
              onEdit={setEditingWard}
              onDeleteRequest={setDeleteWardTarget}
            />
          </div>
        </div>
      )}
      {activeTab === "add-ward" && <AddWardForm onSuccess={handleAddWard} />}

      {activeTab === "officers" && (
        <div className="bg-white rounded-xl shadow-md">
          <OfficerTable
            officers={officers}
            onEdit={setEditingOfficer}
            onDeleteRequest={setDeleteOfficerTarget}
            wards={wards}
          />
        </div>
      )}
      {activeTab === "add-officer" && (
        <AssignOfficerForm wards={wards} onSuccess={handleAddOfficer} />
      )}
      {editingWard && (
        <EditWardModal
          ward={editingWard}
          onClose={() => setEditingWard(null)}
          onSaved={handleWardSaved}
        />
      )}
      {editingOfficer && (
        <EditOfficerModal
          officer={editingOfficer}
          wards={wards}
          onClose={() => setEditingOfficer(null)}
          onSaved={handleOfficerSaved}
        />
      )}
      <ConfirmDeleteModal
        open={!!deleteWardTarget}
        title="वडा हटाउनुहोस्? (Delete Ward?)"
        description={
          deleteWardTarget
            ? `"${deleteWardTarget.ward_name}" (Ward ${deleteWardTarget.ward_no}) लाई स्थायी रूपमा हटाइनेछ। यो कार्य फिर्ता गर्न सकिँदैन।`
            : ""
        }
        onCancel={() => setDeleteWardTarget(null)}
        onConfirm={confirmDeleteWard}
        deleting={deleting}
      />
      <ConfirmDeleteModal
        open={!!deleteOfficerTarget}
        title="अधिकृत हटाउनुहोस्? (Delete Officer?)"
        description={
          deleteOfficerTarget
            ? `"${deleteOfficerTarget.user_name}" लाई वडा ${deleteOfficerTarget.user_ward_number} बाट हटाइनेछ। यो कार्य फिर्ता गर्न सकिँदैन।`
            : ""
        }
        onCancel={() => setDeleteOfficerTarget(null)}
        onConfirm={confirmDeleteOfficer}
        deleting={deleting}
      />
    </main>
  );
}

export default Admin;
