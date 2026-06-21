function AddressInfo({ setFormData, formData, handleChange }) {
  const inputStyle =
    "w-full border border-gray-300 rounded-lg p-3 outline-none transition-colors focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:invalid:border-blue-500 focus:invalid:ring-blue-500";

  // Helper: update address nested object
  const handleAddressChange = (e) => {
    e.preventDefault();
    setFormData((prev) => ({
      ...prev,
      address: {
        ...prev.address,
        [e.target.name]: e.target.value,
      },
    }));
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
            name="child_provience" // fixed typo
            value={formData.address.child_provience} // reads from address
            onChange={handleAddressChange}
            required
            className={inputStyle}
          >
            <option value="">-- प्रदेश छान्नुहोस् (Select Province) --</option>
            <option value="Koshi">कोशी (Koshi)</option>
            <option value="Madhesh">मधेश (Madhesh)</option>
            <option value="Bagmati">बागमती (Bagmati)</option>
            <option value="Gandaki">गण्डकी (Gandaki)</option>
            <option value="Lumbini">लुम्बिनी (Lumbini)</option>
            <option value="Karnali">कर्णाली (Karnali)</option>
            <option value="Sudurpashchim">सुदूरपश्चिम (Sudurpashchim)</option>
          </select>
        </div>

        <div>
          <label>जिल्ला (District)</label>
          <input
            type="text"
            name="child_district"
            value={formData.address.child_district}
            onChange={handleAddressChange}
            required
            placeholder="जिल्ला लेख्नुहोस् (Enter District)"
            className={inputStyle}
          />
        </div>

        <div>
          <label>
            नगरपालिका / गाउँपालिका (Municipality / Rural Municipality)
          </label>
          <input
            type="text"
            name="child_municipality"
            value={formData.address.child_municipality}
            onChange={handleAddressChange}
            required
            placeholder="नगरपालिका लेख्नुहोस् (Enter Municipality)"
            className={inputStyle}
          />
        </div>

        <div>
          <label>वडा नं. (Ward No.)</label>
          <input
            type="number"
            name="child_ward_number"
            value={formData.address.child_ward_number}
            onChange={handleAddressChange}
            required
            placeholder="वडा नम्बर (Ward Number)"
            className={inputStyle}
          />
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
