import React from "react";
import logo from "../assets/nepal-sarkar.png";

function Preview({ formData }) {
  const fullName = [
    formData.child_first_name,
    formData.child_middle_name,
    formData.child_last_name,
  ]
    .filter(Boolean)
    .join(" ");

  const fatherFullName = [
    formData.father_first_name,
    formData.father_middle_name,
    formData.father_last_name,
  ]
    .filter(Boolean)
    .join(" ");

  const motherFullName = [
    formData.mother_first_name,
    formData.mother_middle_name,
    formData.mother_last_name,
  ]
    .filter(Boolean)
    .join(" ");

  const informantFullName = [
    formData.nominee_first_name,
    formData.nominee_middle_name,
    formData.nominee_last_name,
  ]
    .filter(Boolean)
    .join(" ");

  const address = [
    formData.child_tole,
    formData.child_municipality,
    formData.child_ward_number ? `Ward ${formData.child_ward_number}` : "",
    formData.child_district,
    formData.child_province,
  ]
    .filter(Boolean)
    .join(", ");

  const genderMap = {
    MALE: "Male / पुरुष",
    FEMALE: "Female / महिला",
    OTHER: "Other / अन्य",
  };

  const birthKindMap = {
    SINGLE: "Single / एकल",
    TWIN: "Twin / जुम्ल्याहा",
    TRIPLET_OR_MORE: "Triplet or More / तीन वा बढी",
  };

  const birthPlaceMap = {
    HOSPITAL: "Hospital / अस्पताल",
    HOME: "Home / घर",
    OTHER: "Other / अन्य",
  };

  const relationshipMap = {
    FATHER: "Father / बुबा",
    MOTHER: "Mother / आमा",
    GRANDFATHER: "Grandfather / हजुरबुबा",
    GRANDMOTHER: "Grandmother / हजुरआमा",
    GUARDIAN: "Guardian / अभिभावक",
    OTHER: "Other / अन्य",
  };

  return (
    <div className="border-2 border-black p-6 bg-white rounded-xl print:rounded-none print:border-0">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="w-24">
          <img src={logo} className="w-24" alt="Nepal Sarkar Logo" />
        </div>

        <div className="text-center flex-1">
          <h2 className="font-bold text-xl">नेपाल सरकार</h2>
          <h3 className="font-semibold">स्थानीय तह</h3>
          <h3 className="font-semibold">स्थानीय पञ्जिकाधिकारीको कार्यालय</h3>
          <p>
            {formData.child_municipality || "—"},{" "}
            {formData.child_district || "—"}
          </p>
          <p>{formData.child_province || "—"}</p>
          <div className="mt-2">
            <h2 className="font-bold text-xl">Government of Nepal</h2>
            <h3 className="font-semibold">Office of the Local Registrar</h3>
          </div>
        </div>

        <div className="w-36 h-36 border border-dashed flex items-center justify-center text-sm text-gray-400">
          कार्यालयको छाप
        </div>
      </div>

      {/* Title */}
      <div className="text-center mt-6">
        <h1 className="text-2xl font-bold">जन्म दर्ता प्रमाणपत्र</h1>
        <h2 className="text-xl font-bold mt-1">
          (Birth Registration Certificate)
        </h2>
      </div>

      {/* Meta */}
      <div className="grid grid-cols-2 gap-4 mt-6 text-sm">
        <div>
          दर्ता नम्बर (Registration No):{" "}
          <span className="font-semibold">—</span>
        </div>
        <div>
          दर्ता मिति (Date of Registration):{" "}
          <span className="font-semibold">—</span>
        </div>
        <div>
          जारी मिति (Date of Issue): <span className="font-semibold">—</span>
        </div>
        <div>
          राष्ट्रिय परिचय नम्बर (NIN): <span className="font-semibold">—</span>
        </div>
      </div>

      {/* Child Table */}
      <table className="w-full border border-black mt-6 text-sm">
        <tbody>
          <tr>
            <td className="border p-2 w-1/3 font-semibold">
              पूरा नाम (Full Name)
            </td>
            <td className="border p-2">{fullName || "—"}</td>
          </tr>
          <tr>
            <td className="border p-2 font-semibold">
              जन्म मिति (Date of Birth)
            </td>
            <td className="border p-2">{formData.child_dob_bs || "—"}</td>
          </tr>
          <tr>
            <td className="border p-2 font-semibold">
              जन्म समय (Time of Birth)
            </td>
            <td className="border p-2">
              {formData.child_time_of_birth || "—"}
            </td>
          </tr>
          <tr>
            <td className="border p-2 font-semibold">लिंग (Sex)</td>
            <td className="border p-2">
              {genderMap[formData.child_gender] || "—"}
            </td>
          </tr>
          <tr>
            <td className="border p-2 font-semibold">तौल (Weight)</td>
            <td className="border p-2">
              {formData.child_weight_kg
                ? `${formData.child_weight_kg} kg`
                : "—"}
            </td>
          </tr>
          <tr>
            <td className="border p-2 font-semibold">
              स्थायी ठेगाना (Permanent Address)
            </td>
            <td className="border p-2">{address || "—"}</td>
          </tr>
          <tr>
            <td className="border p-2 font-semibold">
              जन्म स्थान (Birth Place)
            </td>
            <td className="border p-2">
              {birthPlaceMap[formData.child_birth_place] || "—"}
            </td>
          </tr>
          <tr>
            <td className="border p-2 font-semibold">
              जन्मको किसिम (Type of Birth)
            </td>
            <td className="border p-2">
              {birthKindMap[formData.child_birth_kind] || "—"}
            </td>
          </tr>
        </tbody>
      </table>

      {/* Father & Mother */}
      <div className="grid grid-cols-2 gap-0 mt-6 border border-black text-sm">
        <div className="border-r">
          <div className="font-bold text-center border-b p-2">
            बाबुको विवरण (Father's Details)
          </div>
          <table className="w-full">
            <tbody>
              <tr>
                <td className="border p-2">पूरा नाम (Full Name)</td>
                <td className="border p-2">{fatherFullName || "—"}</td>
              </tr>
              <tr>
                <td className="border p-2">नागरिकता नं. (Citizenship No)</td>
                <td className="border p-2">
                  {formData.father_citizenship_no || "—"}
                </td>
              </tr>
              <tr>
                <td className="border p-2">पेशा (Occupation)</td>
                <td className="border p-2">
                  {formData.father_occupation || "—"}
                </td>
              </tr>
              <tr>
                <td className="border p-2">राष्ट्रियता (Nationality)</td>
                <td className="border p-2">
                  {formData.father_nationality || "—"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <div className="font-bold text-center border-b p-2">
            आमाको विवरण (Mother's Details)
          </div>
          <table className="w-full">
            <tbody>
              <tr>
                <td className="border p-2">पूरा नाम (Full Name)</td>
                <td className="border p-2">{motherFullName || "—"}</td>
              </tr>
              <tr>
                <td className="border p-2">नागरिकता नं. (Citizenship No)</td>
                <td className="border p-2">
                  {formData.mother_citizenship_no || "—"}
                </td>
              </tr>
              <tr>
                <td className="border p-2">पेशा (Occupation)</td>
                <td className="border p-2">
                  {formData.mother_occupation || "—"}
                </td>
              </tr>
              <tr>
                <td className="border p-2">राष्ट्रियता (Nationality)</td>
                <td className="border p-2">
                  {formData.mother_nationality || "—"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Informant */}
      <table className="w-full border border-black mt-6 text-sm">
        <tbody>
          <tr>
            <th className="border p-2 text-center" colSpan="2">
              सूचनादाताको विवरण (Informant's Details)
            </th>
          </tr>
          <tr>
            <td className="border p-2">पूरा नाम (Full Name)</td>
            <td className="border p-2">{informantFullName || "—"}</td>
          </tr>
          <tr>
            <td className="border p-2">ठेगाना (Address)</td>
            <td className="border p-2">{formData.nominee_address || "—"}</td>
          </tr>
          <tr>
            <td className="border p-2">सम्पर्क नं. (Contact No)</td>
            <td className="border p-2">{formData.nominee_contact_no || "—"}</td>
          </tr>
          <tr>
            <td className="border p-2">सम्बन्ध (Relation with Child)</td>
            <td className="border p-2">
              {relationshipMap[formData.nominee_relationship] || "—"}
            </td>
          </tr>
        </tbody>
      </table>

      {/* Signature */}
      <div className="flex justify-between mt-12">
        <div>
          <p>हस्ताक्षर (Signature): ____________________</p>
        </div>
        <div className="text-center">
          <p>स्थानीय पञ्जिकाधिकारीको नाम (Name of Local Registrar)</p>
          <p>____________________</p>
        </div>
        <div className="w-32 h-32 border border-dashed flex items-center justify-center text-sm text-gray-400">
          Official Stamp
        </div>
      </div>
    </div>
  );
}

export default Preview;
