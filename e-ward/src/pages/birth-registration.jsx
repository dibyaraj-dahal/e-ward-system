import { useState } from "react";
import ChildInfo from "../components/birthregistration-component/ChildInfo";
import logo from "../assets/nepal-sarkar.png";
import FatherInfo from "../components/birthregistration-component/FatherInfo";
import MotherInfo from "../components/birthregistration-component/MotherInfo";
import AddressInfo from "../components/birthregistration-component/AddressInfo";
import InformantInfo from "../components/birthregistration-component/InformantInfo";
import Preview from "../components/Preview";
import { birthRegistrationSchema } from "../validation/birth-certificate-validation";
import API_URL from "../api/api";

function BirthRegistration() {
  const [showPreview, setShowPreview] = useState(false);
  const [formData, setFormData] = useState({
    register_ward_id: "132a7e78-9d6b-4e0a-a81b-5ec99fe43f9c",
    register_submitted_by: 1,
    child: {
      child_first_name: "",
      child_middle_name: "",
      child_last_name: "",
      child_gender: "",
      child_dob_bs: "",
      child_time_of_birth: "",
      child_birth_place: "",
      child_birth_kind: "",
      child_weight_kg: 0,
    },
    parents: [
      {
        parent_first_name: "",
        parent_middle_name: "",
        parent_last_name: "",
        parent_type: "FATHER",
        parent_citizenship_no: "",
        parent_nid_no: "",
        parent_occupation: "",
        parent_nationality: "",
        parent_contact_no: "",
      },
      {
        parent_first_name: "",
        parent_middle_name: "",
        parent_last_name: "",
        parent_type: "MOTHER",
        parent_citizenship_no: "",
        parent_nid_no: "",
        parent_occupation: "",
        parent_nationality: "",
        parent_contact_no: "",
      },
    ],
    nominees: [
      {
        nominee_first_name: "",
        nominee_middle_name: "",
        nominee_last_name: "",
        nominee_citizenship_no: "",
        nominee_address: "",
        nominee_contact_no: "",
        nominee_witness_order: 0,
        nominee_relationship: "",
      },
    ],
    address: {
      child_provience: "", // fixed typo: provience → province
      child_district: "",
      child_municipality: "",
      child_ward_number: 0,
      child_tole: "",
    },
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((p) => ({ ...p, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("FORM DATA", formData);

    fetch(`${API_URL}/v1/birth-registration`, {
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
      })
      .catch((err) => {
        console.error("Submission failed:", err);
      });
  }

  return (
    <>
      {showPreview ? (
        <div className="min-h-screen bg-gray-100 p-8 max-w-6xl mx-auto">
          {/* Preview Header Buttons */}
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={() => setShowPreview(false)}
              className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md cursor-pointer transition-colors"
            >
              ← पछाडि जानुहोस् (Back to Form)
            </button>
            <button
              onClick={() => window.print()}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md cursor-pointer transition-colors"
            >
              🖨️ Print / Download
            </button>
          </div>

          <Preview formData={formData} />
        </div>
      ) : (
        <form
          required
          className="min-h-screen bg-gray-100 p-8 flex flex-col max-w-6xl mx-auto gap-4 "
          onSubmit={handleSubmit}
        >
          <div>
            {/* Header with Logo */}
            <div className="flex items-center gap-4 mb-6">
              <img
                src={logo}
                alt="Government of Nepal"
                className="w-16 h-16 object-contain"
              />
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-widest">
                  Government of Nepal
                </p>
                <h1 className="text-4xl font-bold">Birth Registration</h1>
              </div>
            </div>

            <ChildInfo
              setFormData={setFormData}
              formData={formData}
              handleChange={handleChange}
            />
            <FatherInfo
              setFormData={setFormData}
              formData={formData}
              handleChange={handleChange}
            />
            <MotherInfo
              setFormData={setFormData}
              formData={formData}
              handleChange={handleChange}
            />
            <AddressInfo
              setFormData={setFormData}
              formData={formData}
              handleChange={handleChange}
            />
            <InformantInfo
              setFormData={setFormData}
              formData={formData}
              handleChange={handleChange}
            />
          </div>

          {/* Bottom Buttons */}
          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={() => setShowPreview(true)}
              className="bg-blue-100 hover:bg-blue-200 text-blue-700 font-medium px-6 py-2 rounded-md cursor-pointer transition-colors"
            >
              👁️ Preview Certificate
            </button>
            <button
              type="submit"
 Temporary merge branch 
              className="bg-blue-200 hover:bg-slate-300 px-6 py-2 rounded-md cursor-pointer transition-colors"

              className="bg-blue-300 hover:bg-slate-300 px-6 py-2 rounded-md cursor-pointer transition-colors"
>
              Submit
            </button>
          </div>
        </form>
      )}
    </>
  );
}

export default BirthRegistration;
