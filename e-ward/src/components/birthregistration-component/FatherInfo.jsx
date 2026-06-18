function FatherInfo({ setFormData, formData, handleChange }) {
  const inputStyle =
    "w-full border border-gray-300 rounded-lg p-3 outline-none transition-colors focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:invalid:border-blue-500 focus:invalid:ring-blue-500";

  // Find father from parents array
  const fatherIndex = formData.parents.findIndex(
    (p) => p.parent_type === "FATHER",
  );
  const father = formData.parents[fatherIndex];

  const handleFatherChange = (e) => {
    e.preventDefault();
    setFormData((prev) => {
      const updatedParents = [...prev.parents];
      updatedParents[fatherIndex] = {
        ...updatedParents[fatherIndex],
        [e.target.name]: e.target.value,
      };
      return { ...prev, parents: updatedParents };
    });
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md mt-6">
      <h2 className="text-2xl font-semibold text-blue-700 mb-6">
        बाबुको जानकारी (Father Information)
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label>पहिलो नाम (First Name)</label>
          <input
            type="text"
            name="parent_first_name"
            value={father.parent_first_name}
            onChange={handleFatherChange}
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
            name="parent_middle_name"
            value={father.parent_middle_name}
            onChange={handleFatherChange}
            placeholder="बीचको नाम (Middle Name)"
            className={inputStyle}
          />
        </div>

        <div>
          <label>थर (Last Name)</label>
          <input
            type="text"
            name="parent_last_name"
            value={father.parent_last_name}
            onChange={handleFatherChange}
            placeholder="थर लेख्नुहोस् (Enter Last Name)"
            required
            className={inputStyle}
          />
        </div>

        <div>
          <label>पेशा (Occupation)</label>
          <input
            type="text"
            name="parent_occupation"
            value={father.parent_occupation}
            onChange={handleFatherChange}
            placeholder="पेशा लेख्नुहोस् (Enter Occupation)"
            required
            className={inputStyle}
          />
        </div>

        <div>
          <label>राष्ट्रियता (Nationality)</label>
          <input
            type="text"
            name="parent_nationality"
            value={father.parent_nationality}
            onChange={handleFatherChange}
            placeholder="राष्ट्रियता लेख्नुहोस् (Enter Nationality)"
            required
            className={inputStyle}
          />
        </div>

        <div>
          <label>फोन नम्बर (Phone Number)</label>
          <input
            type="tel"
            name="parent_contact_no"
            value={father.parent_contact_no}
            onChange={(e) => {
              if (e.target.value === undefined || isNaN(Number(e.target.value)))
                return;
              setFormData((prev) => {
                const updatedParents = [...prev.parents];
                updatedParents[fatherIndex] = {
                  ...updatedParents[fatherIndex],
                  parent_contact_no: Number(e.target.value).toString(),
                };
                return { ...prev, parents: updatedParents };
              });
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
          name="parent_citizenship_no"
          value={father.parent_citizenship_no}
          onChange={(e) => {
            if (e.target.value === undefined || isNaN(Number(e.target.value)))
              return;
            setFormData((prev) => {
              const updatedParents = [...prev.parents];
              updatedParents[fatherIndex] = {
                ...updatedParents[fatherIndex],
                parent_citizenship_no: e.target.value,
              };
              return { ...prev, parents: updatedParents };
            });
          }}
          placeholder="नागरिकता नम्बर लेख्नुहोस् (Enter Citizenship Number)"
          required
          className={inputStyle}
        />
      </div>
    </div>
  );
}

export default FatherInfo;
