function InformantInfo({ formData, handleChange }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md mt-6">

      <h2 className="text-2xl font-semibold text-orange-700 mb-6">
        Informant Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <div>
          <label>Informant Full Name</label>
          <input
            type="text"
            name="informantName"
            value={formData.informantName}
            onChange={handleChange}
            placeholder="Enter Full Name"
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label>Relationship to Child</label>
          <select
            name="relationship"
            value={formData.relationship}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          >
            <option value="">Select Relationship</option>
            <option value="Father">Father</option>
            <option value="Mother">Mother</option>
            <option value="Grandfather">Grandfather</option>
            <option value="Grandmother">Grandmother</option>
            <option value="Guardian">Guardian</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label>Phone Number</label>
          <input
            type="tel"
            name="informantPhone"
            value={formData.informantPhone}
            onChange={handleChange}
            placeholder="98XXXXXXXX"
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label>Citizenship Number</label>
          <input
            type="text"
            name="informantCitizenship"
            value={formData.informantCitizenship}
            onChange={handleChange}
            placeholder="Enter Citizenship Number"
            className="w-full border rounded-lg p-3"
          />
        </div>

      </div>

    </div>
  );
}

export default InformantInfo;