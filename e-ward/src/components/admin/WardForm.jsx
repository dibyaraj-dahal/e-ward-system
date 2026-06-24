import React from "react";
const inputStyle =
  "w-full border border-gray-300 rounded-lg p-3 outline-none transition-colors focus:border-blue-500 focus:ring-1 focus:ring-blue-500";
const PROVINCE_LIST = [
  "Koshi",
  "Madhesh",
  "Bagmati",
  "Gandaki",
  "Lumbini",
  "Karnali",
  "Sudurpashchim",
];
function WardForm({ formData, errors, onChange, onContactChange }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          वडाको नाम (Ward Name)
        </label>
        <input
          type="text"
          name="ward_name"
          value={formData.ward_name}
          onChange={onChange}
          placeholder="वडाको नाम लेख्नुहोस्"
          className={`${inputStyle} ${errors.ward_name ? "border-red-400" : ""}`}
        />
        {/* <FieldError msg={errors.ward_name} /> */}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          वडा नम्बर (Ward Number)
        </label>
        <input
          type="number"
          name="ward_no"
          value={formData.ward_no}
          onChange={(e) => {
            if (!isNaN(Number(e.target.value))) onChange(e);
          }}
          placeholder="१, २, ३…"
          min={1}
          className={`${inputStyle} ${errors.ward_no ? "border-red-400" : ""}`}
        />
        {/* <FieldError msg={errors.ward_no} /> */}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          नगरपालिका (Municipality)
        </label>
        <input
          type="text"
          name="ward_municipality"
          value={formData.ward_municipality}
          onChange={onChange}
          placeholder="नगरपालिका लेख्नुहोस्"
          className={`${inputStyle} ${errors.ward_municipality ? "border-red-400" : ""}`}
        />
        {/* <FieldError msg={errors.ward_municipality} /> */}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          जिल्ला (District)
        </label>
        <input
          type="text"
          name="ward_district"
          value={formData.ward_district}
          onChange={onChange}
          placeholder="जिल्ला लेख्नुहोस्"
          className={`${inputStyle} ${errors.ward_district ? "border-red-400" : ""}`}
        />
        {/* <FieldError msg={errors.ward_district} /> */}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          प्रदेश (Province)
        </label>
        <select
          name="ward_province"
          value={formData.ward_province}
          onChange={onChange}
          className={`${inputStyle} bg-white ${errors.ward_province ? "border-red-400" : ""}`}
        >
          <option value="">-- प्रदेश छान्नुहोस् --</option>
          {PROVINCE_LIST.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
        {/* <FieldError msg={errors.ward_province} /> */}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          सम्पर्क नम्बर (Contact Number)
        </label>
        <input
          type="tel"
          name="ward_contact_number"
          value={formData.ward_contact_number}
          onChange={onContactChange}
          placeholder="98XXXXXXXX"
          className={`${inputStyle} ${errors.ward_contact_number ? "border-red-400" : ""}`}
        />
        {/* <FieldError msg={errors.ward_contact_number} /> */}
      </div>
      <div className="md:col-span-2">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          इमेल (Email Address)
        </label>
        <input
          type="email"
          name="ward_email"
          value={formData.ward_email}
          onChange={onChange}
          placeholder="ward@municipality.gov.np"
          className={`${inputStyle} ${errors.ward_email ? "border-red-400" : ""}`}
        />
        {/* <FieldError msg={errors.ward_email} /> */}
      </div>
    </div>
  );
}

export default WardForm;
