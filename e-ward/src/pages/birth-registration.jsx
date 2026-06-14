import { useState } from "react";
import ChildInfo from "../components/ChildInfo";
import logo from "../assets/nepal-sarkar.png";
import FatherInfo from "../components/FatherInfo";
import MotherInfo from "../components/MotherInfo";
import AddressInfo from "../components/AddressInfo";
import InformantInfo from "../components/InformantInfo";

function BirthRegistration() {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    dob: "",
    birthType: "",
    birthPlace: "",
    // Father info
    fatherFirstName: "",
    fatherMiddleName: "",
    fatherLastName: "",
    fatherOccupation: "",
    fatherNationality: "",
    fatherPhone: "",
    fatherAddress: "",
    fatherCitizenshipNo: "",
    // Mother info
motherFirstName: "",
motherMiddleName: "",
motherLastName: "",
motherOccupation: "",
motherNationality: "",
motherPhone: "",
motherAddress: "",
motherCitizenshipNo: "",
// Address Information
province: "",
district: "",
municipality: "",
wardNo: "",
tole: "",
// Informant Information
informantName: "",
relationship: "",
informantPhone: "",
informantCitizenship: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData(p => ({
      ...p,
      [name]: value,
    }));
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">

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
            <h1 className="text-4xl font-bold">
              Birth Registration
            </h1>
          </div>
        </div>

        <ChildInfo
          formData={formData}
          handleChange={handleChange}
        />

<FatherInfo
  formData={formData}
  handleChange={handleChange}
/>
<MotherInfo
  formData={formData}
  handleChange={handleChange}
/>
<AddressInfo
  formData={formData}
  handleChange={handleChange}
/>
<InformantInfo
  formData={formData}
  handleChange={handleChange}
/>
      </div>
    </div>
  );
}

export default BirthRegistration;