function FatherInfo({ formData, handleChange }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md mt-6">

      <h2 className="text-2xl font-semibold text-blue-700 mb-6">
        Father Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <div>
          <label>First Name</label>
          <input
            type="text"
            name="fatherFirstName"
            value={formData.fatherFirstName}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label>Middle Name</label>
          <input
            type="text"
            name="fatherMiddleName"
            value={formData.fatherMiddleName}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label>Last Name</label>
          <input
            type="text"
            name="fatherLastName"
            value={formData.fatherLastName}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label>Occupation</label>
          <input
            type="text"
            name="fatherOccupation"
            value={formData.fatherOccupation}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label>Nationality</label>
          <input
            type="text"
            name="fatherNationality"
            value={formData.fatherNationality}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label>Phone Number</label>
          <input
            type="tel"
            name="fatherPhone"
            value={formData.fatherPhone}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
        </div>

      </div>

      <div className="mt-4">
        <label>Address</label>
        <input
          type="text"
          name="fatherAddress"
          value={formData.fatherAddress}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        />
      </div>

    </div>
  );
}

export default FatherInfo;