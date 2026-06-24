import React, { useEffect, useMemo, useState } from "react";
import API_URL from "../../api/api";

function AddressInfo({ wards, setFormData, formData }) {
  const inputStyle =
    "w-full border border-gray-300 rounded-lg p-3 outline-none transition-colors focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed";
  // console.log("ward", wards);
  // Helper: update address nested object
  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      address: {
        ...prev.address,
        [name]: value,
      },
    }));
  };

  const provinces = useMemo(() => {
    return [...new Set(wards.map((w) => w.ward_province))].sort();
  }, [wards]);

  const districts = useMemo(() => {
    if (!formData.address.child_province) return [];
    return [
      ...new Set(
        wards
          .filter((w) => w.ward_province === formData.address.child_province)
          .map((w) => w.ward_district),
      ),
    ].sort();
  }, [wards, formData.address.child_province]);

  const municipalities = useMemo(() => {
    if (!formData.address.child_province || !formData.address.child_district)
      return [];
    return [
      ...new Set(
        wards
          .filter(
            (w) =>
              w.ward_province === formData.address.child_province &&
              w.ward_district === formData.address.child_district,
          )
          .map((w) => w.ward_municipality),
      ),
    ].sort();
  }, [wards, formData.address.child_province, formData.address.child_district]);

  const filteredWards = useMemo(() => {
    if (
      !formData.address.child_province ||
      !formData.address.child_district ||
      !formData.address.child_municipality
    )
      return [];

    return wards
      .filter(
        (w) =>
          w.ward_province?.toLowerCase() ===
            formData.address.child_province?.toLowerCase() &&
          w.ward_district?.toLowerCase() ===
            formData.address.child_district?.toLowerCase() &&
          w.ward_municipality?.toLowerCase() ===
            formData.address.child_municipality?.toLowerCase(),
      )
      .sort((a, b) => Number(a.ward_no) - Number(b.ward_no));
  }, [
    wards,
    formData.address.child_province,
    formData.address.child_district,
    formData.address.child_municipality,
  ]);
  // each level reset clears everything below it inside formData.address
  const handleProvinceChange = (e) => {
    const value = e.target.value;

    handleAddressChange({ target: { name: "child_province", value } });
    handleAddressChange({ target: { name: "child_district", value: "" } });
    handleAddressChange({ target: { name: "child_municipality", value: "" } });
    handleAddressChange({ target: { name: "child_ward_number", value: "" } });
  };

  const handleDistrictChange = (e) => {
    const value = e.target.value;
    handleAddressChange({ target: { name: "child_district", value } });
    handleAddressChange({ target: { name: "child_municipality", value: "" } });
    handleAddressChange({ target: { name: "child_ward_number", value: "" } });
  };

  const handleMunicipalityChange = (e) => {
    const value = e.target.value;
    handleAddressChange({ target: { name: "child_municipality", value } });
    handleAddressChange({ target: { name: "child_ward_number", value: "" } });
  };

  const handleWardChange = (e) => {
    handleAddressChange({
      target: { name: "child_ward_number", value: e.target.value },
    });
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md mt-6">
      <h2 className="text-2xl font-semibold text-green-700 mb-6">
        ठेगाना जानकारी (Address Information)
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label>प्रदेश (Province)</label>
          <select
            name="child_province"
            value={formData.address.child_province}
            onChange={handleProvinceChange}
            required
            className={`${inputStyle} bg-white`}
          >
            <option value="">-- प्रदेश छान्नुहोस् (Select Province) --</option>
            {provinces.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>जिल्ला (District)</label>
          <select
            name="child_district"
            value={formData.address.child_district}
            onChange={handleDistrictChange}
            disabled={!formData.address.child_province}
            required
            className={`${inputStyle} bg-white`}
          >
            <option value="">-- जिल्ला छान्नुहोस् (Select District) --</option>
            {districts.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>
            नगरपालिका / गाउँपालिका (Municipality / Rural Municipality)
          </label>
          <select
            name="child_municipality"
            value={formData.address.child_municipality}
            onChange={handleMunicipalityChange}
            disabled={!formData.address.child_district}
            required
            className={`${inputStyle} bg-white`}
          >
            <option value="">
              -- नगरपालिका छान्नुहोस् (Select Municipality) --
            </option>
            {municipalities.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>वडा नं. (Ward No.)</label>
          <select
            name="child_ward_number"
            value={formData.address.child_ward_number}
            onChange={handleWardChange}
            disabled={!formData.address.child_municipality}
            required
            className={`${inputStyle} bg-white`}
          >
            <option value="">-- वडा छान्नुहोस् (Select Ward) --</option>
            {filteredWards.map((w) => (
              <option key={w.ward_id} value={w.ward_no}>
                Ward {w.ward_no} — {w.ward_name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-4">
        <label>टोल / सडक (Tole / Street)</label>
        <input
          type="text"
          name="child_tole"
          value={formData.address.child_tole}
          onChange={handleAddressChange}
          required
          placeholder="टोल वा सडकको नाम (Enter Tole or Street Name)"
          className={inputStyle}
        />
      </div>
    </div>
  );
}

export default AddressInfo;
