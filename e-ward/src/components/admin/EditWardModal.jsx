import React, { useState } from "react";
import WardForm from "./WardForm";
import API_URL from "../../api/api";
const initialWardForm = {
  ward_name: "",
  ward_no: "",
  ward_municipality: "",
  ward_district: "",
  ward_province: "",
  ward_contact_number: "",
  ward_email: "",
};
function Spinner() {
  return (
    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v8H4z"
      />
    </svg>
  );
}
function validateWard(form) {
  const e = {};
  if (!form.ward_name.trim()) e.ward_name = "Ward name is required.";
  if (!form.ward_no || isNaN(Number(form.ward_no)) || Number(form.ward_no) < 1)
    e.ward_no = "Enter a valid ward number.";
  if (!form.ward_municipality.trim())
    e.ward_municipality = "Municipality is required.";
  if (!form.ward_district.trim()) e.ward_district = "District is required.";
  if (!form.ward_province) e.ward_province = "Select a province.";
  if (!/^\d{7,15}$/.test(form.ward_contact_number))
    e.ward_contact_number = "Enter a valid contact number (7–15 digits).";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.ward_email))
    e.ward_email = "Enter a valid email address.";
  return e;
}
function EditWardModal({ ward, onClose, onSaved }) {
  const [formData, setFormData] = useState({
    ...ward,
    ward_no: String(ward.ward_no),
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };
  const handleContactChange = (e) => {
    if (isNaN(Number(e.target.value))) return;
    setFormData((prev) => ({ ...prev, ward_contact_number: e.target.value }));
    if (errors.ward_contact_number)
      setErrors((prev) => ({ ...prev, ward_contact_number: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validateWard(formData);
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setSubmitting(true);
    try {
      console.log(ward.ward_id);
      // Replace with: PUT /v1/admin/ward/{ward.ward_id}
      await fetch(`${API_URL}/v1/admin/ward/${ward.ward_id}`, {
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
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
          console.log(data);
          setFormData(initialWardForm);
        })
        .catch((err) => {
          console.error("Submission failed:", err);
        });
      onSaved({ ...formData, ward_no: Number(formData.ward_no) });
    } catch {
      setSubmitting(false);
    }
  };
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full p-6 my-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-blue-700">
            वडा सम्पादन गर्नुहोस् (Edit Ward)
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-xl leading-none"
          >
            ✕
          </button>
        </div>
        <form onSubmit={handleSubmit} noValidate>
          <WardForm
            formData={formData}
            errors={errors}
            onChange={handleChange}
            onContactChange={handleContactChange}
          />
          <div className="mt-6 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              disabled={submitting}
              className="px-5 py-2.5 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors text-sm font-medium"
            >
              रद्द गर्नुहोस् (Cancel)
            </button>
            <button
              type="submit"
              disabled={submitting}
              className="px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white text-sm font-semibold transition-colors flex items-center gap-2 cursor-pointer"
            >
              {submitting ? (
                <>
                  <Spinner /> अद्यावधिक गर्दै…
                </>
              ) : (
                "परिवर्तन सुरक्षित गर्नुहोस् (Save Changes)"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditWardModal;
