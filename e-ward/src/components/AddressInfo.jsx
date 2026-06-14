function AddressInfo({ formData, handleChange }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md mt-6">

      <h2 className="text-2xl font-semibold text-green-700 mb-6">
        Address Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <div>
          <label>Province</label>
          <select
            name="province"
            value={formData.province}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          >
            <option value="">Select Province</option>
            <option value="Koshi">Koshi</option>
            <option value="Madhesh">Madhesh</option>
            <option value="Bagmati">Bagmati</option>
            <option value="Gandaki">Gandaki</option>
            <option value="Lumbini">Lumbini</option>
            <option value="Karnali">Karnali</option>
            <option value="Sudurpashchim">Sudurpashchim</option>
          </select>
        </div>

        <div>
          <label>District</label>
          <input
            type="text"
            name="district"
            value={formData.district}
            onChange={handleChange}
            placeholder="Enter District"
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label>Municipality / Rural Municipality</label>
          <input
            type="text"
            name="municipality"
            value={formData.municipality}
            onChange={handleChange}
            placeholder="Enter Municipality"
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label>Ward No.</label>
          <input
            type="number"
            name="wardNo"
            value={formData.wardNo}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
        </div>

      </div>

      <div className="mt-4">
        <label>Tole / Street</label>
        <input
          type="text"
          name="tole"
          value={formData.tole}
          onChange={handleChange}
          placeholder="Enter Tole or Street Name"
          className="w-full border rounded-lg p-3"
        />
      </div>

    </div>
  );
}

export default AddressInfo;