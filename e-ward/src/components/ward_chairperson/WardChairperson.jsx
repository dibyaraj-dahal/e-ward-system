import React, { useState } from "react";
const TABS = [
  {
    key: "pending_approvals",
    label: "स्वीकृतिको पर्खाइमा (Pending Signatures)",
    section: "chairperson_action",
  },
  {
    key: "issued_certificates",
    label: "जारी गरिएका प्रमाणपत्र (Issued Certificates)",
    section: "chairperson_action",
  },
];
function WardChairperson() {
  const [activeTab, setActiveTab] = useState("pending_approvals");
  return (
    <main className="max-w-6xl mx-auto px-4 py-8 space-y-6">
      <div className="flex gap-1 bg-white p-1 rounded-xl shadow-sm border border-gray-100">
        <div className="flex flex-wrap gap-2">
          <span className="self-center text-xs text-gray-400 font-semibold px-2 uppercase tracking-wide">
            Pending Approvals
          </span>
          {TABS.filter((t) => t.section === "pending_approvals").map((tab) => (
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
    </main>
  );
}

export default WardChairperson;
