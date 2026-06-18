import logo from "../../assets/nepal-sarkar.png";

function ChildInfo({ setFormData, formData, handleChange }) {
  const inputStyle =
    "w-full border border-gray-300 rounded-lg p-3 outline-none transition-colors focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:invalid:border-blue-500 focus:invalid:ring-blue-500";

  const handleChildChange = (e) => {
    e.preventDefault();
    setFormData((prev) => ({
      ...prev,
      child: {
        ...prev.child,
        [e.target.name]: e.target.value,
      },
    }));
  };

  return (
    <div>
      {/* Form Card */}
      <div className="bg-white p-6 rounded-b-xl shadow-md">
        <h2 className="text-2xl font-semibold text-blue-700 mb-6">
          बच्चाको जानकारी (Child Information)
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label>पहिलो नाम (First Name)</label>
            <input
              type="text"
              name="child_first_name"
              value={formData.child.child_first_name}
              onChange={handleChildChange}
              placeholder="पहिलो नाम लेख्नुहोस् (Enter First Name)"
              required
              className={inputStyle}
            />
          </div>

          <div>
            <label>
              बीचको नाम (Middle Name) <i>(Optional)</i>
            </label>
            <input
              type="text"
              name="child_middle_name"
              value={formData.child.child_middle_name}
              onChange={handleChildChange}
              placeholder="बीचको नाम (Middle Name)"
              className={inputStyle}
            />
          </div>

          <div>
            <label>थर (Last Name)</label>
            <input
              type="text"
              name="child_last_name"
              value={formData.child.child_last_name}
              onChange={handleChildChange}
              placeholder="थर लेख्नुहोस् (Enter Last Name)"
              required
              className={inputStyle}
            />
          </div>

          <div>
            <label>लिंग (Gender)</label>
            <select
              name="child_gender"
              value={formData.child.child_gender}
              onChange={handleChildChange}
              required
              className={inputStyle}
            >
              <option value="">-- लिंग छान्नुहोस् (Select Gender) --</option>
              <option value="MALE">पुरुष (Male)</option>
              <option value="FEMALE">महिला (Female)</option>
              <option value="OTHER">अन्य (Other)</option>
            </select>
          </div>

          <div>
            <label>जन्म मिति (Date of Birth)</label>
            <input
              type="date"
              name="child_dob_bs"
              value={formData.child.child_dob_bs}
              onChange={handleChildChange}
              required
              className={inputStyle}
            />
          </div>

          <div>
            <label>जन्मको किसिम (Birth Type)</label>
            <select
              name="child_birth_kind"
              value={formData.child.child_birth_kind}
              onChange={handleChildChange}
              required
              className={inputStyle}
            >
              <option value="">-- किसिम छान्नुहोस् (Select Type) --</option>
              <option value="SINGLE">एकल (Single)</option>
              <option value="TWIN">जुम्ल्याहा (Twin)</option>
              <option value="TRIPLET_OR_MORE">
                तीन वा बढी (Triplet or More)
              </option>
            </select>
          </div>

          <div>
            <label>जन्म समय (Birth Time)</label>
            <input
              type="time"
              name="child_time_of_birth"
              value={formData.child.child_time_of_birth}
              onChange={handleChildChange}
              required
              className={inputStyle}
            />
          </div>

          <div>
            <label>बच्चाको तौल (Weight of child)</label>
            <input
              type="text"
              name="child_weight_kg"
              value={formData.child.child_weight_kg}
              onChange={(e) => {
                const value = Number(e.target.value);
                if (e.target.value === "") {
                  setFormData((prev) => ({
                    ...prev,
                    child: { ...prev.child, child_weight_kg: "" },
                  }));
                  return;
                }
                if (isNaN(value)) return;
                if (value < 0 || value > 15) return;
                setFormData((prev) => ({
                  ...prev,
                  child: { ...prev.child, child_weight_kg: e.target.value },
                }));
              }}
              placeholder="जस्तै: 3.2 (e.g. 3.2)"
              required
              className={inputStyle}
            />
          </div>
        </div>

        <div className="mt-4">
          <label>जन्म स्थान (Place of Birth)</label>
          <select
            name="child_birth_place"
            value={formData.child.child_birth_place}
            onChange={handleChildChange}
            required
            className={inputStyle}
          >
            <option value="">-- जन्म स्थान छान्नुहोस् (Select Place) --</option>
            <option value="HOSPITAL">अस्पताल (Hospital)</option>
            <option value="HOME">घर (Home)</option>
            <option value="OTHER">अन्य (Other)</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default ChildInfo;
