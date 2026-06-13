import logo from "../assets/nepal-sarkar.png";

function ChildInfo({ formData, handleChange }) {
  return (
    <div>

      {/* Form Card */}
      <div className="bg-white p-6 rounded-b-xl shadow-md">
        <h2 className="text-2xl font-semibold text-blue-700 mb-6">
          Child Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label>First Name</label>
            <input type="text" name="firstName" value={formData.firstName}
              onChange={handleChange} className="w-full border rounded-lg p-3" />
          </div>

          <div>
            <label>Middle Name</label>
            <input type="text" name="middleName" value={formData.middleName}
              onChange={handleChange} className="w-full border rounded-lg p-3" />
          </div>

          <div>
            <label>Last Name</label>
            <input type="text" name="lastName" value={formData.lastName}
              onChange={handleChange} className="w-full border rounded-lg p-3" />
          </div>

          <div>
            <label>Gender</label>
            <select name="gender" value={formData.gender}
              onChange={handleChange} className="w-full border rounded-lg p-3">
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label>Date of Birth</label>
            <input type="date" name="dob" value={formData.dob}
              onChange={handleChange} className="w-full border rounded-lg p-3" />
          </div>

          <div>
            <label>Birth Type</label>
            <select name="birthType" value={formData.birthType}
              onChange={handleChange} className="w-full border rounded-lg p-3">
              <option value="">Select Type</option>
              <option value="Single">Single</option>
              <option value="Twin">Twin</option>
              <option value="Triplet">Triplet</option>
            </select>
          </div>
        </div>

        <div className="mt-4">
          <label>Place of Birth</label>
          <input type="text" name="birthPlace" value={formData.birthPlace}
            onChange={handleChange} className="w-full border rounded-lg p-3" />
        </div>
      </div>
    </div>
  );
}

export default ChildInfo;