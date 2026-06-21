import React from "react";
import logo from "../assets/nepal-sarkar.png";

function Preview({ formData }) {
  const fullName = [
    formData.child_first_name,
    formData.child_middle_name,
    formData.child_last_name,
  ]
    .filter(Boolean)
    .join(" ");
  const fatherFullName = [
    formData.father_first_name,
    formData.father_middle_name,
    formData.father_last_name,
  ]
    .filter(Boolean)
    .join(" ");
  const motherFullName = [
    formData.mother_first_name,
    formData.mother_middle_name,
    formData.mother_last_name,
  ]
    .filter(Boolean)
    .join(" ");
  const informantFullName = [
    formData.nominee_first_name,
    formData.nominee_middle_name,
    formData.nominee_last_name,
  ]
    .filter(Boolean)
    .join(" ");

  const dots =
    "................................................................................................................";

  // Checkbox square
  const Box = ({ checked }) => (
    <span
      style={{
        display: "inline-block",
        width: 10,
        height: 10,
        border: "1px solid #000",
        marginRight: 3,
        verticalAlign: "middle",
        background: checked ? "#000" : "transparent",
        flexShrink: 0,
      }}
    />
  );

  // A row with label and dotted fill
  const DotRow = ({ num, label, value, style }) => (
    <div
      style={{
        display: "flex",
        alignItems: "baseline",
        padding: "1px 6px",
        fontSize: 11,
        ...style,
      }}
    >
      {num && <span style={{ minWidth: 18 }}>{num}</span>}
      <span style={{ whiteSpace: "nowrap" }}>{label}&nbsp;:&nbsp;</span>
      <span
        style={{
          flex: 1,
          borderBottom: "1px dotted #000",
          minHeight: 14,
          paddingLeft: 2,
          fontSize: 11,
        }}
      >
        {value || ""}
      </span>
    </div>
  );

  const s = {
    page: {
      fontFamily: "'Noto Sans Devanagari', 'Noto Sans', Arial, sans-serif",
      fontSize: 11,
      color: "#000",
      background: "#fff",
      padding: "10mm 12mm",
      width: "210mm",
      boxSizing: "border-box",
    },
    box: { border: "1px solid #000", marginTop: 5 },
    secHead: {
      fontWeight: "bold",
      fontSize: 11.5,
      padding: "2px 6px",
      borderBottom: "1px solid #000",
    },
    row: {
      display: "flex",
      alignItems: "baseline",
      padding: "1px 6px",
      fontSize: 11,
      flexWrap: "wrap",
    },
    cbRow: {
      display: "flex",
      alignItems: "center",
      padding: "2px 6px",
      fontSize: 11,
      flexWrap: "wrap",
      gap: 10,
    },
    label: { whiteSpace: "nowrap", marginRight: 4 },
    dotLine: {
      borderBottom: "1px dotted #000",
      flex: 1,
      minHeight: 14,
      display: "inline-block",
    },
    inlineGroup: {
      display: "flex",
      alignItems: "baseline",
      gap: 6,
      flexWrap: "wrap",
      padding: "1px 6px",
      fontSize: 11,
    },
  };

  return (
    <div style={s.page}>
      {/* ── HEADER ── */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          marginBottom: 4,
        }}
      >
        <img src={logo} alt="Nepal Sarkar" style={{ width: 65, height: 65 }} />

        <div style={{ textAlign: "center", flex: 1, padding: "0 10px" }}>
          <div style={{ fontWeight: "bold", fontSize: 17 }}>नेपाल सरकार</div>
          <div style={{ fontWeight: 600, fontSize: 13 }}>स्थानीय तह</div>
          <div style={{ fontWeight: 600, fontSize: 13 }}>
            स्थानीय पञ्जिकाधिकारीको कार्यालय
          </div>
          <div style={{ fontSize: 11, marginTop: 4 }}>
            वडा नं.&nbsp;
            <span
              style={{
                borderBottom: "1px dotted #000",
                display: "inline-block",
                minWidth: 140,
              }}
            >
              {formData.child_ward_number || ""}
            </span>
            &nbsp;नगरपालिका / गाउँपालिका
          </div>
          <div style={{ fontSize: 11, marginTop: 2 }}>
            <span
              style={{
                borderBottom: "1px dotted #000",
                display: "inline-block",
                minWidth: 100,
              }}
            >
              {formData.child_district || ""}
            </span>
            &nbsp;जिल्ला,&nbsp;
            <span
              style={{
                borderBottom: "1px dotted #000",
                display: "inline-block",
                minWidth: 100,
              }}
            >
              {formData.child_province || ""}
            </span>
            &nbsp;प्रदेश
          </div>
        </div>

        <div
          style={{
            border: "1px solid #000",
            padding: "5px 10px",
            minWidth: 130,
            fontSize: 10.5,
          }}
        >
          <div style={{ marginBottom: 6 }}>
            दर्ता नं.&nbsp;
            <span
              style={{
                borderBottom: "1px dotted #000",
                display: "inline-block",
                minWidth: 70,
              }}
            />
          </div>
          <div>
            मिति&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span
              style={{
                borderBottom: "1px dotted #000",
                display: "inline-block",
                minWidth: 70,
              }}
            />
          </div>
        </div>
      </div>

      <hr
        style={{
          border: "none",
          borderTop: "1.5px solid #000",
          margin: "5px 0",
        }}
      />

      {/* ── TITLE ── */}
      <div style={{ textAlign: "center", margin: "6px 0 2px" }}>
        <div style={{ fontWeight: "bold", fontSize: 22, letterSpacing: 2 }}>
          जन्म सूचना फाराम
        </div>
        <div style={{ fontSize: 10.5, marginTop: 1 }}>
          (स्थानीय पञ्जिकाधिकारी नियमावली, २०७७ को नियम ३ बमोजिम)
        </div>
        <div style={{ fontSize: 10.5 }}>
          (यो फाराम भरको ३५ दिन भित्र सम्बन्धित वडा कार्यालयमा पेश गर्नुपर्नेछ
          ।)
        </div>
      </div>

      {/* ══════════════════════════════════════════
          क. बच्चाको विवरण
      ══════════════════════════════════════════ */}
      <div style={s.box}>
        <div style={s.secHead}>क. बच्चाको विवरण</div>

        {/* 1. Full name */}
        <DotRow num="१." label="पूरा नाम" value={fullName} />

        {/* 2. Gender */}
        <div style={s.cbRow}>
          <span style={{ minWidth: 18 }}>२.</span>
          <span>लिङ्ग&nbsp;:</span>
          <span>
            <Box checked={formData.child_gender === "MALE"} />
            पुरुष
          </span>
          <span>
            <Box checked={formData.child_gender === "FEMALE"} />
            महिला
          </span>
          <span>
            <Box checked={formData.child_gender === "OTHER"} />
            अन्य
          </span>
        </div>

        {/* 3. DOB */}
        <div style={s.inlineGroup}>
          <span style={{ minWidth: 18 }}>३.</span>
          <span>जन्म मिति (वि.सं.)&nbsp;:&nbsp;</span>
          <span
            style={{
              borderBottom: "1px dotted #000",
              display: "inline-block",
              minWidth: 130,
            }}
          >
            {formData.child_dob_bs || ""}
          </span>
          <span>&nbsp;(ई.सं.&nbsp;</span>
          <span
            style={{
              borderBottom: "1px dotted #000",
              display: "inline-block",
              minWidth: 110,
            }}
          >
            {formData.child_dob_ad || ""}
          </span>
          <span>)</span>
        </div>

        {/* 4. Time */}
        <div style={s.inlineGroup}>
          <span style={{ minWidth: 18 }}>४.</span>
          <span>जन्म समय&nbsp;:&nbsp;</span>
          <span
            style={{
              borderBottom: "1px dotted #000",
              display: "inline-block",
              minWidth: 140,
            }}
          >
            {formData.child_time_of_birth || ""}
          </span>
          <span>&nbsp;बजे</span>
        </div>

        {/* 5. Birth place */}
        <div style={{ padding: "1px 6px", fontSize: 11 }}>
          <span style={{ minWidth: 18, display: "inline-block" }}>५.</span>
          <span>जन्म स्थान&nbsp;:</span>
        </div>
        <div style={{ ...s.inlineGroup, paddingLeft: 24, gap: 8 }}>
          <span>(क) प्रदेश&nbsp;:&nbsp;</span>
          <span
            style={{
              borderBottom: "1px dotted #000",
              display: "inline-block",
              minWidth: 100,
            }}
          >
            {formData.child_province || ""}
          </span>
          <span>&nbsp;&nbsp;(ख) जिल्ला&nbsp;:&nbsp;</span>
          <span
            style={{
              borderBottom: "1px dotted #000",
              display: "inline-block",
              minWidth: 100,
            }}
          >
            {formData.child_district || ""}
          </span>
          <span>&nbsp;&nbsp;(ग) स्थानीय तह&nbsp;:&nbsp;</span>
          <span
            style={{
              borderBottom: "1px dotted #000",
              display: "inline-block",
              minWidth: 100,
            }}
          >
            {formData.child_municipality || ""}
          </span>
        </div>
        <div style={{ ...s.inlineGroup, paddingLeft: 24 }}>
          <span>(घ) वडा नं.&nbsp;:&nbsp;</span>
          <span
            style={{
              borderBottom: "1px dotted #000",
              display: "inline-block",
              minWidth: 100,
            }}
          >
            {formData.child_ward_number || ""}
          </span>
          <span>&nbsp;&nbsp;(ङ) टोल/बस्ती&nbsp;:&nbsp;</span>
          <span
            style={{
              borderBottom: "1px dotted #000",
              display: "inline-block",
              minWidth: 120,
            }}
          >
            {formData.child_tole || ""}
          </span>
        </div>

        {/* 6. Birth location type */}
        <div style={s.cbRow}>
          <span style={{ minWidth: 18 }}>६.</span>
          <span>जन्म भएको स्थान&nbsp;:</span>
          <span>
            <Box checked={formData.child_birth_place === "HOME"} />
            घरमा
          </span>
          <span>
            <Box checked={formData.child_birth_place === "HOSPITAL"} />
            स्वास्थ्य संस्था
          </span>
          <span>
            <Box checked={formData.child_birth_place === "OTHER"} />
            अन्य&nbsp;(
            <span
              style={{
                borderBottom: "1px dotted #000",
                display: "inline-block",
                minWidth: 80,
              }}
            />
            )
          </span>
        </div>

        {/* 7. Birth order */}
        <div style={{ ...s.cbRow, alignItems: "flex-start" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                flexWrap: "wrap",
              }}
            >
              <span style={{ minWidth: 18 }}>७.</span>
              <span>बच्चा कतिलौं जन्म हो&nbsp;:</span>
              <span>
                <Box />
                पहिलो
              </span>
              <span>
                <Box />
                दोस्रो
              </span>
              <span>
                <Box />
                तेस्रो
              </span>
              <span>
                <Box />
                चौथो वा सोभन्दा माथि
              </span>
            </div>
            <div style={{ paddingLeft: 22, fontSize: 10.5 }}>
              (जीवित जन्मको आधारमा)
            </div>
          </div>
        </div>

        {/* 8. Birth kind */}
        <div style={s.cbRow}>
          <span style={{ minWidth: 18 }}>८.</span>
          <span>जन्म प्रकार&nbsp;:</span>
          <span style={{ minWidth: 30 }} />
          <span>
            <Box checked={formData.child_birth_kind === "SINGLE"} />
            एकल (Single)
          </span>
          <span style={{ minWidth: 20 }} />
          <span>
            <Box checked={formData.child_birth_kind === "TWIN"} />
            जुडुवा (Twin)
          </span>
          <span style={{ minWidth: 20 }} />
          <span>
            <Box checked={formData.child_birth_kind === "TRIPLET_OR_MORE"} />
            तेसो वा बढी (Triplet or more)
          </span>
        </div>

        {/* 9. Delivery type */}
        <div style={s.cbRow}>
          <span style={{ minWidth: 18 }}>९.</span>
          <span>जन्मको प्रकार&nbsp;:</span>
          <span style={{ minWidth: 18 }} />
          <span>
            <Box />
            सामान्य (Normal)
          </span>
          <span style={{ minWidth: 20 }} />
          <span>
            <Box />
            शल्यक्रिया (Caesarean)
          </span>
          <span style={{ minWidth: 20 }} />
          <span>
            <Box />
            अन्य&nbsp;(
            <span
              style={{
                borderBottom: "1px dotted #000",
                display: "inline-block",
                minWidth: 100,
              }}
            />
            )
          </span>
        </div>

        {/* 10. Weight */}
        <div style={s.inlineGroup}>
          <span style={{ minWidth: 18 }}>१०.</span>
          <span>जन्मको तौल&nbsp;:&nbsp;</span>
          <span
            style={{
              borderBottom: "1px dotted #000",
              display: "inline-block",
              minWidth: 130,
            }}
          >
            {formData.child_weight_kg ? `${formData.child_weight_kg}` : ""}
          </span>
          <span>&nbsp;के.जी.</span>
        </div>

        {/* 11. Birth attendant */}
        <DotRow
          num="११."
          label="जन्म भएको क्रममा सहयोग गर्नेको नाम र प्रकार"
          value=""
        />
      </div>

      {/* ══════════════════════════════════════════
          ख. बुबाको विवरण
      ══════════════════════════════════════════ */}
      <div style={s.box}>
        <div style={s.secHead}>ख. बुबाको विवरण</div>
        <DotRow num="१." label="पूरा नाम" value={fatherFullName} />
        <div style={s.inlineGroup}>
          <span style={{ minWidth: 18 }}>२.</span>
          <span>नागरिकता नं.&nbsp;:&nbsp;</span>
          <span
            style={{
              borderBottom: "1px dotted #000",
              display: "inline-block",
              minWidth: 160,
            }}
          >
            {formData.father_citizenship_no || ""}
          </span>
        </div>
        <div style={s.inlineGroup}>
          <span style={{ minWidth: 18 }}>३.</span>
          <span>स्थायी ठेगाना&nbsp;: प्रदेश&nbsp;</span>
          <span
            style={{
              borderBottom: "1px dotted #000",
              display: "inline-block",
              minWidth: 70,
            }}
          />
          <span>&nbsp;जिल्ला&nbsp;</span>
          <span
            style={{
              borderBottom: "1px dotted #000",
              display: "inline-block",
              minWidth: 80,
            }}
          />
          <span>&nbsp;स्थानीय तह&nbsp;</span>
          <span
            style={{
              borderBottom: "1px dotted #000",
              display: "inline-block",
              minWidth: 80,
            }}
          />
          <span>&nbsp;वडा नं.&nbsp;</span>
          <span
            style={{
              borderBottom: "1px dotted #000",
              display: "inline-block",
              minWidth: 50,
            }}
          />
          <span>&nbsp;टोल/बस्ती&nbsp;</span>
          <span
            style={{
              borderBottom: "1px dotted #000",
              display: "inline-block",
              minWidth: 60,
            }}
          />
        </div>
        <div style={s.inlineGroup}>
          <span style={{ minWidth: 18 }}>४.</span>
          <span>पेशा&nbsp;:&nbsp;</span>
          <span
            style={{
              borderBottom: "1px dotted #000",
              display: "inline-block",
              minWidth: 160,
            }}
          >
            {formData.father_occupation || ""}
          </span>
          <span style={{ minWidth: 40 }} />
          <span>५. सम्पर्क नं.&nbsp;:&nbsp;</span>
          <span
            style={{
              borderBottom: "1px dotted #000",
              display: "inline-block",
              minWidth: 130,
            }}
          >
            {formData.father_contact_no || ""}
          </span>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          ग. आमाको विवरण
      ══════════════════════════════════════════ */}
      <div style={s.box}>
        <div style={s.secHead}>ग. आमाको विवरण</div>
        <DotRow num="१." label="पूरा नाम" value={motherFullName} />
        <div style={s.inlineGroup}>
          <span style={{ minWidth: 18 }}>२.</span>
          <span>नागरिकता नं.&nbsp;:&nbsp;</span>
          <span
            style={{
              borderBottom: "1px dotted #000",
              display: "inline-block",
              minWidth: 160,
            }}
          >
            {formData.mother_citizenship_no || ""}
          </span>
        </div>
        <div style={s.inlineGroup}>
          <span style={{ minWidth: 18 }}>३.</span>
          <span>स्थायी ठेगाना&nbsp;: प्रदेश&nbsp;</span>
          <span
            style={{
              borderBottom: "1px dotted #000",
              display: "inline-block",
              minWidth: 70,
            }}
          />
          <span>&nbsp;जिल्ला&nbsp;</span>
          <span
            style={{
              borderBottom: "1px dotted #000",
              display: "inline-block",
              minWidth: 80,
            }}
          />
          <span>&nbsp;स्थानीय तह&nbsp;</span>
          <span
            style={{
              borderBottom: "1px dotted #000",
              display: "inline-block",
              minWidth: 80,
            }}
          />
          <span>&nbsp;वडा नं.&nbsp;</span>
          <span
            style={{
              borderBottom: "1px dotted #000",
              display: "inline-block",
              minWidth: 50,
            }}
          />
          <span>&nbsp;टोल/बस्ती&nbsp;</span>
          <span
            style={{
              borderBottom: "1px dotted #000",
              display: "inline-block",
              minWidth: 60,
            }}
          />
        </div>
        <div style={s.inlineGroup}>
          <span style={{ minWidth: 18 }}>४.</span>
          <span>पेशा&nbsp;:&nbsp;</span>
          <span
            style={{
              borderBottom: "1px dotted #000",
              display: "inline-block",
              minWidth: 160,
            }}
          >
            {formData.mother_occupation || ""}
          </span>
          <span style={{ minWidth: 40 }} />
          <span>५. सम्पर्क नं.&nbsp;:&nbsp;</span>
          <span
            style={{
              borderBottom: "1px dotted #000",
              display: "inline-block",
              minWidth: 130,
            }}
          >
            {formData.mother_contact_no || ""}
          </span>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          घ. सूचनादिने व्यक्तिको विवरण
      ══════════════════════════════════════════ */}
      <div style={s.box}>
        <div style={s.secHead}>घ. सूचनादिने व्यक्तिको विवरण</div>
        <DotRow num="१." label="पूरा नाम" value={informantFullName} />
        <div style={s.cbRow}>
          <span style={{ minWidth: 18 }}>२.</span>
          <span>सम्बन्ध&nbsp;:</span>
          <span>
            <Box checked={formData.nominee_relationship === "FATHER"} />
            बुबा
          </span>
          <span>
            <Box checked={formData.nominee_relationship === "MOTHER"} />
            आमा
          </span>
          <span>
            <Box
              checked={["GRANDFATHER", "GRANDMOTHER", "GUARDIAN"].includes(
                formData.nominee_relationship,
              )}
            />
            आफन्त
          </span>
          <span>
            <Box checked={formData.nominee_relationship === "OTHER"} />
            अन्य&nbsp;(
            <span
              style={{
                borderBottom: "1px dotted #000",
                display: "inline-block",
                minWidth: 90,
              }}
            />
            )
          </span>
        </div>
        <div style={s.inlineGroup}>
          <span style={{ minWidth: 18 }}>३.</span>
          <span>स्थायी ठेगाना&nbsp;: प्रदेश&nbsp;</span>
          <span
            style={{
              borderBottom: "1px dotted #000",
              display: "inline-block",
              minWidth: 70,
            }}
          />
          <span>&nbsp;जिल्ला&nbsp;</span>
          <span
            style={{
              borderBottom: "1px dotted #000",
              display: "inline-block",
              minWidth: 80,
            }}
          />
          <span>&nbsp;स्थानीय तह&nbsp;</span>
          <span
            style={{
              borderBottom: "1px dotted #000",
              display: "inline-block",
              minWidth: 80,
            }}
          />
          <span>&nbsp;वडा नं.&nbsp;</span>
          <span
            style={{
              borderBottom: "1px dotted #000",
              display: "inline-block",
              minWidth: 50,
            }}
          />
          <span>&nbsp;टोल/बस्ती&nbsp;</span>
          <span
            style={{
              borderBottom: "1px dotted #000",
              display: "inline-block",
              minWidth: 60,
            }}
          />
        </div>
        <div style={s.inlineGroup}>
          <span style={{ minWidth: 18 }}>४.</span>
          <span>सम्पर्क नं.&nbsp;:&nbsp;</span>
          <span
            style={{
              borderBottom: "1px dotted #000",
              display: "inline-block",
              minWidth: 200,
            }}
          >
            {formData.nominee_contact_no || ""}
          </span>
        </div>
        <div style={s.inlineGroup}>
          <span style={{ minWidth: 18 }}>५.</span>
          <span>सूचना दिएको मिति&nbsp;: (वि.सं.)&nbsp;</span>
          <span
            style={{
              borderBottom: "1px dotted #000",
              display: "inline-block",
              minWidth: 120,
            }}
          />
          <span>&nbsp;&nbsp;(ई.सं.&nbsp;</span>
          <span
            style={{
              borderBottom: "1px dotted #000",
              display: "inline-block",
              minWidth: 110,
            }}
          />
          <span>)</span>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          घोषणा / Declaration
      ══════════════════════════════════════════ */}
      <div style={{ ...s.box, display: "flex" }}>
        <div
          style={{ flex: 1, padding: "4px 8px", borderRight: "1px solid #000" }}
        >
          <div
            style={{
              fontWeight: "bold",
              textAlign: "center",
              fontSize: 12,
              marginBottom: 4,
            }}
          >
            घोषणा
          </div>
          <div style={{ fontSize: 10.5, lineHeight: 1.6 }}>
            माथि उल्लेखित विवरणहरु सत्य छन् । यस जन्मको सूचना मैले सही जानकारीका
            आधारमा दिएको छु ।
          </div>
        </div>
        <div style={{ padding: "4px 10px", fontSize: 11, minWidth: 190 }}>
          <div style={{ marginBottom: 8 }}>
            दस्तखत&nbsp;:&nbsp;
            <span
              style={{
                borderBottom: "1px dotted #000",
                display: "inline-block",
                minWidth: 100,
              }}
            />
          </div>
          <div style={{ marginBottom: 8 }}>
            नाम&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;
            <span
              style={{
                borderBottom: "1px dotted #000",
                display: "inline-block",
                minWidth: 100,
              }}
            />
          </div>
          <div>
            मिति&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;
            <span
              style={{
                borderBottom: "1px dotted #000",
                display: "inline-block",
                minWidth: 100,
              }}
            />
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          कार्यालय प्रयोगका लागि
      ══════════════════════════════════════════ */}
      <div style={{ ...s.box, marginTop: 8 }}>
        <div
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 12,
            padding: "2px 0",
            borderBottom: "1px solid #000",
            background: "#f5f5f5",
          }}
        >
          कार्यालय प्रयोगका लागि
        </div>
        <div style={{ display: "flex" }}>
          <div
            style={{
              flex: 1,
              padding: "4px 8px",
              borderRight: "1px solid #000",
              fontSize: 11,
            }}
          >
            <div style={s.inlineGroup}>
              <span>दर्ता मिति&nbsp;: (वि.सं.)&nbsp;</span>
              <span
                style={{
                  borderBottom: "1px dotted #000",
                  display: "inline-block",
                  minWidth: 80,
                }}
              />
              <span>&nbsp;(ई.सं.&nbsp;</span>
              <span
                style={{
                  borderBottom: "1px dotted #000",
                  display: "inline-block",
                  minWidth: 80,
                }}
              />
              <span>)</span>
            </div>
            <div style={s.inlineGroup}>
              <span>दर्ता गर्नेको नाम&nbsp;:&nbsp;</span>
              <span
                style={{
                  borderBottom: "1px dotted #000",
                  display: "inline-block",
                  minWidth: 180,
                }}
              />
            </div>
            <div style={s.inlineGroup}>
              <span>पद&nbsp;:&nbsp;</span>
              <span
                style={{
                  borderBottom: "1px dotted #000",
                  display: "inline-block",
                  minWidth: 220,
                }}
              />
            </div>
          </div>
          <div
            style={{
              width: 150,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 11,
              padding: 6,
              textAlign: "center",
            }}
          >
            <div>
              दस्तखत&nbsp;:&nbsp;
              <span
                style={{
                  borderBottom: "1px dotted #000",
                  display: "inline-block",
                  minWidth: 60,
                }}
              />
            </div>
            <div style={{ marginTop: 16, fontSize: 10.5, color: "#333" }}>
              कार्यालयको छाप
            </div>
          </div>
        </div>
      </div>

      {/* Note */}
      <div style={{ fontSize: 10, marginTop: 6 }}>
        <strong>नोट&nbsp;:</strong> यो फाराम भरियेको मितिले ३५ दिन भित्र
        सम्बन्धित वडा कार्यालयमा पेश गर्नुपर्नेछ ।
      </div>
    </div>
  );
}

export default Preview;
