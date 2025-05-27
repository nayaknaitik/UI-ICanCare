import React from "react";

const GoogleMapsComponent = (map) => {
  return (
    <div className="flex flex-col items-center py-12 bg-gray-50 ">
      <h2 className="text-3xl font-bold mb-2 tracking-tight">Find Us on Google Maps</h2>
      <p className="text-gray-500 mb-8 text-center max-w-2xl ">
        Visit us at our center for comprehensive cancer care and rehabilitation.
      </p>

      {/* Google Maps Iframe */}
      <iframe src={map.map}
        width="90%"
        height="500"
        style={{ border: 0, borderRadius: "8px" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Innovative Cancer Care and Rehabilitation Pvt Ltd"
      ></iframe>

      {/* Optional - Link to Full Map */}
      <a
        href="https://goo.gl/maps/6f3B6j1W9hE2"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 text-blue-500 hover:text-blue-700 transition"
      >
        View on Google Maps
      </a>
    </div>
  );
};

export default GoogleMapsComponent;
