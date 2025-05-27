import React from 'react';

const EarlyTreatmentCostComponent = () => {
  return (
    <div className="max-w-5xl mx-auto font-[poppins] p-2 md:p-8 rounded-3xl mt-12 md:mt-12 text-center">
      {/* Headings */}
      <h2 className="text-[14px] md:text-4xl font-bold tracking-tighter">
        <span className="text-[#2987D7]">Why</span> Should You Treat Early And Not Wait?
      </h2>
      <p className="text-[#2987D7]/80 text-[8px] md:text-lg mt-2 ">
        You save more when cancer is detected and treated early.
      </p>

      {/* Table Comparison */}
      <div className="flex flex-col md:flex-row justify-center items-start gap-6 mt-4 md:mt-12">
        {/* Left Table */}
        <div className="w-full md:w-1/2">
          <h3 className="font-semibold mb-2 text-[10px] md:text-xl">
            PreCancer Detection and <br /> Innovative Treatment/Patient
          </h3>
          <table className="w-full border-collapse text-white text-left text-sm md:text-base">
            <thead>
              <tr className="bg-[#2987D7]">
                <th className="px-4 py-2 font-semibold border border-white">Type Of Service</th>
                <th className="px-4 py-2 font-semibold border border-white">Estimate Cost <span className="text-xs">INR</span></th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-[#2987D7] border border-white">
                <td className="px-4 py-2 border-2 border-white">Oral Cancer Screening</td>
                <td className="px-4 py-2 border-2 border-white">Rs.1,000 – 5,000</td>
              </tr>
              <tr className="bg-[#2987D7]">
                <td className="px-4 py-2 border-2 border-white">Biopsy (if required)</td>
                <td className="px-4 py-2 border-2 border-white">Rs.5,000 – 15,000</td>
              </tr>
              <tr className="bg-[#2987D7]">
                <td className="px-4 py-2 border-2 border-white">Precancer Lesion Phototherapy (Stage 0)</td>
                <td className="px-4 py-2 border-2 border-white">Rs.25,000 – 1 Lakh</td>
              </tr>
              <tr className="bg-[#2987D7]">
                <td className="px-4 py-2 border-2 border-white">Follow-up & Monitoring</td>
                <td className="px-4 py-2 border-2 border-white">Rs.5,000 – 15,000</td>
              </tr>
              <tr className="bg-[#2987D7] font-bold">
                <td className="px-4 py-2 border-2 border-white">Total Cost</td>
                <td className="px-4 py-2 border-2 border-white">Rs.36,000 – 1.35 Lakhs</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Divider */}
        <div className="text-[#2987D7] text-xl font-bold mx-auto md:block">v/s</div>

        {/* Right Table */}
        <div className="w-full md:w-1/2">
          <h3 className="font-semibold mb-2 text-[10px] md:text-xl">
            Traditional Cancer Treatment/ <br /> Patient
          </h3>
          <table className="w-full h-74 border border-black border-collapse text-left text-sm md:text-base">
            <thead>
              <tr className="bg-white text-black">
                <th className="px-4 py-2 font-semibold border border-black">Type Of Service</th>
                <th className="px-4 py-2 font-semibold border border-black">Estimate Cost <span className="text-xs">INR</span></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border border-black">Stage 1</td>
                <td className="px-4 py-2 border border-black">Rs.1.5 Lakhs – 3 Lakhs</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-black">Stage 2</td>
                <td className="px-4 py-2 border border-black">Rs.2.5 Lakhs – 5 Lakhs</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-black">Stage 3</td>
                <td className="px-4 py-2 border border-black">Rs.4 Lakhs – 7 Lakhs</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-black">Stage 4</td>
                <td className="px-4 py-2 border border-black">Rs.6 Lakhs – 12 Lakhs</td>
              </tr>
              <tr className="font-bold">
                <td className="px-4 py-2 border border-black">Total Cost</td>
                <td className="px-4 py-2 border border-black font-black">Rs. 1.5 Lakhs – 12 Lakhs</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer Note */}
      <p className="mt-10 text-xl md:text-2xl font-semibold text-black">
        Cost of Early Treatment can be up to <span className="text-[#2987D7] font-extrabold text-4xl">15x</span> Cheaper!
      </p>
    </div>
  );
};

export default EarlyTreatmentCostComponent;
