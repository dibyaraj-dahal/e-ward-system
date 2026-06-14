function MotherInfo({ formData, handleChange }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md mt-6">

      <h2 className="text-2xl font-semibold text-pink-700 mb-6">
        Mother Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <div>
          <label>First Name</label>
          <input
            type="text"
            name="motherFirstName"
            value={formData.motherFirstName}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label>Middle Name</label>
          <input
            type="text"
            name="motherMiddleName"
            value={formData.motherMiddleName}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label>Last Name</label>
          <input
            type="text"
            name="motherLastName"
            value={formData.motherLastName}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label>Occupation</label>
          <input
            type="text"
            name="motherOccupation"
            value={formData.motherOccupation}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label>Nationality</label>
          <input
            type="text"
            name="motherNationality"
            value={formData.motherNationality}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label>Phone Number</label>
          <input
            type="tel"
            name="motherPhone"
            value={formData.motherPhone}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
        </div>

      </div>

      <div className="mt-4">
        <label>Address</label>
        <input
          type="text"
          name="motherAddress"
          value={formData.motherAddress}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        />
      </div>
      <div>
  <label>Citizenship Number</label>
  <input
    type="text"
    name="motherCitizenshipNo"
    value={formData.motherCitizenshipNo}
    onChange={handleChange}
    className="w-full border rounded-lg p-3"
  />
</div>

    </div>
  );
}

export default MotherInfo;