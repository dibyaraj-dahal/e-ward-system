function InformantInfo({ setFormData, formData }) {
  const inputStyle =
    "w-full border border-gray-300 rounded-lg p-3 outline-none transition-colors focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:invalid:border-blue-500 focus:invalid:ring-blue-500";

  // Safely grab the first nominee object, or fall back to an empty object
  const nominee = formData.nominees?.[0] || {};

  // Updates the first element inside the nominees array
  const handleNomineeChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    setFormData((prev) => {
      // Ensure prev.nominees is an array to avoid crashes
      const currentNominees = Array.isArray(prev.nominees)
        ? prev.nominees
        : [{}];

      return {
        ...prev,
        nominees: [
          {
            ...currentNominees[0],
            [name]: value,
          },
        ],
      };
    });
  };

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
            value={nominee.nominee_first_name || ""}
            onChange={handleNomineeChange}
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
            value={nominee.nominee_middle_name || ""}
            onChange={handleNomineeChange}
            placeholder="बीचको नाम (Middle Name)"
            className={inputStyle}
          />
        </div>

        <div>
          <label>थर (Last Name)</label>
          <input
            type="text"
            name="nominee_last_name"
            value={nominee.nominee_last_name || ""}
            onChange={handleNomineeChange}
            placeholder="थर लेख्नुहोस् (Enter Last Name)"
            required
            className={inputStyle}
          />
        </div>

        <div>
          <label>बच्चासँगको सम्बन्ध (Relationship to Child)</label>
          <select
            name="nominee_relationship"
            value={nominee.nominee_relationship || ""}
            onChange={handleNomineeChange}
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
            value={nominee.nominee_contact_no || ""}
            onChange={(e) => {
              // Block non-numeric typing but allow backspaces safely
              if (e.target.value !== "" && isNaN(Number(e.target.value)))
                return;

              setFormData((prev) => {
                const currentNominees = Array.isArray(prev.nominees)
                  ? prev.nominees
                  : [{}];
                return {
                  ...prev,
                  nominees: [
                    {
                      ...currentNominees[0],
                      nominee_contact_no: e.target.value,
                    },
                  ],
                };
              });
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
            value={nominee.nominee_citizenship_no || ""}
            onChange={handleNomineeChange}
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
          value={nominee.nominee_address || ""}
          onChange={handleNomineeChange}
          required
          placeholder="ठेगाना लेख्नुहोस् (Enter Address)"
          className={inputStyle}
        />
      </div>
    </div>
  );
}

export default InformantInfo;
