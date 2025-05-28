import React from "react";

const TobaccoInducedOralDiseasesTable = () => {
  const tableData = [
    {
      ageGroup: "20-30 Years",
      link: "https://example.com/article1",
      symptoms: [
        "Bad Breath",
        "Stained Teeth",
        "Gum Bleeding",
        "Mouth Ulcers",
        "Early Gum Recession",
      ],
      potentialDiseases: [
        "Gingivitis",
        "Early Leukoplakia",
        "Gum Recession",
        "Oral Malodor",
        "Early Periodontitis",
      ],
      selfChecks: [
        "Red Swollen Gums",
        "White Patches",
        "Bad Breath",
        "Bleeding while Brushing",
      ],
      benefits: [
        "Prevents gum disease",
        "Improves overall oral health",
        "Reduces risk of tooth loss",
      ],
      frequency:
        "Every 12-18 months (Self-checks + Expert Exam) – Early intervention can prevent long-term damage and establish healthy habits.",
      impact:
        '"I quit tobacco at 28, and my gum health improved within 3 months!" – Ravi, 29',
    },
    {
      ageGroup: "30-40 Years",
      link: "https://example.com/article2",
      symptoms: [
        "Increased plaque",
        "Tooth sensitivity",
        "Gum inflammation",
        "Loose teeth",
        "Early OSMF",
      ],
      potentialDiseases: [
        "Moderate Periodontitis",
        "Nicotinic Stomatitis",
        "Smoker's Palate",
        "OSMF",
        "Smoker's Lip",
      ],
      selfChecks: [
        "White or red patches",
        "Receding gums",
        "Loose teeth",
        "Persistent mouth sores",
      ],
      benefits: [
        "Prevents tissue damage",
        "Supports bone health",
        "Reduces cancer risk",
      ],
      frequency:
        "Every 12 months (Self-checks + Expert Exam) – Detect and reverse early signs before they progress to cancer.",
      impact: '"My mouth ulcers healed within weeks after I quit!" – Priya, 38',
    },
    {
      ageGroup: "40-50 Years",
      link: "https://example.com/article3",
      symptoms: [
        "Persistent mouth sores",
        "Red or white patches",
        "Difficulty swallowing",
        "Burning mouth",
      ],
      potentialDiseases: [
        "Advanced OSMF",
        "Erythroplakia",
        "Early Oral Cancer",
        "Smoker's Keratosis",
      ],
      selfChecks: [
        "Thickened patches",
        "Difficulty moving tongue",
        "Burning sensation",
        "Unexplained weight loss",
      ],
      benefits: [
        "Detects pre-cancerous changes",
        "Reduces treatment complexity",
        "Improves survival",
      ],
      frequency:
        "Every 6-12 months (Self-checks + Expert Exam) – This is the critical window for catching cancer early.",
      impact:
        '"Early detection saved my life – my oral cancer was caught at stage 1." – Anil, 47',
    },
    {
      ageGroup: "50-60 Years",
      link: "https://example.com/article4",
      symptoms: [
        "Jaw stiffness",
        "Chronic throat irritation",
        "Lump formation",
        "Severe tooth loss",
      ],
      potentialDiseases: [
        "Severe OSMF",
        "Oral Cancer",
        "Periodontal Disease",
        "Laryngeal Cancer",
      ],
      selfChecks: [
        "Difficulty swallowing",
        "Persistent throat pain",
        "Lumps in the mouth or neck",
      ],
      benefits: [
        "Prevents extensive surgery",
        "Reduces treatment costs",
        "Extends lifespan",
      ],
      frequency:
        "Every 6 months (Self-checks + Expert Exam) – Early detection can significantly improve survival rates.",
      impact: '"I’m 55 and cancer-free because I acted early." – Sunil, 55',
    },
    {
      ageGroup: "60+ Years",
      link: "https://example.com/article5",
      symptoms: [
        "Difficulty chewing",
        "Persistent pain",
        "Weight loss",
        "Facial numbness",
        "Non-healing sores",
      ],
      potentialDiseases: [
        "Advanced Oral Cancer",
        "Extensive Bone Loss",
        "Oral Candidiasis",
      ],
      selfChecks: [
        "Non-healing sores",
        "Facial swelling",
        "Weight loss",
        "Difficulty moving the jaw",
      ],
      benefits: [
        "Significantly reduces cancer progression",
        "Preserves jaw function",
      ],
      frequency:
        "Every 3-6 months (Self-checks + Expert Exam) – Regular monitoring is critical for this high-risk group.",
      impact: '"My jaw cancer was detected early, saving my life." – Kamla, 67',
    },
  ];

  return (
    <div className="p-8 bg-white rounded-lg font-[poppins] mt-24">
      <h1 className=" md:text-4xl font-bold text-center mb-8 text-black">
        Tobacco-Induced Oral Diseases{" "}
        <span className="text-[#2987D7]">By Age-Group</span>
      </h1>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-[#A3DBFF]">
            <th className="px-2 border border-[#2987D7] tracking-tighter">
              Age Group
            </th>
            <th className="px-2 border border-[#2987D7] tracking-tighter w-52">
              Common Symptoms of Tobacco-Induced Oral Disease
            </th>
            <th className="px-2 border border-[#2987D7] tracking-tighter w-52">
              Potential Oral Disease
            </th>
            <th className="px-2 border border-[#2987D7] tracking-tighter w-52">
              Signs to Look for Self-Checks
            </th>
            <th className="px-2 border border-[#2987D7] tracking-tighter w-52">
              Benefits of Early Screening
            </th>
            <th className="px-2 border border-[#2987D7] tracking-tighter w-60">
              Recommended Screening Frequency
            </th>
            <th className="px-2 border border-[#2987D7] tracking-tighter w-60">
              Real Life Impact
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index} className="bg-blue-50">
              <td className="p-4 border font-bold bg-[#A3DBFF] w-40 text-gray-700">
                {row.ageGroup}{" "}
                <sup>
                  <a
                    href={row.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500"
                  >
                    [1]
                  </a>
                </sup>
              </td>{" "}
              <td className="p-4 border border-[#2987D7] text-xs tracking-tighters">
                <ul>
                  {row.symptoms.map((item, i) => (
                    <li key={i}>&bull; {item}</li>
                  ))}
                </ul>
              </td>
              <td className="px-2 border border-[#2987D7] text-xs">
                <ul>
                  {row.potentialDiseases.map((item, i) => (
                    <li key={i}>&bull; {item}</li>
                  ))}
                </ul>
              </td>
              <td className="px-2 border border-[#2987D7] text-xs">
                <ul>
                  {row.selfChecks.map((item, i) => (
                    <li key={i}>&bull; {item}</li>
                  ))}
                </ul>
              </td>
              <td className="px-2 border border-[#2987D7] text-xs">
                <ul>
                  {row.benefits.map((item, i) => (
                    <li key={i}>&bull; {item}</li>
                  ))}
                </ul>
              </td>
              <td className="px-2 border border-[#2987D7] text-xs">
                {row.frequency}
              </td>
              <td className="px-2 border border-[#2987D7] text-xs">
                {row.impact}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TobaccoInducedOralDiseasesTable;
