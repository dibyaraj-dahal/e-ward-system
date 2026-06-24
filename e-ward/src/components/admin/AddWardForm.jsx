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

function AddWardForm({ onSuccess }) {
  const [formData, setFormData] = useState(initialWardForm);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  // const [toast, showToast] = useToast();

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
      // Replace with: POST /v1/admin/ward
      fetch(`${API_URL}/v1/admin/ward`, {
        method: "POST",
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
      // onSuccess({
      //   ...formData,
      //   ward_id: Math.random().toString(36).slice(2, 10),
      //   ward_no: Number(formData.ward_no),
      // });

      // showToast("Ward created successfully!", "success");
    } catch {
      // showToast("Failed to create ward. Please try again.", "error");
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      {/* <Toast toast={toast} /> */}
      <h2 className="text-2xl font-semibold text-blue-700 mb-6">
        वडा थप्नुहोस् (Add New Ward)
      </h2>
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
            onClick={() => {
              setFormData(initialWardForm);
              setErrors({});
            }}
            className="px-5 py-2.5 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors text-sm font-medium"
          >
            रद्द गर्नुहोस् (Reset)
          </button>
          <button
            type="submit"
            disabled={submitting}
            className="px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white text-sm font-semibold transition-colors flex items-center gap-2"
          >
            {submitting ? (
              <>
                <Spinner /> सिर्जना गर्दै…
              </>
            ) : (
              "वडा थप्नुहोस् (Add Ward)"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddWardForm;
