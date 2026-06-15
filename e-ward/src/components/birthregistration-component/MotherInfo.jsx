function MotherInfo({ setFormData, formData, handleChange }) {
  const inputStyle =
    "w-full border border-gray-300 rounded-lg p-3 outline-none transition-colors focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:invalid:border-blue-500 focus:invalid:ring-blue-500";

  return (
    <div className="bg-white p-6 rounded-xl shadow-md mt-6">
      <h2 className="text-2xl font-semibold text-pink-700 mb-6">
        आमाको जानकारी (Mother Information)
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label>पहिलो नाम (First Name)</label>
          <input
            type="text"
            name="mother_first_name"
            value={formData.mother_first_name}
            onChange={(e) => {
              setFormData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }));
            }}
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
            name="mother_middle_name"
            value={formData.mother_middle_name}
            onChange={(e) => {
              setFormData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }));
            }}
            placeholder="बीचको नाम (Middle Name)"
            className={inputStyle}
          />
        </div>

        <div>
          <label>थर (Last Name)</label>
          <input
            type="text"
            name="mother_last_name"
            value={formData.mother_last_name}
            onChange={(e) => {
              setFormData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }));
            }}
            placeholder="थर लेख्नुहोस् (Enter Last Name)"
            className={inputStyle}
          />
        </div>

        <div>
          <label>पेशा (Occupation)</label>
          <input
            type="text"
            name="mother_occupation"
            value={formData.mother_occupation}
            onChange={(e) => {
              setFormData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }));
            }}
            placeholder="पेशा लेख्नुहोस् (Enter Occupation)"
            required
            className={inputStyle}
          />
        </div>

        <div>
          <label>राष्ट्रियता (Nationality)</label>
          <input
            type="text"
            name="mother_nationality"
            value={formData.mother_nationality}
            onChange={(e) => {
              setFormData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }));
            }}
            placeholder="राष्ट्रियता लेख्नुहोस् (Enter Nationality)"
            required
            className={inputStyle}
          />
        </div>

        <div>
          <label>फोन नम्बर (Phone Number)</label>
          <input
            type="tel"
            name="mother_contact_no"
            value={formData.mother_contact_no}
            onChange={(e) => {
              if (e.target.value === undefined || isNaN(Number(e.target.value)))
                return;
              setFormData((prev) => ({
                ...prev,
                [e.target.name]: Number(e.target.value).toString(),
              }));
            }}
            required
            placeholder="98XXXXXXXX"
            className={inputStyle}
          />
        </div>
      </div>

      <div>
        <label>नागरिकता नम्बर (Citizenship Number)</label>
        <input
          type="text"
          name="mother_citizenship_no"
          value={formData.mother_citizenship_no}
          onChange={(e) => {
            if (e.target.value === undefined || isNaN(Number(e.target.value)))
              return;
            setFormData((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }));
          }}
          placeholder="नागरिकता नम्बर लेख्नुहोस् (Enter Citizenship Number)"
          required
          className={inputStyle}
        />
      </div>
    </div>
  );
}

export default MotherInfo;
