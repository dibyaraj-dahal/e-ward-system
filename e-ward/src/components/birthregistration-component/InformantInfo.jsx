function InformantInfo({ setFormData, formData, handleChange }) {
  const inputStyle =
    "w-full border border-gray-300 rounded-lg p-3 outline-none transition-colors focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:invalid:border-blue-500 focus:invalid:ring-blue-500";

  return (
    <div className="bg-white p-6 rounded-xl shadow-md mt-6">
      <h2 className="text-2xl font-semibold text-orange-700 mb-6">
        सूचनादाताको जानकारी (Informant Information)
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label>पहिलो नाम (First Name)</label>
          <input
            type="text"
            name="nominee_first_name"
            value={formData.nominee_first_name}
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
            name="nominee_middle_name"
            value={formData.nominee_middle_name}
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
            name="nominee_last_name"
            value={formData.nominee_last_name}
            onChange={(e) => {
              setFormData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }));
            }}
            placeholder="थर लेख्नुहोस् (Enter Last Name)"
            required
            className={inputStyle}
          />
        </div>

        <div>
          <label>बच्चासँगको सम्बन्ध (Relationship to Child)</label>
          <select
            name="nominee_relationship"
            value={formData.nominee_relationship}
            onChange={(e) => {
              setFormData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }));
            }}
            required
            className={inputStyle}
          >
            <option value="">
              -- सम्बन्ध छान्नुहोस् (Select Relationship) --
            </option>
            <option value="FATHER">बुबा (Father)</option>
            <option value="MOTHER">आमा (Mother)</option>
            <option value="GRANDFATHER">हजुरबुबा (Grandfather)</option>
            <option value="GRANDMOTHER">हजुरआमा (Grandmother)</option>
            <option value="GUARDIAN">अभिभावक (Guardian)</option>
            <option value="OTHER">अन्य (Other)</option>
          </select>
        </div>

        <div>
          <label>फोन नम्बर (Phone Number)</label>
          <input
            type="tel"
            name="nominee_contact_no"
            value={formData.nominee_contact_no}
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

        <div>
          <label>नागरिकता नम्बर (Citizenship Number)</label>
          <input
            type="text"
            name="nominee_citizenship_no"
            value={formData.nominee_citizenship_no}
            onChange={(e) => {
              if (e.target.value === undefined || isNaN(Number(e.target.value)))
                return;
              setFormData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }));
            }}
            required
            placeholder="नागरिकता नम्बर लेख्नुहोस् (Enter Citizenship Number)"
            className={inputStyle}
          />
        </div>
      </div>

      <div className="mt-4">
        <label>ठेगाना (Address)</label>
        <input
          type="text"
          name="nominee_address"
          value={formData.nominee_address}
          onChange={(e) => {
            setFormData((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }));
          }}
          required
          placeholder="ठेगाना लेख्नुहोस् (Enter Address)"
          className={inputStyle}
        />
      </div>
    </div>
  );
}

export default InformantInfo;
